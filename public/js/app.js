// particles integration
$(window).on("load", function(){
	particlesJS.load('particles-js', '../assets/particles.json', function() {
	  console.log('particles.js loaded - callback');
	});

//instgram API
	$.ajax({
		url: "https://www.instagram.com/tstudentsvilnius/?__a=1",
		success: handleResults
	})

	function handleResults(response_body){
		var nodes = response_body.user.media.nodes;
		console.log("alles goed");
		_.each(_.sample(nodes,4), function (element, index, list) {
			var obj = $('<img class="image is-128x128">');
			obj.attr('src', element["thumbnail_src"]);
			console.log(obj);
			obj.appendTo('#photos')
		})
	}

	$(function() {
	    $( "#draggable" ).draggable();
	  });

})
