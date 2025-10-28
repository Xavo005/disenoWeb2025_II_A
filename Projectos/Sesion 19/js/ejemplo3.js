$(function () {
    $("a").click(function () {
        alert("Has pulsado el enlace. Ahora seras enviado a otra pagina"
            + $(this).attr("href"))
    })})