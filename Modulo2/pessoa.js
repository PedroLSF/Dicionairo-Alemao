var scanf = require('scanf');

// Construtor do Pai

class Pessoa{
    constructor(nome, idade, genero){
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }

    alterarIdade = function() {
        console.log('Digite a idade correta:');
        var novaIdade = scanf("%d");
        this.idade = novaIdade;
    }

}

module.exports = {
    Pessoa
}