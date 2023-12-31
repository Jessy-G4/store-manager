const produtos = require('../services/products.service');

const todosOsProdutos = async (_req, res) => {
  const resposta = await produtos.pegarTudo();
  res.status(200).send(resposta);
};

const pegarPeloID = async (req, res) => {
  const { id } = req.params;
  const resposta = await produtos.pegarID(id);

  if (resposta) {
    return res.status(200).send(resposta);
  }

  res.status(404).send({
    message: 'Product not found',
  });
};

const adicionarProdutos = async (req, res) => {
  const { name } = req.body;
  const resposta = await produtos.adicionandoProduto(name);
  if (resposta) {
    return res.status(201).send(resposta);
  }
  res.status(404).send({
    message: 'Produto não criado',
  });
};

const pegarTodaVenda = async (_req, res) => {
  const resposta = await produtos.pegarTodasAsVendas();
  return res.status(200).json(resposta);
};

const vendaID = async (req, res) => {
  const { id } = req.params;
  const resposta = await produtos.vendasID(id);
  if (resposta.length === 0) {
    return res.status(404).send({ message: 'Sale not found' });
  }
  res.status(200).json(resposta);
};

const atualizandoProduto = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const resposta = await produtos.atualizandoProdutoById({ id, name });
  const resultado = await produtos.pegarID(id);
  if (!resultado) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(resposta);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await produtos.pegarID(id);
  if (!result) return res.status(404).json({ message: 'Product not found' });
  const resposta = await produtos.deleteProductById(id);
  return res.status(204).json(resposta);
};

module.exports = {
  todosOsProdutos,
  pegarPeloID,
  adicionarProdutos,
  pegarTodaVenda,
  vendaID,
  atualizandoProduto,
  deleteProduct,
};
