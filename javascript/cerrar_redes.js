$(function(){
	/*obtener los objetos a manipular*/
	var enlace = $("#cerrar");
	var cajita = $("#siguenos div");
	/*escuchar el click en el anchor*/
	enlace.click(function(){
		//alert("click!!");
		cajita.fadeToggle("slow");
		var estado = enlace.data("estado");
		if( estado === "cerrar")
		{
			enlace.data("estado", "abrir");
			enlace.html("abrir");
		}
		else{
			enlace.data("estado", "cerrar");
			enlace.html("close");
		}
		return false;
	});
});