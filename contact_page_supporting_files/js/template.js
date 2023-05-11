/*
The purpose of this code is to add functionality to a HTML element with the class "headroom" using the Headroom.js library.

The code uses the jQuery syntax to select the "headroom" class and apply the Headroom functionality to it. 
The Headroom options are set with an object containing four properties:
"tolerance" sets how many pixels the user must scroll to trigger the hide or show animation of the element.
"offset" sets how far the element should be from the top of the viewport before it starts to hide or show.
"classes" is an object that defines the CSS classes to be added and removed to the element in different states. 
"initial" is the class added to the element when the page is loaded. "pinned" is the class added when the element is shown. "unpinned" is the class added when the element is hidden.

In summary, this code uses jQuery to apply Headroom.js to an element with the "headroom" class, and defines the options for how the element should behave when scrolled.
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
