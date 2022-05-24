/* a)  como fazemos para acessar os parâmetros passados na linha de comando para o Node?
R: utilizando process.argv*/


// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

/* const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos`) */

// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

/* const nome = process.argv[2]
const idade = Number(process.argv[3])
const novaIdade = Number(process.argv[3]) + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}`) */

/* Exercício 2
Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos. */
