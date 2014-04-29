$(function(){
	/*obtengo las cajas a manipular*/
	var preview = $("#preview img");
	var principal = $("#principal img");
	
	/*escucho el click sobre las cajitas*/
	preview.click(function(evento){
		/*obtiene la ruta*/
		var quien_fue = $(evento.target);
		var ruta = quien_fue.data("ruta-principal");
		/*oculta la imagen principal*/
		principal.slideUp("slow", function(){
			/*cambia la imagen*/
			principal.attr("src", ruta);
			/*muestra la imagen principal*/
			principal.slideDown("slow");
		});
		
	});
});