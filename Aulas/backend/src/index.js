
/**
 * Rotas / Recursos
 */
/**
 * Metodos HTTP
 * GET: buscar yuma informaçao back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE : Deletar uma informação no back-end
 */
/**
 * Query Params: Parametros noemados enviados na rota apos"?"( Filtros , paginação")
   Route Params: Parametros utilizados para identificar recursos
Request Body : corpo da requisiçao , utilizado para criar ou alterar recursos.
 */
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333)