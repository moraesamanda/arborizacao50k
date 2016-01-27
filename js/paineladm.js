$(function() {
$('.required-inserir').tooltip({
placement: 'rigth',
title: 'Inserir'
});
})

$(function() {
$('.required-download').tooltip({
placement: 'rigth',
title: 'Download da Cartilha'
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
$('.required-problema').tooltip({
placement: 'rigth',
title: 'Problema'
});
})

$(function() {
$('.required-face').tooltip({
placement: 'rigth',
title: 'Compartilhar Facebook'
});
})

$(function() {
$('.autorizar').tooltip({
placement: 'rigth',
title: 'Quantidade de notícia autorizar'
});
})

$(function() {
$('.aprovado').tooltip({
placement: 'rigth',
title: 'Aprovar'
});
})

$(function() {
$('.recusado').tooltip({
placement: 'rigth',
title: 'Recusado'
});
})

$(function() {
$('.required-total').tooltip({
placement: 'rigth',
title: 'Total mudas'
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

function MessageAprovada()
{
var msg = 'Notícia Aprovada!';
showMessageToast(msg, 15000);
}

function MessageRecusada()
{
var msg = 'Notícia Recusada!';
showMessageToast(msg, 15000);
}

function alterar(){$("#modalPlanta").modal('show');}

function alterarUsuario(){$("#modalUsuario").modal('show');}


function alterarPerfil(){$("#modalPerfil").modal('show');}

function alterarPerfilUser(){$("#modalPerfilUser").modal('show');}

function alterarMutirao(){$("#modalMutirao").modal('show');}

function alterarMuda(){$("#modalMuda").modal('show');}

function alterarEspecie(){$("#modalEspecie").modal('show');}

function alterarDicas(){$("#modalDica").modal('show');}














