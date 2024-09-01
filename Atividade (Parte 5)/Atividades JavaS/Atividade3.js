/**Escreva um programa que exiba uma pirâmide de números de 1 a
5. Para cada linha, exiba números de 1 até o número da linha. Aqui
está um exemplo de saída: */

for (let i = 1; i <= 5; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += j + ' ';
    }
    console.log(linha);
}