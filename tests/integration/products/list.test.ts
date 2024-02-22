import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';


chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao listar todos os produtos corretamente retorna sucesso', async function () {
  
    const httpResponse = await chai.request(app).get('/products');
    expect(httpResponse.status).to.equal(200);
  });

});
