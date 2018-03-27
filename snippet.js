(function(){
  var imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];
  var posicoesImagens = [];

  function criarInterface(){
    $('#principal').append('<header id="titulo"><h1>Jogo da Memória</h1> </header>');
    $('#principal').append('<div id="botao" class="container"><button type="button" name="button">Começar novo jogo</button></div>');
    $('#principal').append('<div id="pacote" class="container"></div>');
    for(let i = 0; i < 16; i++){
      $('#pacote').append("<div id=" + i + "><img src=''></div>");
      //$('#pacote').append("<div id=" + (i++) + "><img src="+imagens[i]+"></div>");
    }
  }

  criarInterface();

  function gerarRamdomValues() {
    let min = 0;
    let max = 7;

    return Math.round(Math.random() * (max - min) + min);
  }

  let c1 = app.getComponente('c1');

  function gerarRamdomFotos(){
    for(let i = 0; i < 16; i++){
      do{
        posicoesImagens[i] = gerarRamdomValues();
      }while (repetido());
    }
  }

  function repetido(array, indice){
    let copia = 0;
    for(let j = 0; j < array.length; x++){
      if(array[indice] === array[j]){
        copia++;
      }
    }
    if(copia > 2){
      return true;
    }else {
      return false;
    }
  }

})();
