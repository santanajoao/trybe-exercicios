const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);

const fs = require('fs');
const app = require('../../src/app');
const mocks = require('../mocks/chocolates');
const { searchChocolatesByName } = require('../../src/helpers/chocolates');

const { expect } = chai;
const OK = 200;
const NOT_FOUND = 404;

describe('chocolates API', function () {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mocks.all));
  });

  afterEach(sinon.restore);

  it('GET /chocolates gives an array with all chocolates', async function () {
    const response = await chai.request(app).get('/chocolates');
    expect(fs.promises.readFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(OK);
    expect(response.body.chocolates).to.be.deep.equal(mocks.chocolates);
  });

  it('GET /chocolates/total gives the number of chocolates registered', async function () {
    const response = await chai.request(app).get('/chocolates/total');

    expect(fs.promises.readFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(OK);
    expect(response.body.totalChocolates).to.be.deep.equal(
      mocks.chocolates.length,
    );
  });

  it('GET /chocolates/search?name gives chocolates that contains the name', async function () {
    const query = 'mo';
    const searchResult = await searchChocolatesByName(query);

    const response = await chai
      .request(app)
      .get(`/chocolates/search?name=${query}`);

    expect(fs.promises.readFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(OK);
    expect(response.body.chocolates).to.be.deep.equal(searchResult);
  });

  it('GET /chocolates/search?name responds with 404 if no matches found', async function () {
    const response = await chai
      .request(app)
      .get(`/chocolates/search?name=NodeExpressChaiSinon`);

    expect(fs.promises.readFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(NOT_FOUND);
    expect(response.body.chocolates).to.be.deep.equal([]);
  });

  it('GET /chocolates/:id gives a object with chocolate infos', async function () {
    const chocolateMock = mocks.chocolates[1];

    const response = await chai
      .request(app)
      .get(`/chocolates/${chocolateMock.id}`);

    expect(fs.promises.readFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(OK);
    expect(response.body.chocolate).to.be.deep.equal(chocolateMock);
  });

  it('GET /chocolates/:id responds with an error message when a invalid id is received', async function () {
    const response = await chai.request(app).get('/chocolates/938949192398');
    expect(fs.promises.readFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(NOT_FOUND);
    expect(response.body.message).to.be.equal('Chocolate not found');
  });

  const resultMock = {
    id: 3,
    name: 'La Crem',
    brandId: 6,
  };

  it('PUT /chocolates/:id updates an chocolate data', async function () {
    sinon.stub(fs.promises, 'writeFile').resolves();

    const response = await chai
      .request(app)
      .put(`/chocolates/${resultMock.id}`)
      .send({
        name: resultMock.name,
        brandId: resultMock.brandId,
      });

    // expect(fs.promises.readFile.called).to.be.equal(true);
    // expect(fs.promises.writeFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(OK);
    expect(response.body).to.be.deep.equal(resultMock);
  });

  it('PUT /chocolates/:id responds with not found message when id not found', async function () {
    sinon.stub(fs.promises, 'writeFile').resolves();

    const response = await chai.request(app).put('/chocolates/92831237').send({
      name: resultMock.name,
      brandId: resultMock.brandId,
    });

    // expect(fs.promises.readFile.called).to.be.equal(true);
    expect(fs.promises.writeFile.called).to.be.equal(false);
    expect(response.status).to.be.equal(NOT_FOUND);
    expect(response.body.message).to.be.deep.equal('Chocolate not found');
  });

  it('GET /chocolates/brand/:brandId gives an array of chocolates from a especific brand', async function () {
    const brandId = 1;
    const expectedResult = mocks.chocolates.filter(
      (chocolate) => chocolate.brandId === brandId,
    );

    const response = await chai
      .request(app)
      .get(`/chocolates/brand/${brandId}`);

    expect(fs.promises.readFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(OK);
    expect(response.body.chocolates).to.be.deep.equal(expectedResult);
  });
});
