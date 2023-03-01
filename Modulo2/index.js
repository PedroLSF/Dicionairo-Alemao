const { Pessoa } = require("./pessoa");
const { Usuario } = require("./usuario");
var scanf = require('scanf');

// Váriavel Globais

let usuario = null;

// Menu

function menu(){

    //Opções para o Usuário

    console.log('\n');
    console.log('1 - Criar um Usuário:\n');
    console.log('2 - Alterar Idade\n');
    console.log('3 - Alterar Senha\n');
    console.log('4 - Alterar E-mail\n');
    console.log('5 - Visualizar Usuário\n');
    console.log('0 - Sair\n');
    console.log('Escolha o que fazer: ');

    //Armazena a Escolha do Usuário

    var escolha = scanf("%d");

    // Criação do Usuário

    if(escolha == 1){
        console.log('\n');
        console.log('Digite seu nome:')
        var nome = scanf("%s");
        console.log('\n');
        console.log('Digite sua idade:')
        var idade = scanf("%d");
        console.log('\n');
        console.log('Digite seu genero:')
        var genero = scanf("%s");
        console.log('\n');
        console.log('Digite sua senha:')
        var senha = scanf("%s");
        console.log('\n');
        console.log('Digite seu e-mail:')
        var email = scanf("%s");

        usuario = new Usuario(nome, idade, genero, senha, email);
        menu();
    }
    
    // Alteração da Idade

    else if(escolha == 2){
        usuario.alterarIdade();
        menu();
    }

    // Alteração da Senha
    
    else if(escolha == 3){
        usuario.alterarSenha();
        menu();
    }
    
    // Alteração do E-mail

    else if(escolha == 4){
        usuario.alterarEmail();
        menu();
    }

    // Visualização do Usuário Criado ou Editado

    else if(escolha == 5){

        console.log("\n");
        console.log("Nome:")
        console.log(usuario.nome + "\n");
        console.log("Idade:")
        console.log(usuario.idade + "\n");
        console.log("Genero:")
        console.log(usuario.genero + "\n");
        console.log("Senha:")
        console.log(usuario.senha + "\n");
        console.log("E-mail:")
        console.log(usuario.email + "\n");
        menu();
    }

    // Sair do sistema
    
    else if(escolha == 6){
        console.log("Obrigado por utilizar iTalents Group");
    }

    // Erro

    else{
        console.log("Digite um valor válido\n")
        console.log("\n")
        menu();
    }
    
}

menu();

