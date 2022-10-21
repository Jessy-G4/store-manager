const connection = require('../connection');

const PegarTodosOsProdutos = async () =>
  connection.execute('SELECT * FROM StoreManager.products');

const PegarPeloID = async (ID) =>
  connection.execute('SELECT * FROM StoreManager.products WHERE id = ?', [
    ID,
  ]);

const InserirNovoProduto = async (produto) => {
  const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(sql, [produto]);
  return insertId;
}; 

module.exports = {
 PegarTodosOsProdutos,
 PegarPeloID,
 InserirNovoProduto,
};