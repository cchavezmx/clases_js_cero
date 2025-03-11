/* Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: 
titulo: (string) 
título del libro, 
autor: (string) el autor del libro, 
anio: (number) el año de publicación, 
estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.

También debe tener un método 
describirLibro: (method) método para imprimir la información básica del libro. 

Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'

Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro. */


const cienAnios = {
    titulo: "Cien años de soledad",
    autor: "Gabo",
    anio: 1967,
    estado: "disponible", //prestado
    capitulos: [
        "Macondo",
        "Es como un temblor de tierra"
    ],
    capitulos_details: [
        {
            titulo: "Macondo",
            order: 1,
            id: "0001",
            by: "José Rivera y Natalia Santa"
            
        }
    ],
    describirLibro: function(){
        console.log(
            "Este libro tiene el titulo de: " + this.titulo + " que contiene:  " + this.capitulos.length + " capitulos"
        )
    },
    agregarCapitulo: function(capitulo){        
        if (
            capitulo === "" || 
            typeof capitulo === "undefined" || 
            typeof capitulo === "number"){
            // early return
            return 
        }

        this.capitulos.push(capitulo)
    },
    verListaCapitulos: function(){
        return this.capitulos
    },
    deleteTitulo: function(capituloAborrar){
        const filter = []
        // esto es muy costoso      
        for (let i = 0; i < this.capitulos.length; i++) {
            const cap = this.capitulos[i]           
            if (cap === capituloAborrar) {
                // pasar a la siguiente iteracion
                continue
            }

            filter.push(cap)
        }
    
        this.capitulos = filter
    }
}

// este es recomenado REACT
const LIBROTE = function(titulo, autor){
    return {
        titulo: titulo,
        autor: autor,
        anio: 1967,
        estado: "disponible", //prestado
        capitulos: [
            "Macondo",
            "Es como un temblor de tierra"
        ],
        capitulos_details: [
            {
                titulo: "Macondo",
                order: 1,
                id: "0001",
                by: "José Rivera y Natalia Santa"
                
            }
        ],
        describirLibro: function(){
            console.log(
                "Este libro tiene el titulo de: " + this.titulo + " que contiene:  " + this.capitulos.length + " capitulos"
            )
        },
        agregarCapitulo: function(capitulo){        
            if (
                capitulo === "" || 
                typeof capitulo === "undefined" || 
                typeof capitulo === "number"){
                // early return
                return 
            }
    
            this.capitulos.push(capitulo)
        },
        verListaCapitulos: function(){
            return this.capitulos
        },
        deleteTitulo: function(capituloAborrar){
            const filter = []
            // esto es muy costoso      
            for (let i = 0; i < this.capitulos.length; i++) {
                const cap = this.capitulos[i]           
                if (cap === capituloAborrar) {
                    // pasar a la siguiente iteracion
                    continue
                }
    
                filter.push(cap)
            }
        
            this.capitulos = filter
        }
    }
}
// este es el ejercico


const libro1 = LIBROTE("La silla del aguila", "creo que Krauze")
console.log(libro1.describirLibro())

/* console.log(cienAnios.describirLibro()) */
cienAnios.agregarCapitulo("Un daguerrotipo de Dios")

console.log(cienAnios.capitulos)

cienAnios.agregarCapitulo("El castaño")

console.log(cienAnios.capitulos)

cienAnios.agregarCapitulo(123)

console.log(cienAnios.capitulos)

cienAnios.deleteTitulo("Macondo")


console.log(cienAnios.capitulos)

cienAnios.deleteTitulo("El castaño")


console.log(cienAnios.capitulos)


const libros = "La maquina del tiempo"
const librosmayus = libros.toUpperCase()
console.log(librosmayus.length)


const dia = new Date()
console.log(dia)


class Rectangle {
    constructor(height, width, name) {
      this.name = name;
      this.height = height;
      this.width = width;
    }
}

const recta1 = new Rectangle(10, 20, "carlos")
console.log(recta1)

// aca esta la tarea
class Libros {
    constructor(titulo, anio, estado, capitulos){
        this.titulo = titulo
        this.anio = anio
        this.estado = estado
        this.capitulos = capitulos
    }
    // getters y los setters
    describirLibro = function(){
        console.log(
            "Este libro tiene el titulo de: " + this.titulo + " que contiene:  " + this.capitulos.length + " capitulos"
        )
    }

    agregarCapitulo = function(capitulo){        
        if (
            capitulo === "" || 
            typeof capitulo === "undefined" || 
            typeof capitulo === "number"){
            // early return
            return 
        }

        this.capitulos.push(capitulo)
    }

    deleteTitulo = function(capituloAborrar){
        const filter = []
        // esto es muy costoso      
        for (let i = 0; i < this.capitulos.length; i++) {
            const cap = this.capitulos[i]           
            if (cap === capituloAborrar) {
                // pasar a la siguiente iteracion
                continue
            }

            filter.push(cap)
        }
    
        this.capitulos = filter
    }

    getNumberCaps = function(){}
}

const cienAnios2 = new Libros("cien años", "1867", "prestado", ["Macondo", "Es como un temblor de tierra"],)
console.log(cienAnios2)

cienAnios2.describirLibro()
cienAnios2.agregarCapitulo("hola")


/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes */

const maqunaTimepo = new Libros("maquina")
console.log(maqunaTimepo)


const saludo = new String("hola como estas")
console.log(saludo)


