document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const movilInput = document.getElementById("movil");
    const emailInput = document.getElementById("email");

    const guardarBtn = document.getElementById("guardarBtn");
    const recuperarBtn = document.getElementById("recuperarBtn");
    const eliminarBtn = document.getElementById("eliminarBtn");
    const eliminarTodoBtn = document.getElementById("eliminarTodoBtn");
    const contactosUI = document.getElementById("contactos");

    function guardarDato() {
        const nombre = nombreInput.value.trim();
        const movil = movilInput.value.trim();
        const email = emailInput.value.trim();

        if (nombre === "" || movil === "" || email === "") {
            alert("Por favor, complete todos los campos (Nombre, Móvil, Email).");
            return;
        }

        const contacto = { movil: movil, email: email };
        localStorage.setItem(nombre, JSON.stringify(contacto));

        nombreInput.value = "";
        movilInput.value = "";
        emailInput.value = "";
        
        actualizarDatos();
        alert(`Contacto ${nombre} guardado exitosamente.`);
    }

    function recuperarDato() {
        const nombre = nombreInput.value.trim();

        if (nombre === "") {
            alert("Por favor, ingrese el nombre del contacto a recuperar.");
            return;
        }

        const contactoRecuperadoJSON = localStorage.getItem(nombre);

        if (contactoRecuperadoJSON !== null) {
            const contactoRecuperado = JSON.parse(contactoRecuperadoJSON);
            movilInput.value = contactoRecuperado.movil;
            emailInput.value = contactoRecuperado.email;
            alert(`Contacto ${nombre} recuperado.`);
        } else {
            alert("Contacto no encontrado.");
            movilInput.value = "";
            emailInput.value = "";
        }
    }

    function eliminarDato() {
        const nombre = nombreInput.value.trim();

        if (nombre === "") {
            alert("Por favor, ingrese el nombre del contacto a eliminar.");
            return;
        }

        if (localStorage.getItem(nombre) === null) {
            alert(`El contacto ${nombre} no existe.`);
            return;
        }

        localStorage.removeItem(nombre);
        nombreInput.value = "";
        movilInput.value = "";
        emailInput.value = "";
        
        actualizarDatos();
        alert(`Contacto ${nombre} eliminado.`);
    }

    function eliminarTodo() {
        if (confirm("¿Está seguro de que desea eliminar TODOS los contactos?")) {
            localStorage.clear();
            actualizarDatos();
            alert("Todos los contactos han sido eliminados.");
        }
    }

    function actualizarDatos() {
        let registro = `<div class="table-header">
                            <span class="col-nombre">Nombre</span>
                            <span class="col-celular">Celular</span>
                            <span class="col-email">Email</span>
                        </div>`;

        if (localStorage.length === 0) {
            registro += `<div class="contact-row" style="grid-template-columns: 1fr; text-align: center;">No hay contactos guardados.</div>`;
        } else {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const contactoJSON = localStorage.getItem(key);
                const contacto = JSON.parse(contactoJSON);

                registro += `
                    <div class="contact-row">
                        <span class="col-nombre">${key}</span>
                        <span class="col-celular">${contacto.movil}</span>
                        <span class="col-email">${contacto.email}</span>
                    </div>
                `;
            }
        }
        
        contactosUI.innerHTML = registro;
    }

    guardarBtn.addEventListener("click", guardarDato);
    recuperarBtn.addEventListener("click", recuperarDato);
    eliminarBtn.addEventListener("click", eliminarDato);
    eliminarTodoBtn.addEventListener("click", eliminarTodo);
    
    actualizarDatos();
});