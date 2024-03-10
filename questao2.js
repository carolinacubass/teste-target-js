/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */

const prompt = require("prompt-sync")();

var a = 0
var b = 1
var c = 0

var escolhido = parseInt(prompt("Insira o numero: "))

const arrayfibo = []
arrayfibo.push(a)
arrayfibo.push(b)
for(var i = 0;i<15;i++){
    c = a + b
    a = b
    b = c
    arrayfibo.push(c)
}
console.log(arrayfibo)
console.log(escolhido)

console.log(arrayfibo.includes(escolhido) ? "O numero faz parte da sequencia de fibonacci" : "O numero não faz parte")

//Resposta: "O número não faz parte"