$( document ).ready(function($) {
	$( "#vshowmore" ).click(function() {
		$( "#ggg" ).show( "slow" );
		$( "#vshowmore" ).hide( "slow" );
		$( "#vhide" ).show( "slow" );
	});
	$( "#vhide" ).click(function() {
  		$( "#ggg" ).hide( 1000 );
  		$( "#vhide" ).hide( "slow" );
		$( "#vshowmore" ).show( "slow" );
	});


// scrolling button
	$("#scrolling").click(function () {
				$('html, body').animate({
						scrollTop:$(".vsearchcontainer").offset().top
				}, 1000);
		 });
	window.onscroll = function() {scrollFunction()};
	 function scrollFunction() {
			 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
					 document.getElementById("scrolling").style.display = "block";
			 } else {
					 document.getElementById("scrolling").style.display = "none";
			 }
	 }

	 // window.onscroll = function() {searchFunction()};
	 // function searchFunction() {
		// 	 if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		// 			 document.querySelector(".vsearch").style.position = "fixed";
		// 	 }
		// 	 else {
		// 			 document.querySelector(".vsearch").style.display = "none";
		// 	 }
	 // }


});
