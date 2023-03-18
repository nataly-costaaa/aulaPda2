/*var num_1 = 15.24;
var num_2 = 15.24;

var num_comb = num_1 == num_2;
//alert("Resultado da igualdade: " + num_comb);

//a mensagem ira aparecer no id 'logica' q está no HTML
document.getElementById("logica").innerHTML = "Resultado da igualdade: " + num_comb;

// zero número
const num_3 = 0;
//zero caracter
const obj = new String("0");
const str = "0";

//as três iguldades === quer dizer q é estritamente igual (forte). duas igualdades == quer dizer q é fracamente igual (fraco)
console.log(num_3 === num_3);
console.log(obj === obj);
console.log(str === str);

//resultado 'false' pq a forma q está declarada no const está de maneira diferentes, embora elas sejam strings. Por o === ser estritamente igual o resultado seria 'false'
console.log(num_3 === obj)
*/


var num_1 = 15.24;
var num_2 = 15.24;
var num_3 = 0;
var num_4 = 10;
var num_5 = 5;
var num_6 = 12;

console.log(num_1 > num_3);
console.log(num_6 < num_4);
console.log(num_1 >= num_2);

console.log(num_6 % num_4)

// Faça um script que retorna se o número é para ou impar

var num_7 = 165479685469;
const div = 2;

console.log(num_7 % div);

/*if (num_1 > num_3) {
    console.log("Verdadeee")
}*/
if (num_1 < num_3) {
    console.log("Verdadeee")
}
else if (num_1 == num_3) {
    console.log("É iguaaal")
}
else {
    console.log("É falsooo")
}
