const { request, response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

/*
  get - Buscar uma infirmação dentro do nosso servidor
  post - Inserir uma informação no servidor
  put - Alterar uma informação no servidor 
  patch - Alterar uma informação especifica 
  delete - Deletar uma informação no servidor 
*/

/*
  Tipos de parâmetros

  Route Params => Identificar um recurso p/ editar / deletar / buscar 
  Query Params => Paginação / Filtro 
  Body Params => Os objetos insersão/  alteração (JSON)
*/

app.get("/courses", (request, response) => {
  const query = request.query;
  console.log(query);
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body;
  console.log(body);
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4"]);
});

//localhost:3031
app.listen(3033);
