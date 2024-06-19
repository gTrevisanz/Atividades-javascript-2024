
//Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores.
//Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e
//total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores). Calcular e escrever o 
//percentual que cada um representa em relação ao total de eleitores. 

numeroEleitores = Number(prompt('Número total de eleitores: '))
numeroVotos1 = Number(prompt('Número total de votos para o primeiro candidato: '))
numeroVotos2 = Number(prompt('Número total de votos para o segundo candidato: '))
numeroVotosBranco = Number(prompt('Número total de votos em branco: '))
numeroVotosNulos = Number(prompt('Número total de votos nulos: '))

PercentualVotos1 = numeroVotos1 / numeroEleitores
PercentualVotos11 = PercentualVotos1 * 100
PercentualVotos2 = numeroVotos2 / numeroEleitores
PercentualVotos22 = PercentualVotos2 * 100
PercentualVotosBranco = numeroVotosBranco / numeroEleitores
PercentualVotosBranco2 = PercentualVotosBranco * 100
PercentualVotosNulos = numeroVotosNulos / numeroEleitores
PercentualVotosNulos2 = PercentualVotosNulos * 100

alert ('O percentual de votos no primeiro candidato é: %' + PercentualVotos11)
alert ('O percentual de votos no segundo candidato é: %' + PercentualVotos22)
alert ('O percentual de votos em branco é: %'+ PercentualVotosBranco2)
alert ('O percentual de votos nulos é: %' + PercentualVotosNulos2)

