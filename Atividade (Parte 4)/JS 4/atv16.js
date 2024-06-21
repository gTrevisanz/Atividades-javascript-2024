//16) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.



ladostotais = lado1, lado2, lado3

lado1 = Number(prompt('Primeiro lado?'))
lado2 = Number(prompt('Segundo lado?'))
lado3 = Number(prompt('Terceiro lado?'))



if (lado1 == lado2 && lado2 == lado3 && ladostotais != 2 && ladostotais == 3){
  alert('Seu triângulo é um equilátero')
}

else if(lado1 == lado2 && lado2 == lado3 && ladostotais != 3 && ladostotais == 2){
    alert('Seu triângulo é um isósceles')
}

else{
    alert('Seu triângulo triângulo escaleno')
}