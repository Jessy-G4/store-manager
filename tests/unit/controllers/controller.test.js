const sinon = require('sinon');

const productsController = require('../../../src/controllers/products.controller');
const { products } = require('../../mocks/mock');

describe('second', () => {
  it('retorna o produto baseado no id', async function () {
    const response = {}
    const require = { params: { id: 1 } };

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsController, 'pegarPeloID').resolves({ status: 200, message: products[0] });
  })
  afterEach(sinon.restore);
});