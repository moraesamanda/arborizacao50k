$(function() {
    
  $('#menu-navegacao').find('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


var $window = $(window);
var nav = $('#navbar-menu');
$window.scroll(function(){
  
    if ($window.scrollTop() >= 650) {
       nav.addClass('fix');
    }
    else {
       nav.removeClass('fix');
    }
});


