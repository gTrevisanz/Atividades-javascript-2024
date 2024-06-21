//15) Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.

comprados = Number(prompt('Números de ovos comprados?'))

ovos1 = 40
ovos12 = 30
ovos24 = 25

if(comprados <= 11){
    totalCentavos = comprados * ovos1
    totalReais = totalCentavos / 100
    alert('Valor da compra foi : R$' + totalReais)
}

else if(comprados <=12){
    totalCentavos = comprados * ovos12
    totalReais = totalCentavos / 100;
    alert('Valor da compra foi : R$' + totalReais)

}

else if(comprados>= 24){
    totalCentavos = comprados * ovos24
    totalReais = totalCentavos / 100;
    alert('Valor da compra foi : R$' + totalReais)
}