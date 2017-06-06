console.log("welcome.js file is loaded.")

var scrollTwentyFive = false;
var scrollFifty = false;
var scrollSeventyFive = false;
var scrollOneHundred = false;

// Create the scrollPercentage

$(window).bind('scroll', function() {

	var scrollHeight = $(document).height() - $(window).height();

    window.scrollPercent = (scrollHeight == 0) ? 0 : ($(window).scrollTop() / scrollHeight) * 100;

    // Conditional code we'll use to fire events based on scrollPercentage.

    if (window.scrollPercent >= 25 && !scrollTwentyFive) {
    	console.log("The users has scrolled to "+scrollPercent+"% of the page.");
    	// heap.track('scroll depth', {percent: 25});
        scrollTwentyFive = true;
    }

    if (window.scrollPercent >= 50 && !scrollFifty) {
    	console.log("The users has scrolled to "+scrollPercent+"% of the page.");
        scrollFifty = true;
    }

    if (window.scrollPercent >= 75 && !scrollSeventyFive) {
    	console.log("The users has scrolled to "+scrollPercent+"% of the page.");
        scrollSeventyFive = true;
    }

    if (window.scrollPercent >= 100 && !scrollOneHundred) {
    	console.log("The users has scrolled to "+scrollPercent+"% of the page.");
        scrollOneHundred = true;
    }

});

console.log("end of welcome.js file")
