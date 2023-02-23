document.getElementById("dataDigitada").innerHTML=localStorage.getItem("palavraDig");
document.getElementById("dataTraduzida").innerHTML=localStorage.getItem("palavraTrad");

// console.log(localStorage.getItem("palavraDig"));
// console.log(localStorage.getItem("palavraTrad"));

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('word');
// console.log(myParam)

const urlTrad = new URLSearchParams(window.location.search);
const myTrad = urlTrad.get('wordTrad');
// console.log(myTrad)