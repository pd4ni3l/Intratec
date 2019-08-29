dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto", "setembro", "outubro", "novembro", "dezembro");
now = new Date
$(document).ready(function(){
if (monName [now.getMonth() ] == 'setembro') {
    // tema halloween
    $('#imgbanner').attr('src', 'images/natal-banner.png');
    $('#footbanner').attr('src', 'images/gato.png');
    document.body.style.backgroundColor = '#010f2c';
    document.body.style.color = '#000';
    $('#container').css('margin-top: 0', 'margin-right: auto', 'margin-bottom: 0', 'margin-left: auto', 'background-color: CE6826');
    }
})