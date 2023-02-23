function traduzir(){

    const encodedParams = new URLSearchParams();

    let palavraDigitada = document.querySelector(".word-input").value;

    encodedParams.append("q", palavraDigitada);
    encodedParams.append("target", "pt");
    encodedParams.append("source", "de");

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '5f21641cddmsh4601c9771a0c5e8p1b1289jsn6d601b362759',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    };

    // fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
    //     .then(response => response.json())
    //     .then(response => getData(palavraDigitada, response))
    //     .catch(err => console.error(err));
    
    getData("kommen", "Palavra Traduzida")

}

function getData(palavraDigitada, response){

    //getting the values
    var palavraTrad = data.response.translation[0];
    console.log(palavraTrad)
    document.querySelector(".word-output").value = palavraTrad;
    //saving the values in local storage
    // localStorage.setItem("palavraDig", palavraDigitada);
    // localStorage.setItem("palavraTrad", palavraTrad);
}