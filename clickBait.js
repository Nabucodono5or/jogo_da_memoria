(function(){
  var imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];
  var posicoesImagens = [];

  function criarInterface(){
    $('#principal').append('<header id="titulo"><h1>Jogo da Memória</h1> </header>');
    $('#principal').append('<div id="botao" class="container"><button id="start" type="button" name="button">Começar novo jogo</button></div>');
    $('#principal').append('<div id="pacote" class="container"></div>');
    for(let i = 0; i < 16; i++){
      $('#pacote').append("<div class='imagem' id=" + i + "><img src='img/cross.png'></div>");
      //$('#pacote').append("<div id=" + (i++) + "><img src="+imagens[i]+"></div>");
    }
  }

  criarInterface();
  clickFigura();

  function clickDois(numClick){
    if(numClick >= 3){
      return true;
    }
    return false;
  }


  let c1 = app.getComponente('c1');

  function clickFigura(){
    let clicks = 0;

    $('.imagem').click(function(){
      let id = $(this).attr('id');
      clicks++;

      if(!clickDois(clicks)){
        console.log(id);
      }else{
        $('.imagem').off('click');
        // apergunta é como reabilitar o onclick sem ser
        // de forma recursiva.
      }
    })
  }

})();
