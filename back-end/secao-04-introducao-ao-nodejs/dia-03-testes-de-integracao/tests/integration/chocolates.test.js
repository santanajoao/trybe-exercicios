const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);

const { expect } = chai;
const OK = 200;

describe('chocolates API', () => {
  it('GET /chocolates gives a array with all chocolates', async () => {
    const response = await chai.request(app).get('/chocolates');
    expect(response.status).to.be.equal(OK);
  });
});
