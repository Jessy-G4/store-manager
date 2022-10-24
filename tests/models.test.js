const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../src/connection');
const productsModel = require('../src/models/products.models');
const { products, idProduct } = require('./mocks/mock');

describe('first', () => {
  test('se retorna todos os produtos', async function () {
    const output = [
      {
        "id": 1,
        "name": "Martelo de Thor"
      },
      {
        "id": 2,
        "name": "Traje de encolhimento"
      },
      {
        "id": 3,
        "name": "Escudo do Capitão América"
      }
    ];

    sinon.stub(connection, 'execute').resolves([products]);

    const result = await productsModel.PegarTodosOsProdutos();

    expect(result).to.deep.equal(output);

  })
  test('se retorna um produto', async function () {
    const output = {
      id: 1,
      name: 'Martelo de Thor',
    }
    sinon.stub(connection, 'execute').resolves([idProduct]);

    const result = await productsModel.PegarPeloID(1);
    expect(result).to.deep.equal(output);
  })
  test('se retorna um novo produto', async function () {
    const output = {
      id: 5,
      name: 'jessy teste',
    }
    sinon.stub(connection, "execute")
      .onFirstCall()
      .resolves([{ insertId: 5 }])
      .onSecondCall()
      .resolves([[output]]);
    const result = await productsModel.InserirNovoProduto("jessy teste");
    expect(result).to.be.equal(output);
  });
  test('se atualiza um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const result = await productsModel.AtualizandoId({name:'jessy', id:1});

    expect(result).to.equal(undefined);
  });
  test('se apaga um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const result = await productsModel.deleteId(1);

    expect(result).to.equal(undefined);
  });

  afterEach(sinon.restore);
})