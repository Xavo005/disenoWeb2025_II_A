$(document).ready(function() {
    
    $('#campoBusqueda').keyup(function() {
        
        var textoBusqueda = $(this).val().toLowerCase();
        
        $("#listaProductos li").each(function() {
            
            var textoElemento = $(this).text().toLowerCase();
            
            if (textoElemento.includes(textoBusqueda)) {
                
                $(this).show();
                
            } else {
                
                $(this).hide();
            }
        });
        
    });
});