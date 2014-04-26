$(function() {
	var imagen = $("#testimonio-gato img");
	imagen.hover(function() {
		imagen.fadeOut("slow", function(){
			imagen.attr("src", "../imagenes/testimonio2.png");
			imagen.fadeIn("slow");
		});
	}, function() {
		imagen.fadeOut("slow", function(){
			imagen.attr("src", "../imagenes/testimonio.jpg");
			imagen.fadeIn("slow");
		});
	});
});
