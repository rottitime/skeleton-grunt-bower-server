var bf = bf || {};
bf.Config = bf.Config || {};
bf.Page = bf.Page || {};

bf.Config.sizeTablet = 768;
bf.Config.sizeDesktop = 1000;

//start main site js
$( document ).ready(function() {
	bf.Page.initMenu();
	bf.Page.initSlider();
	bf.Page.popupBox();
});

bf.Page.initMenu = function() {
	$('header button').on('click', function() {
		$( this ).toggleClass( "active" );
	});
}



bf.Page.initSlider = function() {
	$('.scores').slick({
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		mobileFirst: true,
		responsive: [{
			breakpoint: bf.Config.sizeTablet,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 4,
				dots: true
			}
		}]
	});

	$('.quote-list').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'linear'
	});
};

bf.Page.popupBox = function() {
	$('.fancybox a').featherlight({
		type: 'image'
	});
};
