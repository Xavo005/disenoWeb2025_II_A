document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const telefonoInput = document.getElementById("telefono");
    const guardarBtn = document.getElementById("guardarBtn");
    const buscarBtn = document.getElementById("buscarBtn");
    const eliminarBtn = document.getElementById("eliminarBtn");
    const eliminarTodosBtn = document.getElementById("eliminarTodosBtn");
    const contactos = document.getElementById("contactos");

    function guardarDato() {
        const nombre = nombreInput.value.trim();
        const telefono = telefonoInput.value.trim();

        if (nombre === "" || telefono === "") {
            alert("Por favor ingrese nombre y teléfono");
            return;
        }

        localStorage.setItem(nombre, telefono);
        nombreInput.value = "";
        telefonoInput.value = "";
        actualizarDatos();
    }

    function buscarDato() {
        const nombre = nombreInput.value;
         const movilEncontado = localStorage.getItem(nombre);
          if (movilEncontado != null) {
             telefonoInput.value = movilEncontado;
            } else {
            alert("Contacto no encontrado"); telefonoInput.value = "";
        }
    }

    function eliminarDato() {
        const nombre = nombreInput.value.trim();

        if (nombre === "") {
            alert("Por favor, ingrese el nombre del contacto a eliminar");
            return;
        }
        localStorage.removeItem(nombre);
        nombreInput.value = "";
        telefonoInput.value = "";
        actualizarDatos();
        alert("Contacto" + nombre + "Eliminado");
    }

    function eliminarTodos() {
        if (confirm("¿Estás seguro de que deseas eliminar todos los contactos?")) {
            localStorage.clear();
            actualizarDatos();
            alert("Todos los contactos han sido eliminados");
        }
    }

    function actualizarDatos() {
        let registro = "";
        if (localStorage.length === 0) {
            registro = "<li>Vacio</li>";
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                registro += '<li> <span class="nom">' + key + '</span>' +
                    '<span class="nom">' + localStorage.getItem(key) + '</span> </li> <br>';
            }
        }
        contactos.innerHTML = registro;
    }

    guardarBtn.addEventListener("click", guardarDato);
    buscarBtn.addEventListener("click", buscarDato);
    eliminarBtn.addEventListener("click", eliminarDato);
    eliminarTodosBtn.addEventListener("click", eliminarTodos);

    actualizarDatos();
});
