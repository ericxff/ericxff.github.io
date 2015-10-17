$(document).ready(function() {
    $(document).on('click',function(){
      $('.navbar-collapse').collapse('hide');
    });
	//parallax js
        var jumboHeight = $('.jumbotron').outerHeight();
        function parallax(){
            var scrolled = $(window).scrollTop();
            $('.bg').css('height', (jumboHeight-scrolled) + 'px');
        }
        $(window).scroll(function(e){
            parallax();
        });

    //sponsor js 
    	$("#sponsor").mouseenter(function () {
    		$(this).fadeTo('fast', 0.8).mouseleave(function() {
    			$(this).fadeTo('fast', 1.0);	
    		});
    	});
});
        
