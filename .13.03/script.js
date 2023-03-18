// validação estrutura if e else sequencial. validação switch de forma unitaria
const idade = 20;
const habilitacao = false;

if (idade >= 18 && habilitacao == true) {
    document.getElementById("estruturaCondicional").innerHTML = "Condutor habilitado";
} else if (idade <= 18) {
    document.getElementById("estruturaCondicional").innerHTML = "Idade inferior ao limite estabelecido";
} else if (habilitacao == false) {
    document.getElementById("estruturaCondicional").innerHTML="O condutor não possui habilitação";
}



