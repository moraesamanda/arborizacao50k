jQuery(function($) {
    
    $("input[name='telefone']")
            .mask("(99)9999-9999?9")
            .focusout(function (event) {
                var target, phone, element;  
                target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
                phone = target.value.replace(/\D/g, '');
                element = $(target);  
                element.unmask();  
                if(phone.length > 10) {  
                    element.mask("(99) 99999-999?9");  
                } else {  
                    element.mask("(99) 9999-9999?9");  
                }  
            });
    
    $("input[name='fax']")
            .mask("(99)9999-9999?9")
            .focusout(function (event) {
                var target, phone, element;  
                target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
                phone = target.value.replace(/\D/g, '');
                element = $(target);  
                element.unmask();  
                if(phone.length > 10) {  
                    element.mask("(99) 99999-999?9");  
                } else {  
                    element.mask("(99) 9999-9999?9");  
                }  
            });
           
    $("input[name='CEP']").mask("99999-999");
    $("input[name='cnpj']").mask("99.999.999/9999-99");
    $("input[name='inscricao']").mask("999.999.999.999");
    $("input[name='cpf']").mask("999.999.999-99");
    $("input[name='rg'").mask('99.999.999-9');
    $("input[type='datetime'").mask('99/99/9999');
});