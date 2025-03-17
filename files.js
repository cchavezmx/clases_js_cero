/* Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. */

// Crear un array para almacenar los comentarios.
let comentarios = [];

let escrito = document.getElementById('comentario');

let botonEnviar = document.getElementById('enviar');

let mostrarTexto = document.getElementById('lista');

let botonEliminar = document.getElementById('eliminar');

// Verificamos si hay comentarios guardados en localStorage y si los hay los mostramos
if(localStorage.getItem("comentarios")){
    let comentariosJSON = localStorage.getItem("comentarios"); //sacamos del localStorage
    comentarios = JSON.parse(comentariosJSON); // convertimos de string a objeto
    mostrarComentarios();
}

// Crear una función para agregar comentarios.
botonEnviar.addEventListener('click', (e)=> {
    e.preventDefault() // Prevenir el comportamiento predeterminado del formulario
    console.log("boton presionado");
    if(escrito.value == ""){
        alert("Escribe un comentario");
    } else{
        let fecha = new Date();
        let comentario = {
            texto: escrito.value,
            fecha: fecha.toLocaleDateString(),
            hora: fecha.toLocaleTimeString()
        };
        comentarios.push(comentario);
        console.log(comentarios);
        mostrarComentarios();
        limpiarCaja();
        guardarArrayEnMemoria();
        
        // parte para local storage
        //let comentarios_JSON = JSON.stringify(comentarios); //lo pasamos a un string
        //localStorage.setItem("comentarios", comentarios_JSON); //almacenamos en localStorage
    }
})

function guardarArrayEnMemoria(){
    let comentarios_JSON = JSON.stringify(comentarios); //lo pasamos a un string
    localStorage.setItem("comentarios", comentarios_JSON); //almacenamos en localStorage
return
}

// Función para mostrar los comentarios con fecha y hora
function mostrarComentarios(){
    mostrarTexto.innerHTML = ""; //para que no se impriman dos veces los valores de la lista
    for(let i=0; i<comentarios.length; i++){
        mostrarTexto.innerHTML += `<li> ${comentarios[i].texto} (Publicado el ${comentarios[i].fecha} a las ${comentarios[i].hora}) </li>`;
    }
}

// Crear una función para eliminar comentarios.
botonEliminar.addEventListener('click', ()=> {
    console.log("boton eliminar presionado");
    if(comentarios.length == 0)
        alert("Agrega un comentario");
    else{
        let numEliminar = parseInt(prompt("¿Qué número de comentario quieres eliminar? (1 a" + comentarios.length +")"));
        if(isNaN(numEliminar) || numEliminar < 1 || numEliminar > comentarios.length){
            alert("El comentario que quiere eliminar no existe");
        }else {
            comentarios.splice(numEliminar -1, 1);
            guardarArrayEnMemoria();
        }
        //comentarios.pop();
        mostrarComentarios();
    }

})


function limpiarCaja() {
    document.querySelector('#comentario').value = '';
}