$(document).ready(function(){
	showMessageToast("Usuário cadastrado com sucesso!", 3000);
});

function showMessageToast(message, temp) {
		$().toastmessage('showToast', {
			text: "" + message + "",
			stayTime: temp, position: 'middle-center',
			type: 'notice'
		});
	}	