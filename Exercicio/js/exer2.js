const semaforoVerde = 1;
const semaforoAmarelo = 2;
const semaforoVermelho = 3;
const corSemaforo = semaforoAmarelo;

if (corSemaforo === semaforoVerde) {
    document.getElementById("estruturaCondicional").innerHTML="Semaforo verde, pode avançar";
}
else if (corSemaforo === semaforoAmarelo) {
    document.getElementById("estruturaCondicional").innerHTML="Semaforo amarelo, fique atento";
} else {
    document.getElementById("estruturaCondicional").innerHTML="Semaforo vermelho, PARE!!";
}