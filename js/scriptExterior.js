const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('word');
// console.log(myParam)

document.getElementById("dataDigitada").innerHTML=myParam;

const urlTrads = new URLSearchParams(window.location.search);
const myTrad = urlTrads.get('wordTrad');
console.log(myTrad)

document.getElementById("dataTraduzida").innerHTML=myTrad;

