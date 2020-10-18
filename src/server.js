// importar bibliotecas
const express = require("express");
const path = require("path");
const pages = require("./pages.js");
const pages2 = require("./pages2.js");


// iniciando o express
const server = express();
server
  // utilizar body do req
  .use(express.urlencoded({ extended: true }))
  // utilizando os arquivos estaticos
  .use(express.static("public"))

  // configurando template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // rotas da aplicação
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .get("/feedback", pages2.feedback)
  .post("/save-feedback", pages2.saveFeedback)
  .post("/save-orphanage", pages.saveOrphanage)

// ligar o servidor
server.listen(5500);
