const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('word');
let palavraDigitada = myParam;

document.getElementById("dataDigitada").innerHTML=myParam;

function traduzir(){

    const encodedParams = new URLSearchParams();

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

    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => getData(palavraDigitada, response))
        .catch(err => console.error(err));

}

function getData(palavraDigitada, response){

    //getting the values
    var palavraTrad = data.response.translation[0].translatedText;
    console.log(palavraTrad)
    document.querySelector("#dataTraduzida").innerHTML =
                `<span class ="card"> ${palavraTrad} </span>
                `;

}