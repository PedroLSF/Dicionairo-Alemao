const express = require("express");
const usuario = require("./usuario.rotas/usuario.rota");

const app = express();

const port = 8080;

app.use(express.json());

// Set a pasta padrão views, para "" a fim de receber o caminho correto do html em questão
app.set('views', __dirname);

// Set a renderização para poder visualizar o HTML
app.engine('html', require('ejs').renderFile);

app.use("/", usuario);

app.listen(port, () =>{
    console.log(`Rodando em http://localhost:${port}`)
})

app.use(express.static('./static'));
