$('.logo').hide();
$(window).scroll(function() {
	if ($(window).scrollTop() > 20 ){    
 		$('nav').addClass('show');
        $('.logo').show();
    } else {
        $('nav').removeClass('show');
        $('.logo').hide();
 	};   	 
});

 $('a[href="#details"]').on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 2000, 'linear');
 });
