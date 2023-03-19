var select = document.querySelector('select');


// criei uma nova função para fazer calculo da tabuada
function calcularTabuada(valorTabuada) {
    var texto = "";
    for (var contador = 0; contador <= 10; contador++) {
        texto += contador + " x " + valorTabuada + " = " + contador * valorTabuada + "<br>";
    }
    document.getElementById("estruturaRepeticao").innerHTML = texto;
}

select.addEventListener('change', numeroTabuada);

// aqui chamei a função acima em cada caso pois fica mais legivel e organizado
function selecinarNumeroTabuada() {

    const escolhaTabuada = select.value;
    
    switch (escolhaTabuada) {
        case 'tabuada5':
            calcularTabuada(5);
            break;

        case 'tabuada6':
            calcularTabuada(6);
            break;   

        case 'tabuada7':
            calcularTabuada(7);
            break;
        case 'tabuada8':
            calcularTabuada(8);
            break;
            
        case 'tabuada9':
            calcularTabuada(9);
            break;
    }

}