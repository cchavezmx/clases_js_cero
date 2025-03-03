/* Instrucciones para resolver el problema:

- Declara un arreglo llamado frutas con varios tipos de frutas.
- Crea un objeto para almacenar la cantidad de cada tipo de fruta.

Usa un ciclo for/while para recorrer el arreglo y contar las frutas.

Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while). */

const frutas = ['plátano', 'uva', 'plátano', 'sandía', 'sandía', 'kiwi', 'plátano', 'manzana', 'manzana', 'uva', 'fresa', 'pera', 'naranja', 'plátano', 'fresa', 'pera', 'piña', 'piña', 'fresa', 'fresa', 'plátano', 'kiwi', 'piña', 'sandía', 'mango', 'mango', 'fresa', 'naranja', 'manzana', 'pera', 'pera', 'fresa', 'sandía', 'uva', 'uva', 'pera', 'naranja', 'kiwi', 'sandía', 'pera', 'pera', 'uva', 'fresa', 'uva', 'plátano', 'mango', 'kiwi', 'piña', 'manzana', 'sandía', 'kiwi', 'piña', 'kiwi', 'manzana', 'plátano', 'sandía', 'uva', 'uva', 'mango', 'fresa', 'sandía', 'mango', 'manzana', 'plátano', 'piña', 'kiwi', 'uva', 'uva', 'piña', 'pera', 'naranja', 'uva', 'plátano', 'sandía', 'kiwi', 'pera', 'fresa', 'uva', 'manzana', 'fresa', 'mango', 'piña', 'fresa', 'uva', 'pera', 'fresa', 'piña', 'manzana', 'manzana', 'uva', 'plátano', 'plátano', 'sandía', 'manzana', 'uva', 'plátano', 'manzana', 'mango', 'fresa', 'kiwi']
const frutasCantidades = {}

/* for (let i = 0; i < frutas.length; i++) {
    const current = frutas[i]
    if (current === "uva") {
        frutasCantidades.uva = frutasCantidades.uva + 1
    }

    if (current === "sandía") {
        frutasCantidades["sandía"] = frutasCantidades["sandía"] + 1
    }

    if (current === "kiwi") {
        frutasCantidades.kiwi = frutasCantidades.kiwi + 1
    }
} */

for (let i = 0; i < frutas.length; i++) {
    const currentElement = frutas[i]    
    /* frutasCantidades[currentElement] = (frutasCantidades[currentElement] || 0) + 1 */
    console.log(frutasCantidades[currentElement])
    if (frutasCantidades[currentElement]) {
        frutasCantidades[currentElement] += 1
    } else {
        console.log("soy else")
        frutasCantidades[currentElement] = 1
    }
}

// mas metodo mas actual
/* for (fruta of frutas) {
    if (frutasCantidades[fruta]) {
        frutasCantidades[fruta] += 1
    } else {
        frutasCantidades[fruta] = 1
    }
} */

console.log(frutasCantidades)


