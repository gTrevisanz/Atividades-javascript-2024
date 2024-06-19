//Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota)
//da faculdade. A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final.
//O usuário deve digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada
//na tela.

let atvd = Number(prompt("Qual a nota da atividade individual? "));
let peso1 = Number(prompt("Qual o seu peso? "));
let smn = Number(prompt("Qual a nota do Seminário em Equipe? "));
let peso2 = Number(prompt("Qual o seu peso? "));
let pf = Number(prompt("Qual a nota do Projeto Final? "));
let peso3 = Number(prompt("Qual o seu peso? "));

let resultado1 = (atvd * peso1) + (smn * peso2) + (pf * peso3);
let resultado2 = peso1 + peso2 + peso3;
let resultadoFinal = resultado1 / resultado2;

alert("Resultado final foi: " + resultadoFinal);
