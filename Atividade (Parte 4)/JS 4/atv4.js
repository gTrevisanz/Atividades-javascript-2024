//4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. 
//Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

sálario = Number(prompt('seu sálario'))
anos = Number(prompt('anos de serviço'))

resultadoTotal = sálario * 0.05

if(anos >= 5){
   alert('seu bonus é' + resultadoTotal)
}
else{
    alert('você não recebeu bônus')
}
