const connection = require('../connection');

const PegarTodosOsProdutos = async () =>
  connection.execute('SELECT * FROM StoreManager.products;');

const PegarPeloID = async (ID) =>
  connection.execute('SELECT * FROM StoreManager.products WHERE id = ?', [
    ID,
  ]);

module.exports = {
 PegarTodosOsProdutos,
 PegarPeloID,
};