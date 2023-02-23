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
        'X-RapidAPI-Key': '48d5f99071mshfa3d37f86b80e85p1459e8jsn1ed82910a9e2',
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
    let printPalavra = document.querySelector("#palavraTrad")
    printPalavra.innerHTML =
                `<span class ="word-card"> ${palavraTrad} </span>
                `;
}