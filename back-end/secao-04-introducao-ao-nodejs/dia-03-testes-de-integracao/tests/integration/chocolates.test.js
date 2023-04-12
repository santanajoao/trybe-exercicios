const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

chai.use(chaiHttp);

const fs = require('fs');
const app = require('../../src/app');
const mocks = require('../mocks/chocolates');

const { expect } = chai;
const OK = 200;

describe('chocolates API', () => {
  afterEach(sinon.restore);

  it('GET /chocolates gives an array with all chocolates', async () => {
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mocks.all));

    const response = await chai.request(app).get('/chocolates');
    expect(fs.promises.readFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(OK);
    expect(response.body.chocolates).to.be.deep.equal(mocks.chocolates);
  });

  it('GET /chocolates/:id gives a object with chocolate infos', async () => {
    sinon.stub(fs.promises, 'readFile').resolves(JSON.stringify(mocks.all));

    const chocolateMock = mocks.chocolates[1];

    const response = await chai
      .request(app)
      .get(`/chocolates/${chocolateMock.id}`);

    expect(fs.promises.readFile.called).to.be.equal(true);
    expect(response.status).to.be.equal(OK);
    expect(response.body.chocolate).to.be.deep.equal(chocolateMock);
  });
});
