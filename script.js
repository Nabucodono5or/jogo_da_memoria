(function() {
  var imagens = ['img/facebook.png', 'img/android.png', 'img/chrome.png', 'img/firefox.png', 'img/html5.png', 'img/googleplus.png', 'img/twitter.png', 'img/windows.png', 'img/cross.png'];
  var posicoesImagens = [];

/*
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                              funções auxiliares
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
*/

  function criarPrimeiroEstado() {
    $('#principal').append('<header id="titulo"><h1>Jogo da Memória</h1> </header>');
    $('#principal').append('<div id="botao" class="container"><button id="btnComecar" type="button" name="button">Começar novo jogo</button></div>');
    $('#principal').append('<div id="pacote" class="container"></div>');

    let i = j = 0;
    while (i < 8) {
      $('#pacote').append("<div id=" + j + "><img src=" + imagens[i] + "></div>");
      j++;
      $('#pacote').append("<div id=" + j + "><img src=" + imagens[i] + "></div>");
      i++;
      j++;
    }
  }

  function gerarRamdomValues() {
    let min = 0;
    let max = 7;

    return Math.round(Math.random() * (max - min) + min);
  }

  function gerarRamdomFotos(){
    for(let i = 0; i < 16; i++){
      do{
        posicoesImagens[i] = gerarRamdomValues();
      }while (repetido(posicoesImagens, i));
    }
    console.log(posicoesImagens);
  }

  function repetido(array, indice){
    let copia = 0;

    for(let j = 0; j < indice; j++){
      if(array[j] === array[indice]){
        copia++;
      }
    }

    if(copia > 1){
      return true;
    }else {
      return false;
    }
  }

  function segundoEstado() {
    for (let i = 0; i < 16; i++) {
      setarInterface(i, 8);
    }
  }

  // função  "mão para toda obra"
  function setarInterface(pos, nrImagem) {
    console.log("chamada a interface");
    let v = "#" + pos;
    $(v).children().attr('src', imagens[nrImagem]);
  }

  /*
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                criação de componente
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  */

  criarPrimeiroEstado();
  let c1 = app.getComponente('c1');

  c1.clickComecarJogo = function() {
    $('#btnComecar').click(function(){
      console.log("clicou o botao");
      segundoEstado();
      gerarRamdomFotos();
    });
  }

  c1.clickComecarJogo();
})();

//app.inicio();
