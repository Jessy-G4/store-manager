// olá mundo :D weee
const express = require('express');
const rotas = require('./routes/products.routes');
const rotasDeVenda = require('./routes/sales.routes');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
// meu codigo
app.use('/products', rotas);
app.use('/sales', rotasDeVenda);
// fim meu codigo
// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;