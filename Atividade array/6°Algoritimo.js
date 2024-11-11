/*
Maria está realizando compras online. Crie um array inicialmente vazio chamado 'carrinho'. Adicione os produtos
"camiseta", "calça" e "sapato" ao carrinho. Remova o primeiro produto da lista e,
em seguida, modifique o segundo produto para "tênis". Imprima o carrinho de compras atualizado no final.
*/

let carrinho = [ "camiseta", "calça", "sapato"]

carrinho.splice(0, 2, 'tênis' );
console.log(carrinho);