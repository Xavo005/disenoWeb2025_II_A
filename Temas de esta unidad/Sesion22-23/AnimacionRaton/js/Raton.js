document.addEventListener("DOMContentLoaded", function() {
    const caraRaton = document.querySelector(".caraRaton");
    const queso = document.querySelector(".queso");
    const mordida = document.querySelector(".mordida");
    
    let contadorMordidas = 0;
    
    // Función para crear migas de queso que caen
    function crearMiga() {
        const miga = document.createElement("div");
        miga.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background-color: #FFD700;
            border-radius: 50%;
            bottom: 160px;
            right: ${Math.random() * 40 + 110}px;
            opacity: 1;
            pointer-events: none;
            z-index: 10;
        `;
        
        document.querySelector(".escena").appendChild(miga);
        
        // Animar la caída de la miga
        let posicion = 160;
        const intervalo = setInterval(() => {
            posicion -= 3;
            miga.style.bottom = posicion + "px";
            miga.style.opacity = posicion / 160;
            
            if (posicion <= 0) {
                clearInterval(intervalo);
                miga.remove();
            }
        }, 30);
    }
    
    // Función para simular el efecto de comer
    function animacionComer() {
        setInterval(() => {
            contadorMordidas++;
            
            // Crear migas cada cierto tiempo
            if (contadorMordidas % 2 === 0) {
                crearMiga();
                setTimeout(() => crearMiga(), 200);
            }
            
            // Efecto de masticación más pronunciado
            caraRaton.style.transform = "scale(1.08) translateY(3px)";
            setTimeout(() => {
                caraRaton.style.transform = "scale(1)";
            }, 300);
            
        }, 2000);
    }
    
    // Función para agregar interactividad al hacer clic
    queso.addEventListener("click", function() {
        // Hacer que el queso se encoja temporalmente
        queso.style.transition = "transform 0.3s ease";
        queso.style.transform = "scale(0.85)";
        
        // Crear varias migas
        for (let i = 0; i < 5; i++) {
            setTimeout(() => crearMiga(), i * 100);
        }
        
        setTimeout(() => {
            queso.style.transform = "scale(1)";
        }, 300);
    });
    
    // Interactividad al hacer clic en el ratón
    caraRaton.addEventListener("click", function() {
        // Hacer que el ratón "mire" hacia el queso
        const ojos = document.querySelectorAll(".ojos::after");
        caraRaton.style.transition = "transform 0.2s ease";
        caraRaton.style.transform = "translateX(5px)";
        
        setTimeout(() => {
            caraRaton.style.transform = "translateX(0)";
        }, 200);
    });
    
    // Efecto de hover sobre el ratón
    caraRaton.addEventListener("mouseenter", function() {
        const bigotes = document.querySelectorAll(".bigote");
        bigotes.forEach(bigote => {
            bigote.style.transition = "all 0.3s ease";
            if (bigote.classList.contains("bigoteIzq")) {
                bigote.style.transform = "rotate(-8deg)";
            } else {
                bigote.style.transform = "rotate(8deg)";
            }
        });
    });
    
    caraRaton.addEventListener("mouseleave", function() {
        const bigotes = document.querySelectorAll(".bigote");
        bigotes.forEach(bigote => {
            bigote.style.transform = "rotate(0deg)";
        });
    });
    
    // Iniciar animaciones
    animacionComer();
    
    // Mensaje de bienvenida
    console.log("🐭 Ratón hambriento activado");
    console.log("🧀 Haz clic en el queso para ver más migas");
    console.log("🐭 Haz clic en el ratón para ver su reacción");
});