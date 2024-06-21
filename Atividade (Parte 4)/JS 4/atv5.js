//5) Crie um programa que peça ao usuário para digitar três notas individualmente (uma por vez), faça a média e caso a média seja igual ou maior que 7, 
//mostre uma mensagem "Aprovado!" e a média. 
//Caso seja menor que 7, mostre uma mensagem "Reprovado!" e a média. 
//(DESAFIO: Incluir "Recuperação", sendo a média entre 5 e 7, e "Reprovado" apenas para médias abaixo de 5)

notaP = Number(prompt('primeira nota'))
notaS = Number(prompt('segunda nota'))
notaT = Number(prompt('terceira nota'))

resultado = notaP + notaS + notaT / 3

if(resultado >= 7){
    alert('aprovado')
}
else{
    alert('reprovado e sua media' + resultado)
}
