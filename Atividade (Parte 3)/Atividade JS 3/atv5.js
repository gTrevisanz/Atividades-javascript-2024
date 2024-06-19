//5) Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo,
//exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando
//que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve
//digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma
//geral de área dominada, incluindo todos indivíduos.

let leaoFemea = 9;
let leaoMacho = 5;
let qtdCasal = Number(prompt("Digite quantos casais: "));

let areaLeaoIndividual = 320; // km²
let areaLeaoCasal = 400; // km²

let leaoT = leaoFemea + leaoMacho;
let leaoTCasal = qtdCasal * 2; // Multiplica por 2 para contar os dois leões do casal

let resultadoCasalM = leaoMacho - qtdCasal;
let resultadoCasalM2 = resultadoCasalM * areaLeaoCasal;

let resultadoCasalF = leaoFemea - qtdCasal;
let resultadoCasalF2 = resultadoCasalF * areaLeaoCasal;

let resultadoLeao = leaoT + leaoTCasal;
let areaTotal = (leaoT * areaLeaoIndividual) + (qtdCasal * areaLeaoCasal);

alert ("A área total dominada é de " + areaTotal + " km².");