$(function () {
    $("a").click(function () {
        alert("Has hecho clic en un enlace. Ahora serás enviado a otra página."
            + $(this).attr("href")
        );
    })
});