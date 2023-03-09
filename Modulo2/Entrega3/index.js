const express = require("express");
const connectToDatabase = require("./database/database");
const usuario = require("./router/usuario.router");

connectToDatabase();

const app = express();

const port = 8080;

app.use(express.json());

app.use("/usuario", usuario);

app.listen(port, () =>{
    console.log(`Rodando em http://localhost:${port}`)
})

