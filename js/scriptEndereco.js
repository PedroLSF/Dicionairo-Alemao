var CEP = '';

function consultarEndereco(){
    
    // Checa se é valido
    let value = document.querySelector("#CEP").value.replace("-","");
    if(value.length == 8){
        CEP = value;
        fetch(`https://viacep.com.br/ws/${CEP}/json/`).then((response) => {
                    response.json().then((data) => {
                        replaceEndereco(data);
                        // console.log(data);
                    })
                }) 
    }else{
        // alert("CEP inválido!");
        document.querySelector("#CEP").style.backgroundColor="#f18585";
    }
}


function replaceEndereco(data){
    let cidade = document.querySelector("#Cidade");
    let bairro = document.querySelector("#Bairro");
    let rua = document.querySelector("#Rua");

    if(data.erro){
        alert("CEP não encontrado");
        document.querySelector("#CEP").value = "";
        return;
    }

    cidade.value = data.localidade;
    bairro.value = data.bairro;
    rua.value = data.logradouro;

    if(cidade.value != ""){
        
    let disableCidade = document.getElementById("Cidade");
    disableCidade.disabled = true;

    }

    if(bairro.value != ""){
        
        let disableBairro = document.getElementById("Bairro");
        disableBairro.disabled = true;

    }

    if(rua.value != ""){
        
    let disableRua = document.getElementById("Rua");
    disableRua.disabled = true;
    
    }

}


// Reseta a Cor

function resetColor(){
    document.querySelector("#CEP").style.backgroundColor="white";
}
