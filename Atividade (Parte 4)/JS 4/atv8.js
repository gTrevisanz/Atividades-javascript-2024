//8) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) e uma mensagem se está abaixo do peso 
//(IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

altura = Number(prompt('sua altura?'))
peso = Number(prompt('sua peso?'))

alturaElevada = altura * altura
resultadoConta = peso / alturaElevada

if(resultadoConta < 18){
   alert('abaixo do peso ')

}

else if(resultadoConta > 25) {
    alert('afaixa de peso ideal')
}

else{
    alert('acima do peso')
}
