//6) Faça um programa para ler o salário anual de um funcionário e o piso salarial mensal da sua categoria.
// Mostrar o salário mensal do funcionário e dizer se ele recebe de acordo com o piso (maior ou igual o piso da categoria) ou se recebe abaixo do piso.
// (DESAFIO: Incluir uma terceira condição para caso receba exatamente igual ao piso)

sálarioAnual = Number(prompt('Sálario anual'))
sálarioPiso = Number(prompt('piso salarial mensal da sua categoria'))

resultadoMes = sálarioAnual / 12

if(resultadoMes >= sálarioPiso){
    alert("você recebe por mês " + resultadoMes) 
} 

else{
    alert('Você não recebe de acordo com piso')
}

