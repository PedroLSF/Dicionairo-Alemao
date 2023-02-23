const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('word');
let palavraDigitada = myParam;

document.getElementById("dataDigitada").innerHTML=myParam;
    
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
    .then(response => getData(response.data.translations[0].translatedText))
    .catch(err => console.error(err));

function getData(data){

    //getting the values
    let palavraTrad = data;
    console.log(palavraTrad)
    let printPalavra = document.querySelector("#palavraTrad")
    printPalavra.innerHTML =
                `<span class ="word-card"> ${palavraTrad} </span>
                `;
}