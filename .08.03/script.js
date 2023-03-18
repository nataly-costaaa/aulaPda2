// EXIBIR O ALERT
// alert("Teste - Alert");


//var | const | let : são ultilizados de acordo com a sua nescessidade

//DECLARAÇÃO DE VARIÁVEL
var numeroA = 5;
var numeroB = 10;
var soma = numeroA + numeroB;
document.getElementById("soma").innerHTML = "Resultado da soma: " + numeroA + " + " + numeroB + " = " + soma;


// alert("Resultado: " + soma);

/*DECLAÇÃO DE CONSTANTE (Const) são todas as variáveis que não irão sofrer alteração em tempo de execução*/

const numeroA_sub = 500;
const numeroB_sub = 10;
const subtracao = numeroA_sub - numeroB_sub;
//alert("Resultado - sub: " + subtracao);
document.getElementById("subtracao").innerHTML = "Resultado da subtração: " + subtracao;


/* DECLARAÇÃO DO LET o let é uma váriavel que pode ser usada em diversos locais do código, podendo ser alterada em tempo de execução */
let numeroA_mult = 5;
let numeroB_mult = 2;
let multiplicacao = numeroA_mult * numeroB_mult;
// alert("Resultado - multi: " + multiplicacao);
document.getElementById("multiplicacao").innerHTML = "Resultado da multiplicação: " + multiplicacao;

/*A última possibilidade de definir as variáveis é não colocar nenhum "prefixo".*/
numeroA_div = 20;
numeroB_div = 2;
divisao = numeroA_div / numeroB_div;
// alert("Resultado - divisão: " + divisao);
document.getElementById("divisao").innerHTML = "Resultado da divisão: " + divisao;
