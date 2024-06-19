//5) Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto.
//Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.
let precoLivro = Number(prompt('Preço de cada livro?'))
let quantidadeLivros = 3
let totalSemDesconto = precoLivro * quantidadeLivros
let desconto = 15
let valorDesconto = (totalSemDesconto * desconto) / 100
let totalComDesconto = totalSemDesconto - valorDesconto
alert(`Total sem desconto: R$${totalSemDesconto} \nTotal com desconto: R$${totalComDesconto}`);
