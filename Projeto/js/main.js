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

$('#btnpesquisar').click(pesquisar);
$('#txtpesquisar').bind('input', pesquisar);

function pesquisar(){
	var texto = $("#txtpesquisar")[0].value.toLowerCase();
	var elements = document.getElementsByClassName("pesquisa");
	
	var elementsvisible;
	if(texto=='')
		elementsvisible = document.getElementsByClassName("pesquisa");
	else
		elementsvisible = $("div[data-pesquisa*='"+texto+"']");
	for (i = 0; i < elements.length; i++) {
		if($.inArray(elements[i],elementsvisible) != -1){
			elements[i].className = elements[i].className.replace('hidden','');
		}else{
			elements[i].className +=' hidden';
		}
	}
}	


