dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto", "setembro", "outubro", "novembro", "dezembro");
now = new Date
$(document).ready(function(){
if (monName [now.getMonth() ] == 'setembro') {
    // tema halloween
    $('<link>')
    .appendTo('head')
    .attr({
      type: 'text/css', 
      rel: 'stylesheet',
      href: 'stylesheets/halloween.css'
    });
    $('#imgbanner').attr('src', 'images/banner.jpg');
    // Localizar Elemento footer
    var secaoFooter = document.getElementById('footer')
    // Criar o Elemento div
    var divi = document.createElement('div')
    // Insere Classe na DIV criada
    divi.className += "gato"
    // Criar Elemento image
    var criaImg = document.createElement('img')
    // Atribuir src a img
    criaImg.src = 'images/gato.png'
    // Fechar DIV e IMG
    divi.prepend(criaImg)
    // Fechar DIV
    secaoFooter.prepend(divi)
    }
else{
  $('<link>')
    .appendTo('head')
    .attr({
      type: 'text/css', 
      rel: 'stylesheet',
      href: 'stylesheets/style-base.css'
    });
    $('#imgbanner').attr('src', 'images/banner-site.jpg');
    $('#footbanner').attr('src', 'images/gato.png');
    document.body.style.backgroundColor = '#010f2c';
    document.body.style.color = '#000';
    $('#container').css('margin-top: 0', 'margin-right: auto', 'margin-bottom: 0', 'margin-left: auto', 'background-color: CE6826');
    }
});