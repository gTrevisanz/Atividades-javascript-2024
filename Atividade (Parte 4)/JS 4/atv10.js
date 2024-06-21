//10) Criar um programa para calcular a densidade demográfica (habitantes por quilômetro quadrado) de uma região.
// Sendo, densidade igual a população (total de habitantes) dividida pela área (quilômetros quadrados). 
//Mostrar mensagens para densidade alta (maior ou igual a 100), média (entre 25 e 100), baixa (menor que 25).

habitantes = Number(prompt('Quantos habitantes?'))
quilometro = Number(prompt('quilômetro quadrado?'))

densidade = habitantes / quilometro

if(densidade >= 100){
    alert('densidade alta')
}

else if(densidade < 25){
    alert('densidade baixa')
}

else{
    alert('media')
}