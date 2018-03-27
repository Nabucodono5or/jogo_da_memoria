(function (){
var imagens = ['img/facebook.png','img/android.png','img/chrome.png','img/firefox.png','img/html5.png','img/googleplus.png','img/twitter.png','img/windows.png','img/cross.png'];

function criarPrimeiroEstado(){
  $('#principal').append('<header id="titulo"><h1>Jogo da Memória</h1> </header>');
  $('#principal').append('<div id="botao" class="container"><button type="button" name="button">Começar novo jogo</button></div>');
  $('#principal').append('<div id="pacote" class="container"></div>');

  let i = j = 0;
  while (i < 8) {
    $('#pacote').append("<div id=" + j + "><img src="+imagens[i]+"></div>");
    j++;
    $('#pacote').append("<div id=" + j + "><img src="+imagens[i]+"></div>");
    i++;
    j++;
  }
}

  // função  "mão para toda obra"
  function setarInterface(pos, nrImagem){
    $("#" + pos).attr('src', imagens[nrImagem]);
  }

// criar interface será inserido em uma ação ready do jquery junto com a ação principal do Jogo
// que mudará quando houver ação de click
// parece que criarei um componente para cada click? ou deveria ser várias ações para um único Componente

criarPrimeiroEstado();

let c1 = app.getComponente('c1');

})();

//app.inicio();
