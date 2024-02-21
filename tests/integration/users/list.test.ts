import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';


chai.use(chaiHttp);

describe('GET /users', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Ao buscar todos os usuarios, retorna com sucesso', async function () {
  
    const httpResponse = await chai.request(app).get('/users');
    expect(httpResponse.status).to.equal(200);
  });

});
