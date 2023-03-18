var x;
x = document.getElementById('paragrafoTexto');

function alterarCorParagrafo() {
    // document.getElementById('paragrafoTexto').style.color='green';
    x.onclick = alterarCor()
    console.log("A alteração da cor do texto foi realizada")
}

function alterarCor() {

    x.style.color = 'green';   
}

