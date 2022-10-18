const produtos = require('../models/products.models');

const pegarID = async (ID) => {
  const [[produto]] = await produtos.PegarPeloID(ID);
  return produto || false;
};

const pegarTudo = async () => {
  const [tudo] = await produtos.PegarTodosOsProdutos();
  return tudo;
};

module.exports = {
  pegarID,
  pegarTudo,
};