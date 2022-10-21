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

module.exports = {
  todosOsProdutos,
  pegarPeloID,
  adicionarProdutos,
};
