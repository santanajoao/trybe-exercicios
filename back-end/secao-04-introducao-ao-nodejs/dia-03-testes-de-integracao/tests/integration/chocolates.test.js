const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);

const fs = require('fs');
const app = require('../../src/app');
const mocks = require('../mocks/chocolates');

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
