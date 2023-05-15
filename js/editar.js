//VALIDACION CON JQUERY

$(function(){
    $("#formulario").validate({
        rules:{
            nombre:{
                required: true,
                minlength:3,
                maxlength:40
            },
            precio:{
                required: true,
                minlength:4,
                maxlength:8

            },
            cantidad:{
                required: true,
                minlength:1,
                maxlength:6
            },
            proveedor:{
                required: true,
                minlength:3,
                maxlength:40
            },
            url:{
                required: true,
                
            }
        },
        messages:{

            nombre:{
                required: "Debe ingresar un nombre",
                minlength:"El largo minimo es 3",
                maxlength: "El largo maximo es 40"
            },
            precio:{
                required: "Debe ingresar un precio",
                minlength:"El largo minimo es 4",
                maxlength:"El largo maximo es 8"
            },
            cantidad:{
                required: "Debe ingresar una cantidad",
                minlength:"El largo minimo es 1",
                maxlength:"El largo maximo es 6"
            },
            proveedor:{
                required: "Debe ingresar un proveedor",
                minlength:"El largo minimo es 3",
                maxlength:"El largo maximo es 40"
            },
            url:{
                required: "Debe ingresar URL",
                
            }
        }
    })
})



var bot= document.getElementById('cancelar')
var bot2= document.getElementById('retro')
bot.addEventListener("click", limpiar);
function limpiar(){
    formulario.reset();

}
bot2.addEventListener("click", cancel);
function cancel(){
    location.href='prod-agregar.html';
}
formulario.addEventListener('submit', (e) => { 
    e.preventDefault();
    })