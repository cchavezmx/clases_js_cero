/* // Selectores
// Solo con esto
const form = document.getElementById("form")
const button = document.getElementById("button")

// query Selector TAREA PRACTICAR
// te permite seleccionar elementos del DOM con sintaxis CSS
const button2 = document.querySelector("#form button")
const lista = document.querySelectorAll("li")

console.log(button2, lista)
 */

const form = document.getElementById("form")
const container = document.getElementById("contendor_comentarios")
// solo los formularios tienen un evento submit
form.addEventListener("submit", (e) => {
    // en js simpre vamos a tener que añadir este linea
    // PARA EVITAR QUE ENVIE DATOS A UN SERVIDOR
    e.preventDefault()

    const comentario = document.getElementById("comentario")    
    const node_html = document.createElement("div")    
    const uniqID = crypto.randomUUID()
    node_html.setAttribute("id", uniqID)
    const date = new Date()
    // TEMPLATE STRING
    node_html.innerHTML = `
                <img src="https://miro.medium.com/v2/resize:fit:1000/0*qS3X0bzoxuD03Vr-.jpg" alt="">
                <p>${comentario.value}</p>
                <span>
                    Creado el dia: ${date.getDate()}                
                    <button class="delete_button" id="comenta_${uniqID}">
                        🪣  
                    </button>
                </span>

                `
    
    // añadir a un elemento html
    container.appendChild(node_html)

    // escuchamos otro evento
    const deleteButton = document.getElementById("comenta_"+uniqID)
    console.log(deleteButton)
    deleteButton.addEventListener("dblclick", () => {
        container.removeChild(node_html)
    })

    console.log("hola", comentario, comentario.value)
    // reescribe el valor anterior con un null espacio vacio
    comentario.value = null

})

// formaula para dominar DOM

// 1 pasa 1 localizar el elemento con getElementById o QuerySelector(avanzado)
    // para saber si ya lo estamos referenciao o localizando de forma correcta pues usa un console.log
// 2 escuchar un evento (click, doble, arras, submit, change) y añadirle una funcion a ese evento