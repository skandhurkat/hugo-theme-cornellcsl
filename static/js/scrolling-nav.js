//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > $('#top').outerHeight(true) + 50) {
        $(".navbar").addClass("top-nav-collapse");
    } else {
        $(".navbar").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($section.class('home-section')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Function to affix the navbar with the offset from the header height.
var affix_navbar = function() {
	$('.navbar').affix({
		offset: {
		top: function() {
			return (this.top = $('header').outerHeight(true))
			}
		}
});
}

// Set the nav-wrapper height to the height of the nav. This prevents the
// page content from "jumping" up when the navbar gets affixed to the top
// of the page.
$('.nav-wrapper').height($('nav').height());

// On clicking links in the navbar, the expanded navbar (in mobile view)
// should collapse automatically.
$('nav a').on('click', function() {
	$(".navbar-ex1-collapse").removeClass("in");
        $(".navbar-ex1-collapse").attr("aria-expanded", "false");
});

// Function to handle clicking on the search button. This changes the icon
// from the "search" icon to a "close" icon
$('#cu-search-toggle').on('click', function() {
$('.cu-search-toggle').toggleClass('glyphicon-search glyphicon-remove');
} );

// Function to reposition the search icon vertically in the middle of the
// header.
var position_search = function() {
	var search_toggle_button_height = $('#cu-search-toggle').outerHeight();
	var cu_csl_logo_height = $('.cu-csl-logo-div').outerHeight();
	var banner_height = Math.max(search_toggle_button_height,
			cu_csl_logo_height);
	var top_position = (banner_height - search_toggle_button_height) / 2;
	$('.cu-search-toggle-div').height(cu_csl_logo_height);
	$('#cu-search-toggle').css({ top: top_position });
};

// Add listeners for window resize.
$(window).resize(function() { position_search(); affix_navbar(); });
$(window).load(function() { position_search(); affix_navbar(); });
