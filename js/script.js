$(document).ready(function() {	
	
	$("#tablero").addClass("tap-active");
	$("#tablero span").css("color", "#313236");
	$("main").load("view/tablero.html");

	$("#tablero").click(function(){
		$("#formulario span").css("color", "#9b9b9b"); //quito
		$("#tablero span").css("color", "#313236"); //pongo

		$(".tap").removeClass("tap-active");
		$(this).addClass("tap-active");
		$("main").load("view/tablero.html");
	});
	
	$("#formulario").click(function(){
		$("#tablero span").css("color", "#9b9b9b"); //quito
		$("#formulario span").css("color", "#313236"); //pongo

		$(".tap").removeClass("tap-active");
		$(this).addClass("tap-active");
		$("main").load("view/formulario.html");
	});



});