/*14) Elabore um programa que leia a idade e o tempo de serviço de um trabalhador e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são:

a) Ter pelo menos 65 anos
b) Ter trabalhado pelo menos 30 anos
c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos*/

idade = Number(prompt('Sua idade ?'))
tempodeserviço = Number(prompt('Seu tempo de serviço?'))

 if(idade >= 65 && tempodeserviço >= 30){
    alert('você pode ser aposentar!!')
}

else if(idade >= 60 && tempodeserviço > 25){
    alert('você pode ser aposentar!!')
}

else{
    alert('você não pode ser aposentar.')
}

