$( document ).ready(function() {
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
});