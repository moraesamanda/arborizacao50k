$(document).ready(function(){
	$("button:first").click(function(){
		if(required(0, 5) && validateEmail()){
<<<<<<< HEAD
			$(".alert").fadeOut();
=======
>>>>>>> origin/master
			$("#form-dados-pessoais").css("display", "none");
			$("#form-endereco").fadeIn();
		}
	});
	
<<<<<<< HEAD
	$("#btn-endereco").click(function(){
		if(required(5, 9) && $("input[name='CEP']").val().length == 9){
			$(".alert").fadeOut();
=======
	$("button").click(function(){
		if(required() && $("input[name='CEP']").val().length == 9){
>>>>>>> origin/master
			$("#form-endereco").css("display", "none");
			$("#form-voluntario").fadeIn();
		}
	});
<<<<<<< HEAD
	
	$("#btn-voltar-endereco").click(function(){
		$("#form-endereco").css("display", "none");
		$("#form-dados-pessoais").fadeIn();
	});
	
	$("#btn-voltar-volutario").click(function(){
		$("#form-voluntario").css("display", "none");
		$("#form-endereco").fadeIn();
	});
=======
>>>>>>> origin/master
});

function required(min, max){
	var inputs = $("input");
	for(var i = min; i < max; i++){
		if(inputs[i].value.length === 0){
<<<<<<< HEAD
			$("strong").html("Faltam campos a serem preenchidos!");
			$(".alert").fadeIn();
=======
>>>>>>> origin/master
			return false;
		}
	}
	return true;
}

function validateEmail() {
	var email = $("input[type='email']:first").val();
	er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;
	if(er.exec(email)){
		if($("input[type='email']:first").val() != $("#email-repeat").val()){
<<<<<<< HEAD
			$("strong").html("Campos e-mail não estão iguais!");
=======
>>>>>>> origin/master
			$(".alert").fadeIn();
			return false;
		}
		return true;
	} else {
<<<<<<< HEAD
		$("strong").html("Digite um e-mail válido!");
		$(".alert").fadeIn();
		return false;
	}
};

$('#radioBtn a').on('click', function(){
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#'+tog).prop('value', sel);
    
    $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
})
=======
		return false;
	}
};
>>>>>>> origin/master
