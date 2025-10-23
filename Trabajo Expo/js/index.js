function ejecutarBucle() {
    let contador = 0;
    let mensaje = "El bucle se ejecuta mientras el número sea menor que 5.<br>";
    mensaje += "<table><tr><th>Iteración</th><th>Condición (i < 5)</th></tr>";

    
    do {
       
        contador++; 
        
        
        mensaje += `<tr><td>${contador}</td><td>${contador < 5 ? 'VERDADERO' : 'FALSO'}</td></tr>`;

    } while (contador < 5);

    
    mensaje += "</table>";
    mensaje += `<p>✅ El bucle ha finalizado. Se ejecutó ${contador} veces.</p>`;
    
   
    document.getElementById('resultado').innerHTML = mensaje;
}