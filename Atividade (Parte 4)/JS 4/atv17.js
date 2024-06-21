/*17) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

CEREJA - CEREJA - CEREJA -> R$100
LARANJA - LARANJA - LARANJA -> R$80
CEREJA - LARANJA - CEREJA -> R$50
LARANJA - CEREJA - LARANJA -> R$25 */       

fruta1 = (prompt('Primeira Fruta: CEREJA ou LARANJA ?'))
fruta2 = (prompt('Segunda Fruta: CEREJA ou LARANJA?'))
fruta3 = (prompt('Terceira Fruta: CEREJA ou LARANJA?'))

frutasTotais = fruta1, fruta2, fruta3

if(fruta1  ==  'CEREJA '&& fruta2 == 'CEREJA '&& fruta3 ==  'CEREJA ' ){
    alert('você ganhou R$100')
}

else if(fruta1  ==  'LARANJA'&& fruta2 == 'LARANJA'&& fruta3 ==  'LARANJA'){
    alert('você ganhou R$80')
}

else if(fruta1  ==  'CEREJA' && fruta2 == 'LARANJA'&& fruta3 ==  'CEREJA '){
    alert('você ganhou R$50')
}

else{
    alert('você ganhou R$25')
}