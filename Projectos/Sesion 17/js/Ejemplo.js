function compra(){
     var a = 2;
        var b = 2;
        if(a==b){
            alert("A y B Son iguales")
        }else{
            alert("A y B No son iguales")
        }
}
function resta(x,y){
    var rest = x - y;
    document.writeln("<h2>La resta es: " + rest + "</h2>");
}

function suma(a,b){
    var sum = a+b;
    document.getElementById("sumar").innerHTML = "La suma es: " + sum;
}

function escribir(){
    valor = document.getElementById("entrada").value;
    document.getElementById("contenido").innerHTML = valor;
}