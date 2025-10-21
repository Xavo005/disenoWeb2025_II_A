function ejecutarBucle() {
    let contador = 0;
    let mensaje = "El bucle se ejecuta mientras el número sea menor que 5.<br>";
    mensaje += "<table><tr><th>Iteración</th><th>Condición (i < 5)</th></tr>";

    // 1. EL BLOQUE DO...WHILE
    do {
        // Se ejecuta al menos una vez
        contador++; // Aumenta 1 antes de la siguiente verificación
        
        // Agregar una fila a la tabla
        mensaje += `<tr><td>${contador}</td><td>${contador < 5 ? 'VERDADERO' : 'FALSO'}</td></tr>`;

    } while (contador < 5); // 2. Condición: Repetir si 'contador' es menor que 5

    mensaje += "</table>";
    mensaje += `<p>✅ El bucle ha finalizado. Se ejecutó ${contador} veces.</p>`;
    
    // Muestra el resultado en el elemento con id="resultado"
    document.getElementById('resultado').innerHTML = mensaje;
}