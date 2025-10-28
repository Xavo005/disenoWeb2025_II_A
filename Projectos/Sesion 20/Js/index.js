//Funcion para cargar el DOM despues del Html
document.addEventListener("DOMContentLoaded",function(){
const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const guardarButton = document.getElementById ("guardarBtn");
const recuperarButton = document.getElementById("recuperarBtn");
const listaUl = document.getElementById("lista");

    function guardarDatos(){
        localStorage.nombre = nombreInput.value;
        localStorage.telefono = telefonoInput.value;
    }
    function recuperarDatos(){
        if (localStorage.nombre != undefined && localStorage.telefono != undefined){
            listaUl.innerHTML += "<li>" + localStorage.nombre + " - " + localStorage.telefono +
             "</li>"
        } else{
            listaUl.innerHTML = "<li> No hay datos que Guardar </li>"
        }
    }
    guardarButton.addEventListener("click",guardarDatos);
    recuperarButton.addEventListener("click",recuperarDatos);

})