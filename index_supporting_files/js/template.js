/*
This code initializes the Headroom.js plugin with specific options and applies it to an HTML element with the class "headroom", 
adding smooth scrolling effects to the header of a webpage.
*/

jQuery(document).ready(function($) {

	$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});

});
