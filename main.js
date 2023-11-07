$(document).ready(function(){

/*Con un selector de clase y el método after inserto 
un elemento li después del elemento seleccionado*/
$(".segundo").after("<li>TERCERO</li>")

/*Con un selector de clase y el método before inserto 
un elemento li antes del elemento seleccionado*/
$(".segundo").before("<li>PRIMERO</li>")

/*Con un selector de elemento y el método html inserto 
un innertext dentro del elemento seleccionado*/
$("h1").html("Hola ")

/*Con un selector de elemento y el metodo append inserto
contendido después del ya contenido en el elemento seleccionado*/
$("h1").append("Mundo")

/*Con un selector de ID y el método text inserto 
texto dentro del elemento seleccionado*/
$("#texto").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")

/*Con un selector de ID y el método text muestro 
el texto contenido dentro del elemento seleccionado*/
alert($("#texto").text())

})