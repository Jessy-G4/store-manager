const express = require('express');
const produtos = require('../controllers/products.controller');
// const connection = require('../connection');

const router = express.Router();

router.use(express.json());

router.get('/:id', produtos.pegarPeloID);

router.get('/', produtos.todosOsProdutos);

// router.get('/', (_req, res) => {
//   const [result] = connection.execute('SELECT * FROM StoreManager.products');
//   res.status(200).json(result);
// }); duvida

module.exports = router;