$(function() {
	//question collapse
	$('.question__title').on("click", function() {
		$(this).find($('.question__title-border')).toggleClass('question__title-border-active')
		$(this).closest('.question__tab').find($('.question__text')).toggleClass('question__text-active');
	});
	//question collapse END

	//header menu collapse
	$('.header__collapse').on('click', function(){
		$('.header__nav').toggle("slow");
	});
	//header menu collapse END

  //matchHeight
  $(".ourclients .cards").matchHeight();
  $(".ourclients .cards__title").matchHeight();
  //matchHeight END
	//header__scroll
	$(".header__scroll").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function(){
				window.location.hash = hash;
			});
		} 
	});
	//header__scroll END



	//listoption works and filters
  $('.listoption__item').on("click", function() {
		var listData = $(this).html();
		var listValue = $(this).attr('data-filter');
		console.log(listValue); 
    $(this).closest('.listoption').find($('.listoption__data')).html(listData);
    $(this).closest('.listoption').find($('.listoption__data')).attr('data-filter',listValue);
		$('.geography__img').removeClass('active');
		$('.geography__img').filter('.' + listValue).addClass('active');
	});
	//listoption works and filters END

	//media screen JS
	enquire
	.register("screen and (min-width: 1366px)", {
		match : function() {
		//console.log('1366');
		// header__video
		$('.header__rightside').append($('.header__video'));
		// header__video END
		
	},
	unmatch : function() {
	}
})
.register("screen and (min-width: 1024px) and (max-width: 1365px)", {
	match : function() {
		//console.log('1024');
		// header__video
		$('.header__rightside').append($('.header__video'));
		// header__video END
	},
	unmatch : function() {
	}
})
.register("screen and (min-width: 768px) and (max-width: 1023px)", {
	match : function() {
		//console.log('768');
		// header__video
		$('.header__rightside').append($('.header__video'));
		// header__video END
		},
		unmatch : function() {
		}
	})
	.register("screen and (max-width: 767px)", {
		match : function() {
			//console.log('480');
			// header__video
			$('.header__maintitle').after($('.header__video'));
			// header__video END
		},
		unmatch : function() {
		}
	});
	//media screen JS END

	//clientslider 
	var sliderClients = $('.clientslider');
	sliderClients.owlCarousel({
		nav: false,
		dots: false,
		items: 3,
		margin: 10,
		loop: true,
		responsive : {
			0 : {
				items: 2,
				margin: 30,
			},
			1024 : {
				items: 3,
			}
		}
	});
	$('.ourclients__controls .controls__left').click(function() {
		sliderClients.trigger('prev.owl.carousel');
  });
  // Go to the previous item
  $('.ourclients__controls .controls__right').click(function() {
    sliderClients.trigger('next.owl.carousel');
  });
  //index action slider END
	//clientslider END
	//reviewslider 
	var sliderReviews = $('.reviewslider');
	sliderReviews.owlCarousel({
		nav: false,
		dots: true,
		items: 1,
		dotClass: 'reviewslider__dot',
		loop: true,
		dotsContainer: '.reviewslider__dots', //правильный класс !!! задания контейнера с точками
		//navText: [$('.testcontrol__left'),$('.testcontrol__right')]
	});
	$('.reviewslider__controls .controls__left').click(function() {
		sliderReviews.trigger('prev.owl.carousel');
  });
  // Go to the previous item
  $('.reviewslider__controls .controls__right').click(function() {
    sliderReviews.trigger('next.owl.carousel');
  });
	//reviewslider END
	//reviewslider 
	$('.stageslider').owlCarousel({
		nav: false,
		dots: false,
		items: 2,
		//dotClass: 'reviewslider__dot',
		//dotsClass: 'reviewslider__dots',
		//autoplay: true,
		//autoplayTimeout: 3000,
		//autoplayHoverPause: true,
		loop: true,
	});
	//reviewslider END
	//sertificate Fancybox
	$("[data-fancybox]").fancybox({
		
	});
	//sertificate Fancybox END


	//	
	filterSliderItem($('.ourclients__links'), sliderClients);
	filterSliderChangeLink($('.ourclients__links-border'), $('.slideresult__link'));
	filterSliderItem($('.videoreview__link'), sliderReviews);
	
	// function filterSliderItem
	function filterSliderItem(link, slider){ 
		var activeLink = link;
		var currentSlider = slider;
    $(activeLink).on("click", function() { 
			event.preventDefault();     
			$(activeLink).removeClass('active');
			$(this).addClass('active');
			var productFilter = $(this).attr('data-filter');
			
			productFilter = ("." + productFilter);			
			currentSlider.owlFilter(productFilter);
			
		});
		
	};
	// function filterSliderItem END
	
	// function filterSliderChangeLink
	function filterSliderChangeLink(link, target){
		var activeLink = link;
		$(activeLink).on("click", function() { 
			var result = $(this).text();
			target.text(result);
		});
		
	};  
	// function filterSliderChangeLink END
	
	
	// filter slider item
	$.fn.owlRemoveItem = function(num) {
		var owl_data = $(this).data('owl.carousel');
		
		owl_data._items = $.map(owl_data._items, function(data, index) {
			if(index != num) return data;
		})
		
		$(this).find('.owl-item').eq(num).remove();
	}

	$.fn.owlRemoveItem = function(num) {
		var owl_data = $(this).data('owl.carousel');
		
		owl_data._items = $.map(owl_data._items, function(data, index) {
			if(index != num) return data;
		})
	
		$(this).find('.owl-item').eq(num).remove();
	}
	
	$.fn.owlFilter = function(data, callback) {
		var owl = this,
			owl_data = $(owl).data('owl.carousel');
			$elemCopy = $('<div>').css('display', 'none');
		
		// check attr owl-clone 
		if(typeof($(owl).data('owl-clone')) == 'undefined') {
			$(owl).find('.owl-item:not(.cloned)').clone().appendTo($elemCopy);
			$(owl).data('owl-clone', $elemCopy);
		}else {
			$elemCopy = $(owl).data('owl-clone');
		}
		// check attr owl-clone END
		
		// clear content 
		owl.trigger('replace.owl.carousel', ['<div/>']);
		
		switch(data){
			case '*': 
				$elemCopy.children().each(function() {
					owl.trigger('add.owl.carousel', [$(this).clone()]);
				})
				break;
			default: 
				$elemCopy.find(data).each(function() {
					owl.trigger('add.owl.carousel', [$(this).parent().clone()]);
				})
				break;
		}
	
		//remove item empty when clear 
		owl.owlRemoveItem(0);
		owl.trigger('refresh.owl.carousel').trigger('to.owl.carousel', [0]);
		//remove item empty when clear END
	
		// callback
		if(callback) callback.call(this, owl);
	}
	// filter slider item END
	//functions component END
	


});
