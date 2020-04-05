$(document).ready(function(){
    $('#botonDenuncia').click(function(){
        $('#alertDenuncia').addClass('d-block');
        setTimeout(function(){
            $('#alertDenuncia').removeClass('d-block');
        }, 4000);
       
    });

    $('#crearFicha').click(function(){
        $('#alertFicha').toggleClass('d-block');
        setTimeout(function(){
            $('#alertFicha').toggleClass('d-block');
        }, 4000);
    });
    $('#crearFicha2').click(function(){
        $('#alertFicha').toggleClass('d-block');
        setTimeout(function(){
            $('#alertFicha').toggleClass('d-block');
        }, 4000);
    });

    $('.borrarDenuncia').click(function(){
        $('#alertDenuncia').toggleClass('d-block');
        setTimeout(function(){
            $('#alertDenuncia').toggleClass('d-block');
        }, 4000);
    });
    $('#btnDelitos').click(function(){
        $('#alertDelito').toggleClass('d-block');
        setTimeout(function(){
            $('#alertDelito').toggleClass('d-block');
        }, 4000);
    });
});