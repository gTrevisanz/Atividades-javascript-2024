/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/
let listaCompras = []

let resposta1 = prompt('escreva um item')
listaCompras.push(resposta1);
let resposta2 = prompt('escreva um item')
listaCompras.push(resposta2);
let resposta3 = prompt('escreva um item')
listaCompras.push(resposta3);


if(resposta3 == 'leite'){
    alert(listaCompras);
}

else{
    listaCompras.push('leite');
    alert(listaCompras)
}