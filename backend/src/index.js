const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);










/*
  Rotas e Recursos
  app.get significa que você está acessando a rota
  Métodos HTTP:
  
  GET: Buscar uma informação do back-end
  POST: Criar uma informação no back-end
  PUT: Alterar uma informação no back-end
  DELETE : Deletar uma informação no back-end
  
  Tipos de parâmetros:
  
  Query Params: Parâmetros nomeados enviados na rota após o simbolo de "?" e geralmente serve para filtros, paginação
  Routes Params : Parâmetros utilizados para identificar recursos
  Request Body: Corpo da requisição utilizado para criar ou alterar recursos
 */ 

  