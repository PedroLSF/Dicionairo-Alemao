const { Pessoa } = require("./pessoa");
var scanf = require('scanf');

class Usuario extends Pessoa{
    constructor(nome, idade, genero, senha, email){
        super(
            nome,
            idade,
            genero
        );
        this.senha = senha;
        this.email = email;

        }

        alterarSenha = function() {
            console.log('Digite a nova senha:');
            var novaSenha = scanf('%s');
            this.senha = novaSenha;
        }

        alterarEmail = function() {
            console.log('Digite o novo E-mail:');
            var novaEmail = scanf('%s');
            this.email = novaEmail;
        }
}

module.exports = {
    Usuario
}