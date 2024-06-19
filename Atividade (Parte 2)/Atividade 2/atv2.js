//Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano
//atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e
//em semanas. 

anoNascimento = Number(prompt('Digite o ano que você nasceu: '))
anoatual = 2024
messes = 12
semanas = 52
dias = 365
resultadoIdade = anoatual - anoNascimento
resultadoMesses = resultadoIdade * 12
resultadoSemanas = resultadoIdade * 52
resultadoDias = resultadoIdade * 365

alert ("Sua idade é " + resultadoIdade)
alert ("Messes " + resultadoMesses)
alert ("Semanas " + resultadoSemanas)
alert ("Dias " + resultadoDias)
