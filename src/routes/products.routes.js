const express = require('express');
const produtos = require('../controllers/products.controller');
const validador = require('../middlewares/middlewares');
// const connection = require('../connection');

const router = express.Router();

router.use(express.json());

router.get('/:id', produtos.pegarPeloID);

router.get('/', produtos.todosOsProdutos);

router.post('/', validador.validaNomeDoProduto, produtos.adicionarProdutos);

router.put('/:id', validador.validaNomeDoProduto, produtos.atualizandoProduto);

router.delete('/:id', produtos.deleteProduct);

// router.post('/', async (req, res) => {
//   const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';
//   const [result] = await connection.execute(sql, [req.body.name]);
//   res.status(201).json(result);
// }); 

module.exports = router;