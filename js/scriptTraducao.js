function traduzir(){

    let value = document.querySelector(".word-input").value;
    var palavraDigitada = value;
    var init = {

        method: 'GET',
        headers: {'X-Secret': '202f0d9bef017e465adda19a91d94719e29f203d6ce0789ac77bf3db08aa8cb3'},
        mode: 'no-cors',
        cache: 'default'
    };


    language = "dept"
    fetch(`https://api.pons.com/v1/dictionary?q=${palavraDigitada}&l=${language}`,init).then((response) => {
                        response.json().then((data) => {
                        translation(data);
                        console.log(data);
                    })
                })

}
