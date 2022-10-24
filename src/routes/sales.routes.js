const express = require('express');
const produtos = require('../controllers/products.controller');
// const connection = require('../connection');

const router = express.Router();

router.use(express.json());

router.get('/', produtos.pegarTodaVenda);

router.get('/:id', produtos.vendaID);

// router.post('/', async (req, res) => {
//   const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';
//   const [result] = await connection.execute(sql, [req.body.name]);
//   res.status(201).json(result);
// }); 

module.exports = router;