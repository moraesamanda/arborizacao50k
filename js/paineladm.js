$(function() {
$('.required-inserir').tooltip({
placement: 'rigth',
title: 'Inserir'
});
})

$(function() {
$('.required-editar').tooltip({
placement: 'rigth',
title: 'Editar'
});
})

$(function() {
$('.required-excluir').tooltip({
placement: 'rigth',
title: 'Excluir'
});
})

$(function() {
$('.required-face').tooltip({
placement: 'rigth',
title: 'Compartilhar Facebook'
});
})


function showMessageToast(message, temp) {
$().toastmessage('showToast', {
text: "" + message + "",
stayTime: temp, position: 'middle-center',
type: 'notice'
});
}

function MessageDelete()
{
var msg = 'Excluido com sucesso!';
showMessageToast(msg, 15000);
}

function MessageCadastro()
{
var msg = 'Cadastro realizado com sucesso!';
showMessageToast(msg, 15000);
}

function alterar(){$("#modalPlanta").modal('show');}

function alterarUsuario(){$("#modalUsuario").modal('show');}


function alterarPerfil(){$("#modalPerfil").modal('show');}

function alterarPerfilUser(){$("#modalPerfilUser").modal('show');}

function alterarMutirao(){$("#modalMutirao").modal('show');}





