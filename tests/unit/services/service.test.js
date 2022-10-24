const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.models');
const productsService = require('../../../src/services/products.service');
const { products, idProduct } = require('../../mocks/mock');

describe('third', () => {
   it('retorna todos os produtos', async function () {
     sinon.stub(productsModel, 'PegarTodosOsProdutos').resolves(products);
     const result = await productsService.pegarTudo();
     expect(result).to.be.deep.equal(idProduct);
  })
  it('retorna o produto baseado no id', async function () {
     sinon.stub(productsModel, 'PegarPeloID').resolves(idProduct);
     const result = await productsModel.PegarPeloID(1);
     expect(result).to.be.deep.equal(idProduct);
  })
  afterEach(sinon.restore);
});