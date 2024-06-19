//1) Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, 
//considerando um desconto de 20% para impostos.

let salarioBruto = Number(prompt("Qual o salário bruto?"));

let desconto = 0.20;
let salarioLiquido = salarioBruto * (1 - desconto);

alert("O salário líquido é: " + salarioLiquido);