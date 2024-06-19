//6) Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro). 
//Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final.
distancia = Number(prompt('distancia percorrida?'))
cumbustível = Number(prompt('cumbustível gasto'))
resultado = distancia/cumbustível
alert('essa foi seu km por litro' + resultado)