$(document).ready(function(){

	$("#web").click(function(){
		$(".box").filter(".web-1").show(2000);
		$(".box").filter(".web-2").show(2000);
		$(".gra-1").hide(1000);
		$(".gra-2").hide(1000);
	})

	$("#app").click(function(){
		$(".box").filter(".web-1").show(2000);
		$(".box").filter(".gra-1").show(2000);
		$(".web-2").hide(1000);
		$(".gra-2").hide(1000);
	})

	$("#icon").click(function(){
		$(".box").filter(".gra-2").show(2000);
		// $(".gra-2").addClass("col align-self-center")
		$(".web-1").hide();
		$(".gra-1").hide();
		$(".web-2").hide();
	})

	$("#all").click(function(){
		$(".box").show(1000);
	})

	// Using document.documentElement
		document.documentElement.scrollTop = 0;

		// Using document.body
		document.body.scrollTop = 0;



})