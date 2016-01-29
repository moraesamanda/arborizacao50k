$(document).ready(function () {
    oTable = $('table').not("#tabelaVersao").dataTable({
        "bPaginate": true,
        "bJQueryUI": true,
        "bLengthChange": false,
        "oLanguage": {
            "sProcessing": "Processando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "Nenhum registro encontrado",
            "sInfo": "Exibindo _START_ - _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Nenhum registro encontrado",
            "sInfoFiltered": "",
            "sInfoPostFix": "",
            "sSearch": " ",
            "sUrl": "",
            "oPaginate": {
                "sFirst": "Primeiro",
                "sPrevious": " ",
                "sNext": " ",
                "sLast": "Último"
            }
        }
    });
});