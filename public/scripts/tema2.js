dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto", "setembro", "outubro", "novembro", "dezembro");
now = new Date
$(document).ready(function(){
// HALLOWEEN
if (monName [now.getMonth() ] == 'outubro') {
    // tema halloween
    $('<link>')
    .appendTo('head')
    .attr({
      type: 'text/css', 
      rel: 'stylesheet',
      href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'
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
    $('<link>')
      .appendTo('footer')
      .attr({
        type: 'text/css', 
        rel: 'stylesheet',
        href: 'stylesheets/halloween.css'
      });
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
      href: 'https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css'
    });
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
    $('#container').css('margin-top: 0', 'margin-right: auto', 'margin-bottom: 0', 
                        'margin-left: auto', 'background-color: CE6826', 'max-with: 960');
    $('#banner').attr('float', 'left');
    }
// CARNAVAL
if (monName [now.getMonth() ] == 'fevereiro') {
      // tema halloween
      $('<link>')
      .appendTo('head')
      .attr({
        type: 'text/css', 
        rel: 'stylesheet',
      href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
      });
      //$('#imgbanner').attr({'src':'images/banner_carnaval-2.jpg', 'width':'1260px', 'height':'200px'});
      $('#imgbanner').attr({'src':'images/banner_carnaval-2.jpg'});
      // get Elemento footer
      var secaoFooter = document.getElementById('footer')
      // Criar o Elemento div
      var divi = document.createElement('div')
      // Insere Classe na DIV criada
      divi.className += "carnaval"
      // Criar Elemento image
      var criaImg = document.createElement('img')
      // Atribuir src a img
      //criaImg.src = 'images/banner_carnaval-1.jpg'
      //criaImg.width = '960'
      //criaImg.height = '227'
      $('<link>')
        .appendTo('footer')
        .attr({
          type: 'text/css', 
          rel: 'stylesheet',
          href: 'stylesheets/carnaval2.css'
        });
        $('<link>')
          .appendTo('footer')
          .attr({
          type: 'text/css',
          rel: 'stylesheet',
          href: 'stylesheets/base2.css'
      });
      // Fechar DIV e IMG
      divi.prepend(criaImg)
      // Fechar DIV
      secaoFooter.prepend(divi)
      }
else{ // Tema padrão
    $('<link>')
      .appendTo('head')
      .attr({
        type: 'text/css', 
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
      });
    $('<link>')
      .appendTo('head')
      .attr({
        type: 'text/css', 
        rel: 'stylesheet',
        href: 'stylesheets/base2.css'
      });
      $('#imgbanner').attr('src', 'images/banner-site.jpg');
      $('#footbanner').attr('src', 'images/gato.png');
      document.body.style.backgroundColor = '#010f2c';
      document.body.style.color = '#000';
      $('#container').css('margin-top: 0', 'margin-right: auto', 'margin-bottom: 0', 
                          'margin-left: auto', 'background-color: CE6826', 'max-with: 960');
      $('#banner').attr('float', 'left');
      }   
      
// Dia internacional da mulher 
if (monName [now.getMonth() ] == 'março0') {
  // tema dia internacional da mulher
  $('<link>')
    .appendTo('head')
    .attr({
      type: 'text/css',
      rel: 'stylesheet',
      href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
    });
  //$('#imgbanner').attr({'src':'images/banner_carnaval-2.jpg', 'width':'1260px', 'height':'200px'});
  $('#imgbanner').attr({ 'src': 'images/banner_mulher-3.png', 'width':'960px', 'height':'300px' });
  // get Elemento footer
  var secaoFooter = document.getElementById('footer')
  // Criar o Elemento div
  var divi = document.createElement('div')
  // Insere Classe na DIV criada
  divi.className += "marco"
  // Criar Elemento image
  var criaImg = document.createElement('img')
  // Atribuir src a img
  //criaImg.src = 'images/banner_carnaval-1.jpg'
  //criaImg.width = '960'
  //criaImg.height = '227'
  $('<link>')
    .appendTo('footer')
    .attr({
      type: 'text/css',
      rel: 'stylesheet',
      href: 'stylesheets/marco2.css'
    });
  $('<link>')
    .appendTo('footer')
    .attr({
      type: 'text/css',
      rel: 'stylesheet',
      href: 'stylesheets/base2.css'
    });
  // Fechar DIV e IMG
  divi.prepend(criaImg)
  // Fechar DIV
  secaoFooter.prepend(divi)
}
else{ // Tema padrão
  $('<link>')
    .appendTo('head')
    .attr({
      type: 'text/css',
      rel: 'stylesheet',
      href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
    });
  $('<link>')
    .appendTo('head')
    .attr({
      type: 'text/css',
      rel: 'stylesheet',
      href: 'stylesheets/base2.css'
    });
  $('#imgbanner').attr('src', 'images/banner-site.jpg');
  $('#footbanner').attr('src', 'images/gato.png');
  document.body.style.backgroundColor = '#010f2c';
  document.body.style.color = '#000';
  $('#container').css('margin-top: 0', 'margin-right: auto', 'margin-bottom: 0',
    'margin-left: auto', 'background-color: CE6826', 'max-with: 960');
  $('#banner').attr('float', 'left');
}


// CUSTOMIZA INTERFACE
document.cookie = "username=John Doe";


});