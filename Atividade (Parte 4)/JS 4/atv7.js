//7) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). 
//Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. Caso contrário, mostrar mensagem "Não pode se vacinar!".

nome = prompt('Seu nome ?')
idade = Number(prompt('Sua idade ?'))
comorbidade = prompt('você tem comorbidade')

if( idade >= 60 || comorbidade == "s"){
    alert('Pode se vacinar!')
}

else{
    alert('Não pode se vacinar!')
}