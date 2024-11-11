/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let resposta1 = Number(prompt('Qual numero deseja verificar?'))



if(!numeros.includes(resposta1)){
 alert('Não existe')
}

else{
    alert('Aqui esta o indice do seu numero :' + numeros.indexOf(resposta1))
}