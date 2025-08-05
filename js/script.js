$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


$(function() {
	$('.animate').scrolla({
		mobile: true, 
		once: false 
	});    
 }); 


 $(function(){
	Splitting();  
  });


  let scrollTop = 0;

$(window).on('scroll resize', function(){
    scrollTop = $(document).scrollTop();
	// console.log(scrollTop);
    fixHeader();
	fix();

	function fix(){
		if(scrollTop>200){$('.topBtn').addClass('on')}
		  else{$('.topBtn').removeClass('on')}
	  }
});

function fixHeader(){
    if(scrollTop > 950){
      $('header').addClass('on');
    } else{
        $('header').removeClass('on');
    }
}


$(function() {            
    $('.goTop').on('click', function() {
       const top = $('body').offset().top;
        $('html, body').animate( { scrollTop : (top) }, 600 );  
    });     
});   

$(function () {
	$('.slideImg').slick({
	arrows: false,
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 3000,
	fade: false,
	cssEase: 'linear'
	});
});




	$(function(){
		$('.gnbBtn').on('click', function(){
		  $('nav.gnb').addClass('on');
		  $('.dimmed').addClass('on');
		});
		$('.close, .dimmed').on('click', function(){
			$('nav.gnb').removeClass('on');
			$('.dimmed').removeClass('on');
		});
	  });


	  $('.visual').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		$(this).find('.slick-slide').eq(currentSlide).find('*').blur(); 
	  });


	  $(function(){
		$('.visual').slick({
		   arrows: false, 
		   dots: false, 
		   fade: true,
		   autoplay:true, 
		   autoplaySpeed: 4000, 
		   pauseOnHover: false,
		   pauseOnFocus: false   
	   });
	});
	

	$(function(){
		$('.search').on('click', function(){
		  $('.searchIn').addClass('on');
		  $('.dimmed').addClass('on');
		});
	  
		$('.closed, .dimmed').on('click', function(){
		  $('.searchIn').removeClass('on');
		  $('.dimmed').removeClass('on');
		  $('nav.gnb').removeClass('on'); 
		});
	  
		$('.inner .right span').on('click', function(){
		  $('.searchIn').removeClass('on');  
		  $('.dimmed').removeClass('on');  
		  $('nav.gnb').addClass('on');         
		});
	  });

	  $(function(){
		$('nav.gnb .tab li:eq(3)').on('click', function(){
		  $('nav.gnb .tab li:eq(3) ul').toggleClass('on');
		  $('nav.gnb .tab > li:eq(4) > ul').removeClass('on');
		  $('nav.gnb .tab li:eq(3) > a').toggleClass('on');
		  $('nav.gnb > .tab > li:eq(4) > a').removeClass('on');
		});
		$('nav.gnb > .tab > li:eq(4)').on('click', function(){
		  $('nav.gnb > .tab > li:eq(4) > ul').toggleClass('on');
		  $('nav.gnb .tab > li:eq(3) > ul').removeClass('on');
		  $('nav.gnb > .tab > li:eq(4) > a').toggleClass('on');
		  $('nav.gnb > .tab > li:eq(3) > a').removeClass('on');
	  });
	  });
