import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import productMock from '../../mocks/productMock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Ao cadastrar um produto corretamente retorna sucesso', async function () {
    const httpRequestBody = productMock.productMock;
  
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body.id).to.be.a('number');
  });
  it('Ao cadastrar um produto com nome como numero retorna erro', async function () {
    const httpRequestBody = productMock.wrongProductMock;
  
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
    expect(httpResponse.status).to.equal(422);
  });
  

});
