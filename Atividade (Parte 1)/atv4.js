//4) Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação. 
//Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.
semana1 = Number(prompt('digite quantas horas você estudou na primeira semana'))
var semana2 = Number(prompt('Na segunda semana'))
var semana3 = Number(prompt('Na terceira semana'))
var semana4 = Number(prompt('Na quarta semana'))
var s = (semana1 + semana2 + semana3 + semana4) /4
alert(`sua média no mês é :` + s + `horas`)