/* 11)  Elabore um programa que converta uma quantidade de dólares para reais. Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.
*/
valor = Number(prompt('valor em dólares?'))
cotacao = Number(prompt('cotação atual?'))

resultado = valor * cotacao 
alert(+resultado)

if(cotacao > 5){
    alert('está caro a cotação.')
}

else{
    alert('a cotação está barato.')
}