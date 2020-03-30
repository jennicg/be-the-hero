const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/*
Métodos HTTP

GET: Buscar uma informação do back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end

Tipos de parâmetros:

Query: parametros nomeados enviados na rota após "?"(filtros,paginação), users?page=2
Route params: parametros utilizados para identificar recursos users/1 
Request body: corpo da requisição, utilizado para criar ou alterar recursos
*/



app.listen(3333);