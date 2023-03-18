const nota1 = 7;
const nota2 = 10;
const nota3 = 5.5;
const media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    document.getElementById("estruturaCondicional").innerHTML = "Aprovado";
} else if (media < 3) {
    document.getElementById("estruturaCondicional").innerHTML = "Reprovado";
} else if (media > 3 && media < 7) {
    document.getElementById("estruturaCondicional").innerHTML="Recuperação";
}
