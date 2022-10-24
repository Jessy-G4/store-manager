const sinon = require('sinon');

const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.service');
const { products } = require('../../mocks/mock');

describe('second', () => {
   it('retorna todos os produtos', async function () {
    const response = {}
    const require = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'pegarTudo').resolves({ status: 200, message: products });
  })
  it('retorna o produto baseado no id', async function () {
    const response = {}
    const require = { params: { id: 1 } };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsController, 'pegarPeloID').resolves({ status: 200, message: products[0] });
  })
  afterEach(sinon.restore);
});