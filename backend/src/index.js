const express = require('express');
const routes  = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors()); // origin
app.use(express.json());
app.use(routes);

/**
 * Rota -> todo o caminho
 * Recurso -> oq queremos acessar (fim do caminho)
 * 
 * Métodos HTTP:
 * GET    -> buscar informações
 * POST   -> Enviar/criar uma informação no back
 * PUT    -> Alterar uma informação
 * DELETE -> Deletar uma informação
 * 
 * Tipos de parêmetros:
 * Query Params -> enviados e nomeados na rota após ? e serve para filtros, paginação
 * Route Params -> Identificar recursos (sempre com dpois pontos)
 * Request Body -> Corpo da requisição, utilizado para criar ou alterar
 * 
 * Bancos de dados:
 * SQL   -> MySQL, SQlite, PostgreSQL
 * noSQL -> MongoDB, CounchDB
 * 
 * Driver do BD  -> SQL
 * Query Builder -> JS (KNEX.JS)
 */





app.listen(3333);