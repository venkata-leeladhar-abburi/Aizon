(function($) {

	"use strict";


	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	function background() {
		var img = $("[data-background]");
		img.css("background-image", function () {
			var bg = "url(" + $(this).data("background") + ")";

			if ($(this).data("background")) {
				return bg;
			} else {
				return false;
			}
		});
	}
	background();



	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');

			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}

		}
	}

	headerStyle();



	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa-solid fa-angle-down fa-fw"></span></div>');

		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});

		$('.hamburger').on('click', function(e) {
			$('.about-sidebar').addClass('active');
		});

		$('.xs-sidebar-group .close-button').on('click', function(e) {
			$('.xs-sidebar-group.info-group').removeClass('isActive');
		});

	}



	// Add Current Class Auto
	function dynamicCurrentMenuClass(selector) {
		let FileName = window.location.href.split("/").reverse()[0];

		selector.find("li").each(function () {
			let anchor = $(this).find("a");
			if ($(anchor).attr("href") == FileName) {
				$(this).addClass("current");
			}
		});
		// if any li has .current elmnt add class
		selector.children("li").each(function () {
			if ($(this).find(".current").length) {
				$(this).addClass("current");
			}
		});
		// if no file name return
		if ("" == FileName) {
			selector.find("li").eq(0).addClass("current");
		}
	}

	if ($('.main-header .header-lower .main-menu .navigation').length) {
		dynamicCurrentMenuClass($('.main-header .header-lower .main-menu .navigation'));
	}



	//Header Search
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});

		$('.search-popup .color-layer').on('click', function() {
			$('body').removeClass('search-active');
		});
	}



	// Mobile Nav Hide Show
	if($('.mobile-menu').length){

		//$('.mobile-menu .menu-box').mCustomScrollbar();

		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);

		//Hide / Show Submenu
		$('.mobile-menu .navigation > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var target = $(this).parent('li').children('ul');

			if ($(target).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(target).slideUp(500);
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation').children('li.dropdown').removeClass('open');
				$(this).parents('.navigation').children('li.dropdown').children('ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//3rd Level Nav
		$('.mobile-menu .navigation > li.dropdown > ul  > li.dropdown > .dropdown-btn').on('click', function(e) {
			e.preventDefault();
			var targetInner = $(this).parent('li').children('ul');

			if ($(targetInner).is(':visible')){
				$(this).parent('li').removeClass('open');
				$(targetInner).slideUp(500);
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				return false;
			}else{
				$(this).parents('.navigation > ul').find('li.dropdown').removeClass('open');
				$(this).parents('.navigation > ul').find('li.dropdown > ul').slideUp(500);
				$(this).parent('li').toggleClass('open');
				$(this).parent('li').children('ul').slideToggle(500);
			}
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');

		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
		});

		$(document).keydown(function(e){
	        if(e.keyCode == 27) {
				$('body').removeClass('mobile-menu-visible');
			$('.mobile-menu .navigation > li').removeClass('open');
			$('.mobile-menu .navigation li ul').slideUp(0);
        	}
	    });
	}

	// Main Slider
	function heroSliderOne($scope, $) {
		var slider = new Swiper('.main-slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: false,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.main-slider_button-next',
				prevEl: '.main-slider_button-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".main-slider_pagination",
				clickable: true,
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 1,
				},
				'1200': {
					slidesPerView: 1,
				},
				'992': {
					slidesPerView: 1,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}

	// Single Item Carousel
	var slider = new Swiper('.single-item_carousel', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		autoplay: {
			enabled: true,
			delay: 6000
		},
		// Navigation arrows
		navigation: {
			nextEl: '.single-carousel_button-next',
			prevEl: '.single-carousel_button-prev',
			clickable: true,
		},
		//Pagination
		pagination: {
			el: ".single-carousel_pagination",
			clickable: true,
		},
		speed: 500,
		breakpoints: {
			'1600': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});





	function instaSliderActive($scope, $) {
		var slider = new Swiper('.instagram_carousel', {
			slidesPerView: 5,
			spaceBetween: 0,
			loop: false,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.instagram-carousel_button-next',
				prevEl: '.instagram-carousel_button-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".instagram_pagination",
				clickable: true,
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 5,
				},
				'1200': {
					slidesPerView: 5,
				},
				'992': {
					slidesPerView: 4,
				},
				'768': {
					slidesPerView: 3,
				},
				'576': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 2,
				},
			},
		});
	}




	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}



	// Testimonial Section Four Carousel
	if($('.shop-detail').length){
		var thumbsCarousel = new Swiper('.shop-detail .thumbs-carousel', {
	      spaceBetween: 15,
	      slidesPerView: 4,
		  loop:false,
	      //direction: 'vertical',
	      breakpoints: {
		      320: {
	     		  //direction: 'horizontal',
			      slidesPerView: 3,
		      },
		      640: {
	     		  //direction: 'horizontal',
			      slidesPerView: 4,
		      } ,
		      1023: {
			      slidesPerView: 4,
		      }

		   }
	    });

	    var contentCarousel = new Swiper('.shop-detail .content-carousel', {
	      spaceBetween: 0,
	      loop:false,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	      thumbs: {
	        swiper: thumbsCarousel
	      },
	    });
	}


	//Jquery Spinner / Quantity Spinner
	if($('.qty-spinner').length){
		$("input.qty-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}




	//Progress Bar
	if($('.progress-line').length){
		$('.progress-line').appear(function(){
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width',percent+'%');
		},{accY: 0});
	}


	function serviceSliderActive($scope, $) {
		var slider = new Swiper('.team-carousel', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.team-one_button-next',
				prevEl: '.team-one_button-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".team-one_pagination",
				clickable: true,
				type: "fraction",
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});

		// Humanity One Carousel
		var humanitySlider = new Swiper('.humanity-one_carousel', {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: false,
			autoplay: {
				enabled: true,
				delay: 2000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.humanity-one_button-next',
				prevEl: '.humanity-one_button-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".humanity-one_pagination",
				clickable: true,
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 1,
				},
				'1200': {
					slidesPerView: 1,
				},
				'992': {
					slidesPerView: 1,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}



	function testimonialActive($scope, $) {
		var testimonial = new Swiper('.testimonial-carousel', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			// Navigation arrows
			navigation: {
				nextEl: '.testimonial-one_button-next',
				prevEl: '.testimonial-one_button-prev',
				clickable: true,
			},
			//Pagination
			pagination: {
				el: ".testimonial-one_pagination",
				clickable: true,
				//type: "fraction",
			},
			speed: 500,
			breakpoints: {
				'1600': {
					slidesPerView: 2,
				},
				'1200': {
					slidesPerView: 2,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}



	function tabActive($scope, $) {
		if($('.tabs-box').length){
			$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
				e.preventDefault();
				var target = $($(this).attr('data-tab'));

				if ($(target).is(':visible')){
					return false;
				}else{
					target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
					$(this).addClass('active-btn');
					target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
					target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
					$(target).fadeIn(300);
					$(target).addClass('active-tab');
				}
			});
		}
	}




	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if($(this).hasClass('active')!==true){
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}



	//Gallery Filters
	if($('.filter-list').length){
		$('.filter-list').mixItUp({});
	}



	// Odometer
	function counterActive($scope, $) {
		if ($(".odometer").length) {
			jQuery(".odometer").appear(function (e) {
				var odo = jQuery(".odometer");
				odo.each(function () {
					var countNumber = jQuery(this).attr("data-count");
					jQuery(this).html(countNumber);
				});
			});
		}
	}


	//Parallax Scene for Icons
	if($('.parallax-scene-1').length){
		var scene = $('.parallax-scene-1').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-2').length){
		var scene = $('.parallax-scene-2').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-3').length){
		var scene = $('.parallax-scene-3').get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if($('.parallax-scene-4').length){
		var scene = $('.parallax-scene-4').get(0);
		var parallaxInstance = new Parallax(scene);
	}


	// LightBox Image
	if($('.lightbox-image').length) {
		$('.lightbox-image').magnificPopup({
		  type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	}


	//LightBox Video
	if($('.lightbox-video').length) {
		$('.lightbox-video').magnificPopup({
	      // disableOn: 700,
	      type: 'iframe',
	      mainClass: 'mfp-fade',
	      removalDelay: 160,
	      preloader: false,
	      iframe:{
	        patterns:{
	          youtube:{
	          index: 'youtube.com',
	          id: 'v=',
	          src: 'https://www.youtube.com/embed/%id%'
	        },
	      },
	      srcAction:'iframe_src',
	    },
	      fixedContentPos: false
	    });
	}



	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}



	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);

		});
	}



	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


	// active nice select
	if ($('select').length) {
		$('select').niceSelect();
	}

	// cart active
	$("body").on("added_to_cart", function () {
		$(".xs-sidebar-group.info-group").addClass("isActive");
	});

/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	$(window).on('scroll', function() {
		headerStyle();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
	});

	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/tx_hero_slider.default', heroSliderOne);
		elementorFrontend.hooks.addAction('frontend/element_ready/tx_hero_slider.default', counterActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/tx_tabs.default', tabActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/tx_service_slide.default', serviceSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/tx_testimonial.default', testimonialActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/tx_count_box.default', counterActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/tx_brand.default', instaSliderActive);
		elementorFrontend.hooks.addAction('frontend/element_ready/tx_pricing_tab.default', tabActive);
	});

})(window.jQuery);