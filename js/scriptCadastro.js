// Seleciona o CEP e faz um MASK
$(document).ready(function($){
    $("#CEP").mask("99999-999");
});

//Verifica se está completo
function submissionCadastro(){
    let result_botao = document.forms.formsCadastro;
    if(formsCadastro.Username.value == '' || formsCadastro.Senha.value == '' || formsCadastro.Nome.value == '' || formsCadastro.CEP.value == '' 
            || formsCadastro.Cidade.value == '' || formsCadastro.Bairro.value == '' || formsCadastro.Rua.value == ''){
                alert('Não deixe nenhum campo vazio!');     
    }else{
        document.querySelector("#msg").innerHTML =
                `<div class ="card">
                <span> Cadastro Realizado com Sucesso </span>
                </div>
                `;
    }
    document.querySelector("#Username").value = "";
    document.querySelector("#Senha").value = "";
    document.querySelector("#Nome").value = "";
    document.querySelector("#CEP").value = "";
    document.querySelector("#Cidade").value = "";
    document.querySelector("#Bairro").value = "";
    document.querySelector("#Rua").value = "";
    
    return false;

}