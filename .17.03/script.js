var texto = "";
var valorTabuada = 2;

for (var contador = 0; contador <= 10; contador++) {
    // texto += 'numero ' + contador + "<br>";
    texto += contador + " x " + valorTabuada + " = " + contador * valorTabuada + "<br>";

}
document.getElementById("estruturaRepeticao").innerHTML = texto;