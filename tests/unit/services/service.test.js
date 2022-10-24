const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.models');
const productsService = require('../../../src/services/products.service');
const { products } = require('../../mocks/mock');

describe('third', () => {
   it('retorna todos os produtos', async function () {
     sinon.stub(productsModel, 'PegarTodosOsProdutos').resolves(products);
     const result = await productsService.pegarTudo();
     expect(result.message).to.be.deep.equal(products);
  })
  it('retorna o produto baseado no id', async function () {
     sinon.stub(productsModel, 'PegarPeloID').resolves(products[0]);
     const result = await productsService.pegarID(1);
     expect(result.message).to.be.deep.equal(products[0]);
  })
  afterEach(sinon.restore);
});