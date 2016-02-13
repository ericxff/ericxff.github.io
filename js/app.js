$(document).ready(function() {

$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});

function CloseNav() {
            $(".navbar-collapse").stop().css({ 'height': '1px' }).removeClass('in').addClass("collapse");
            $(".navbar-toggle").stop().removeClass('collapsed');
        }

        $('html').click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
            if (_opened === true && !clickover.hasClass("navbar-toggle")) {
                CloseNav();
            }

        });

});