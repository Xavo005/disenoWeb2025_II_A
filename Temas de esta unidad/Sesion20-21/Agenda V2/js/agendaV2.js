//Funcion para cargar el DOM despues del HTML
document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const movilInput = document.getElementById("movil");
    const guardarBtn = document.getElementById("guardarBtn");
    const buscarBtn = document.getElementById("buscarBtn");
    const eliminarBtn = document.getElementById("eliminarBtn");
    const eliminarTodoBtn = document.getElementById("eliminarTodoBtn");
    const contactos = document.getElementById("contactos");

    function guardarDatos() {
        const nombre = nombreInput.value;
        const movil = movilInput.value;

        localStorage.setItem(nombre, movil);
        nombreInput.value = "";
        movilInput.value = "";
        actualizarDatos();
    }

    function buscarDatos() { 
        const nombre = nombreInput.value;

        const movilEncontrado = localStorage.getItem(nombre);
        
        if (movilEncontrado != null) {
            movilInput.value = movilEncontrado;
        } else {
            alert("Contacto no encontrado");
            movilInput.value = "";
        }

    }

    function eliminarDatos() {
        const nombre = nombreInput.value;

        if (nombre === "") {
            alert("Por favor, ingrese el nombre del contacto a eliminar");
            return;
        }
    
        localStorage.removeItem(nombre);
        nombreInput.value = "";
        movilInput.value = "";
        actualizarDatos()
        alert("Contarcto " + nombre + " eliminado");
    }

    function eliminarTodoDatos() {
        if(confirm("¿Estás seguro de que deseas eliminar todos los contactos?")) {
            localStorage.clear();
            actualizarDatos()
            alert("Todos los contactos han sido eliminados");
        }
    }

    function actualizarDatos() {
        let registro = "";

        if (localStorage.length === 0) {
            registro += '<li> Vacio </li>';
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);

                registro += '<li> <span class="nom">' + key + '</span>' + 
                        '<span class="nom">' + localStorage.getItem(key) + '</span> </li> <br>';
            }
        }

        contactos.innerHTML = registro;
    }

    guardarBtn.addEventListener("click", guardarDatos);
    buscarBtn.addEventListener("click", buscarDatos);
    eliminarBtn.addEventListener("click", eliminarDatos);
    eliminarTodoBtn.addEventListener("click", eliminarTodoDatos);

    actualizarDatos();
})