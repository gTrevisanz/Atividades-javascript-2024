/** Escreva um programa que exiba números de 1 a 100, mas:
a. Para múltiplos de 3, exiba "Batata"
b. Para múltiplos de 5, exiba "Doce"
c. Para múltiplos de 3 e 5, exiba "BatataDoce" */


for(let i = 1; i <= 100 ; i++){

    if( i % 3 === 0 && i % 5 === 0){
        console.log("Batata doce")
    }

    else if( i % 3 === 0){
        console.log("Batata")
    }

    else if( i % 5 === 0){
        console.log("doce")
    }

    else{
        console.log(i)
    }
  
}

