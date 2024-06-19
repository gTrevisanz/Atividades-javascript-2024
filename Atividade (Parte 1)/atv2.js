//2) Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa. Porém, você possui apenas uma nota de R$100 para pagar.
//Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).
carteira = 1000
arroz = Number(prompt('digite o valor'))
batatap= Number(prompt('digite o valor'))
suco= Number(prompt('digite o valor'))
conta = (carteira-(arroz + batatap + suco))
alert('Seu troco ' + conta)