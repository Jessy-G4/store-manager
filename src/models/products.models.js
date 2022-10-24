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

const TodasAsVendas = async () => {
  const sql = `
    SELECT 
      sp.sale_id as saleId,sp.product_id as productId, sp.quantity, s.date
    FROM
      StoreManager.sales_products sp
        INNER JOIN
      StoreManager.sales s ON sp.sale_id = s.id`;
  const [result] = await connection.execute(sql);
  return result;
};

const VendasPeloId = async (id) => {
  const sql = `
    SELECT 
      sp.product_id as productId, sp.quantity, s.date
    FROM
      StoreManager.sales_products sp
        INNER JOIN
      StoreManager.sales s ON sp.sale_id = s.id
        WHERE sp.sale_id = ?`;
  const [result] = await connection.execute(sql, [id]);
  return result;
};

const AtualizandoId = async (product) => {
  const query = `
    UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?
  `;
  await connection.execute(query, [product.name, product.id]);
};

const deleteId = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  await connection.execute(query, [id]);
};

module.exports = {
 PegarTodosOsProdutos,
 PegarPeloID,
 InserirNovoProduto,
 TodasAsVendas,
 VendasPeloId,
  AtualizandoId,
 deleteId,
};