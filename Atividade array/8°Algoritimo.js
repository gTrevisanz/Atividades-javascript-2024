/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/

let tarefasLimpeza = []

let resposta1 = prompt('escreva um item')
tarefasLimpeza.push(resposta1);
let resposta2 = prompt('escreva um item')
tarefasLimpeza.push(resposta2);
let resposta3 = prompt('escreva um item')
tarefasLimpeza.push(resposta3);
let resposta4 = prompt('escreva um item')
tarefasLimpeza.push(resposta3);


tarefasLimpeza.shift(2);
tarefasLimpeza[1] = ("limpar banheiro")
console.log(tarefasLimpeza)