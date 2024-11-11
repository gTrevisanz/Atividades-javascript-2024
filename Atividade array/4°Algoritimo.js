/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/


let tarefas = []

let resposta1 = prompt('escreva um item')
tarefas.push(resposta1);
let resposta2 = prompt('escreva um item')
tarefas.push(resposta2);
let resposta3 = prompt('escreva um item')
tarefas.push(resposta3);



tarefas.splice(1,1,'ligar para o médico');
alert(tarefas);
