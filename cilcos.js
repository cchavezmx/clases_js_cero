// Para reviar la compatibilidad
// https://caniuse.com/
// mdn => tabla comp

console.log("clicos")

// Array
const compras = [
    "huevo", // 0
    "leche", // 1
    "papel",  // 2
    "huevo",
    "huevo",
    "huevo",
    "huevo",
    "huevo",
    "huevo",
]

/* console.log(compras) */
// buscar, añadir nuevos, borrar objetos, copiar
// Iterar, recorrer una a una las posiciones ocupadas en el array

// push me deja añadir 
compras.push("tocino")
/* console.log(compras) */

// ** Mutabilidad (no se deberia permitir) buenas practicas
// como buena practica es mejor crear una copia del arreglo
// ... => spread Op
const comprasCopy = [...compras]

// pop eliminar un el ultimo objeto que entro al array
const ultimo = comprasCopy.pop()

/* console.log("pop--->",comprasCopy)
console.log("ultimo--> ", ultimo) */

const primero = comprasCopy.shift()
/* console.log("primero ---->", primero)

console.log(comprasCopy, '----Copia compras')
console.log(compras, '----Original compras') */

// Acceder a los elementos en un array
const papel = compras[2]
/* console.log(papel) */

//  ciclo FOR

/* for "Inicializador"; "condicion de interacion ??"; "incremento" {
    // ejecutar una accion
}
 */

// Crea un arreglo del 1 al 100
const numeros = []
for (let i = 1; i <= 100; i++) {
    console.log(i)
    numeros.push(i)
}

/* console.log(numeros) */
/* const compras = [
    "huevo",    // 0
    "leche",    // 1
    "papel",    // 2
    "tocino"    // 3 
] */

// length

/* console.log(compras.length) */

// Para iterar un arreglo ocupando for 
let cantidadFrutas = 0 // 1 // 2 // 3
let huevo = 0

for (let i = 0; i < compras.length; i++) {
    cantidadFrutas = cantidadFrutas + 1
    if (compras[i] === "huevo") {
        huevo = huevo + 1
    }
/*     console.log(compras[i], "mientras i vale " + i)  */ 
}

console.log("el numero de frutas es ", cantidadFrutas)
console.log("el numero de huevos es ", huevo)

/* for (let i = 0; i < compras.length; i++) {
    console.log(compras[i], "mientras i vale " + i)
    if (compras[i]  === "papel") {
        console.log("El papel esta en la posicion ", i)
    }
}
 */


// TAREA
const contadores = {}

for (let i = 0; i < compras.length; i++) {
    const currentElement = compras[i]
    console.log(currentElement, i, contadores)
    contadores[currentElement] = (contadores[currentElement] || 0) + 1
}

console.log(contadores)

const casa = {
    "direccion": "avenida siempre viva"
}

casa["huevo"] = "Rojo"

console.log(casa)


let contadorWhile = 0