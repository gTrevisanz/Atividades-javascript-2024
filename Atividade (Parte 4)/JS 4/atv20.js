//20) Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes. O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km), Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h mostrar uma mensagem "Desempenho excelente. Parabéns!" 

prompt('Nome da equipe?')

let integrante1 = Number(prompt('Integrante númemo um, quantas horas você gastou ?'))
let integrante2 = Number(prompt('Integrante númemo dois, quantas horas você gastou ?'))
let integrante3 = Number(prompt('Integrante númemo três, quantas horas você gastou ?'))
let integrante4 = Number(prompt('Integrante númemo quatro, quantas horas você gastou ?'))

const beiraJesus = 30
const jesusLagoa = 45
const lagoaPantano = 30
const pantanoBeira = 35 
const totalemKM = 140 

beiraJesus1 = beiraJesus / integrante1
jesusLagoa1 = jesusLagoa / integrante1
lagoaPantano1 = lagoaPantano / integrante1
pantanoBeira1 = pantanoBeira / integrante1
media1 = (beiraJesus1 + jesusLagoa1 + lagoaPantano1 + pantanoBeira1)/ integrante1

alert(`Seu resultado integrante1' \n ${beiraJesus1} foi Beira-Mar até Cachoeira do Bom Jesus \n ${jesusLagoa1} achoeira do Bom Jesus até Lagoa da Conceição \n ${lagoaPantano1} Lagoa da Conceição até Pântano do Sul \n ${pantanoBeira1} Pântano do Sul até Av. Beira-Mar `)

beiraJesus2 = beiraJesus / integrante2
jesusLagoa2 = jesusLagoa / integrante2
lagoaPantano2 = lagoaPantano / integrante2
pantanoBeira2 = pantanoBeira / integrante2
media2 = (beiraJesus2 + jesusLagoa2 + lagoaPantano2 + pantanoBeira2)/ integrante2

alert(`Seu resultado integrante2' \n ${beiraJesus2} foi Beira-Mar até Cachoeira do Bom Jesus \n ${jesusLagoa2} achoeira do Bom Jesus até Lagoa da Conceição \n ${lagoaPantano2} Lagoa da Conceição até Pântano do Sul \n ${pantanoBeira2} Pântano do Sul até Av. Beira-Mar `)

beiraJesus3 = beiraJesus / integrante3
jesusLagoa3 = jesusLagoa / integrante3
lagoaPantano3 = lagoaPantano / integrante3
pantanoBeira3 = pantanoBeira / integrante3
media3 = (beiraJesus3 + jesusLagoa3 + lagoaPantano3 + pantanoBeira3)/ integrante3

alert(`Seu resultado integrante3' \n ${beiraJesus3} foi Beira-Mar até Cachoeira do Bom Jesus \n ${jesusLagoa3} achoeira do Bom Jesus até Lagoa da Conceição \n ${lagoaPantano3} Lagoa da Conceição até Pântano do Sul \n ${pantanoBeira3} Pântano do Sul até Av. Beira-Mar `)

beiraJesus4 = beiraJesus / integrante4
jesusLagoa4 = jesusLagoa / integrante4
lagoaPantano4 = lagoaPantano / integrante4
pantanoBeira4 = pantanoBeira / integrante4
media4 = (beiraJesus4 + jesusLagoa4 + lagoaPantano4 + pantanoBeira4)/ integrante4

alert(`Seu resultado integrante4' \n ${beiraJesus4} foi Beira-Mar até Cachoeira do Bom Jesus \n ${jesusLagoa4} achoeira do Bom Jesus até Lagoa da Conceição \n ${lagoaPantano4} Lagoa da Conceição até Pântano do Sul \n ${pantanoBeira4} Pântano do Sul até Av. Beira-Mar `)

velocidaGeral = (media1 + media2 + media3 + media4)/ 4

if( velocidaGeral < 15){

    alert("Desempenho pode melhorar bastante!")

}

else if ( velocidaGeral >= 15 &&  velocidaGeral <= 18){

    alert("Desempenho bom, mas ainda pode melhorar!")

}

else{
    alert("Desempenho excelente. Parabéns!")
}
