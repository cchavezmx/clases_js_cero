/* 
    Si la nota es 90 o más, el estudiante aprueba con "Excelente".
    Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
    *Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
    Si la nota es menor de 60, el estudiante no aprueba. 
*/

const nota = 120

if (nota >= 90) {
    console.log("Excelente")
}

if (nota >= 75 && nota <= 89) {    
    console.log("Bien")
}

if (nota > 100) {
    console.log("Te pasas chavo")
}


