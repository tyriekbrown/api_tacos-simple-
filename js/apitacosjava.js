$(document).ready(function(){


	$("#getRandom").on("click", function(){

	$.ajax({
	  url: "http://taco-randomizer.herokuapp.com/random/?full-taco=true",
	  // Work with the response
	  success:function( response ) {
	    console.log( response ); // server response
			//console.log(response.base_layer.recipe)
	    $('h1').eq(0).text(response.name)
			$('h2').eq(0).text('Recipe')
			$('#baseLayer').text(response.base_layer.recipe)
			$('#mixIn').text(response.mixin.recipe)


	  },
	  error: function(error){
	    console.log(error)
	  }
	  });
});

});//$(document).ready(function()
