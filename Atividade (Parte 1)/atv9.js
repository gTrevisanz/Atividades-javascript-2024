//9) Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. 
//No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.
var pessoanopasseio =prompt('Quantas pessoas vão no passeio ?')
var tempodopasseio =Number(prompt('Tempo do passeio'))

var minutos = 5
var taxa = 20
var metrocubico = 15

var totalMetrosCubicos =  tempodopasseio/ minutos * pessoanopasseio 
var custoGas = totalMetrosCubicos * metrocubico
var totalPagar = custoGas + (taxa * pessoanopasseio)

alert(`Custo: R$${totalPagar}`)