//Verifica se está completo
function submissionLogin(){
    if(formsLogin.Username.value == '' || formsLogin.Senha.value == ''){
        alert('Não deixe nenhum campo vazio!');
    }else{
        // alert("Login Realizado Com Sucesso");
        document.querySelector("#msg").innerHTML =
                `<div class ="card">
                <span> Login Realizado com Sucesso </span>
                </div>
                `;
    }
    document.querySelector("#Username").value = "";
    document.querySelector("#Senha").value = "";
    return false;
}

// Criar um evento de click para o botão, que irá executar a function