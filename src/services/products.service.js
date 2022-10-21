const produtos = require('../models/products.models');

const pegarID = async (ID) => {
  const [[produto]] = await produtos.PegarPeloID(ID);
  return produto || false;
};

const pegarTudo = async () => {
  const [tudo] = await produtos.PegarTodosOsProdutos();
  return tudo;
};

const adicionandoProduto = async (produto) => {
  const insertId = await produtos.InserirNovoProduto(produto);
  const [[newProduct]] = await produtos.PegarPeloID(insertId);
  console.log(newProduct);
  return newProduct;
};

module.exports = {
  pegarID,
  pegarTudo,
  adicionandoProduto,
};