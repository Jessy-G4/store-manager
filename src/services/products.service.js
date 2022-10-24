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
  return newProduct;
};

const pegarTodasAsVendas = async () => {
  const response = await produtos.TodasAsVendas();
  return response;
};

const vendasID = async (id) => {
  const response = await produtos.VendasPeloId(id);
  return response;
};

const atualizandoProdutoById = async (produto) => {
  await produtos.AtualizandoId(produto);
  return produto;
};

const deleteProductById = async (id) => {
  await produtos.deleteId(id);
  return undefined;
};

module.exports = {
  pegarID,
  pegarTudo,
  adicionandoProduto,
  pegarTodasAsVendas,
  vendasID,
  atualizandoProdutoById,
  deleteProductById,
};