$(function(){
	/*obtener un objeto de jQuery para manipular el titulo*/
	var titulo = $("#titulo");
	/*alert(titulo.html());
	titulo.html("Otra Consultora");
	alert(titulo.html());*/
	titulo.click(function(){
		titulo.addClass("texto_sombreado");
	});
});