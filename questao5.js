/*5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

 */

const prompt = require("prompt-sync")();

//var string = "1234567890"
var string = prompt("Insira o texto que gostaria de inverter: ")
var stringFinal = []

for(var i = string.length-1; i >= 0; i--){
    console.log(string.charAt(i))
    stringFinal.push(string.charAt(i))
}
console.log(stringFinal.join(''))