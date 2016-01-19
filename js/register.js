$(document).ready(function(){
	$("button:first").click(function(){
		if(required(0, 5) && validateEmail()){
			$("#form-dados-pessoais").css("display", "none");
			$("#form-endereco").fadeIn();
		}
	});
	
	$("button").click(function(){
		if(required() && $("input[name='CEP']").val().length == 9){
			$("#form-endereco").css("display", "none");
			$("#form-voluntario").fadeIn();
		}
	});
});

function required(min, max){
	var inputs = $("input");
	for(var i = min; i < max; i++){
		if(inputs[i].value.length === 0){
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
			$(".alert").fadeIn();
			return false;
		}
		return true;
	} else {
		return false;
	}
};