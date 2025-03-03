// JS debil tipado
// (var)**, let, const
// var => variable global
// const para todo***

// para nombrar les asignamos un nombre
// Que comienze con una letra
// Que la variable represente lo que va a guardar
// No pueden llevar espacios
// camelCase, Snake_Case, 
// camelCase
const lunasDeJupiter = ""

const _privado = "valor"

// => tarea
const frutas = "platano, manzana"

const url = 'http://pokemones.com'

let precio = 0
/* console.log(precio, "precio 1") */

// re asignacion
precio = "no tienes dinero"
/* console.log(precio, "precio 2") */

// tipos y los valores

// string = texto
const edad = 20
// edad valor de 20 y es de tipo numerico
// el mas o plus cuando son texto concatena
// el mas cuando es un numero suma 

/* console.log("hola" + " como estas")
console.log(edad + 4) */

/// Tipos valors primitivos y los compuestos
// String textos 
const nombre = "carlos"
const nombre2 = 'Laura'
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

const template = `string text ${nombre} string text ${nombre} ${nombre} ${nombre}`
const tempalte2 = "string text " + nombre + " string text"
/* console.log(template, tempalte2) */

// Numericos int, float, BigInit
const edad2 = 20
const precio1 = 20.20

// Boolean true false // ciclos, validaciones
const estaSoleado = true
/* console.log(estaSoleado) */

// Bases de datos
// null => tenemos una var
// undefined => 

const valorNull = null
/* console.log(valorNull) */

//
// complejos: Objetos 
const casa = {
// propiedad : valor
    puertas: 10,
    ventanas: 2,
    color: "amarilla",
    direccion: "avenida simpre viva",
    niveles: [
        { piso: 1, value: "Entrada" }, // index 0
        { piso: 2, value: "Cocina" }, // index 1
        { piso: 3, value: "Recamara" }  // index 2
    ],
    localizacion: {
        lt: "",
        lg: ""
    } 
}

// EJERCICIO LISTAR CADA PROPIEDAD DEL OBJETO
/* console.log(casa.niveles[2].piso) */

// COMO ASIGNO VALORES A UNA PROPIEDAD DE UN OBJETO
casa.localizacion.lt = 20
/* console.log(casa.localizacion) */

// **
// PARA ACCEDER A LOS ELEMENTOS DE UN OBJETO USAMOS PUNTO .
// PARA ACCEDER A LOS ELEMENTOS DE UN ARRAY USAMOS []

// complejos: arreglo o Array 
const compras = [
    "huevo", // 0
    "leche", // 1
    "papel",  // 2
    null
]

// Para acceder a una propiedad dentro de un arreglo
// index
/* console.log(compras[3]) */


// OPERADORES
// + SUMA O CONCATENA
// - RESTAS 
// * MULTIPLICA
// / DIVISION
// % MODULO => el residulo de una div

// OPERADORES DE COMPARACION
// <    4 < 8 true => Boolean
// >    10 > 20 false 
// <=   
// >= 


// OPEADOR = 
// ASIGNAR, COMPARAR 
console.log(10 == "10", "esta es la coparacion")
// comparacion estricta tambien cuenta el tipo de dato
console.log(10 === "10", "esta es la coparacion estricta")

// OPERADORES LOGICOS
// PENDIENTE
// && AND 
// || OR

//
// Evaluador de notas
// 

// Estruturas de control if, if else while do while, switch

const calificacion = 7
// 1 2 3 4 5 6 7 8 9 10
console.log(calificacion >= 6)
    // false
if (calificacion < 5) {
    // si el if es true hace lo que esta aqui
    console.log("Estas reprobado")
}

if (calificacion >= 6) {
    console.log("has Aprobado")
}

// si calif es igual a 7 
if (calificacion === 7) {
    // hago esto
    console.log("Sacaste un 7")
} else {
    // si no (else ) hago esto
    console.log("tu calificacion es: " + calificacion)
}











