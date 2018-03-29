(function(){
  var imagens = ['img/facebook.png', 'img/android.png', 'img/chrome.png', 'img/firefox.png', 'img/html5.png', 'img/googleplus.png', 'img/twitter.png', 'img/windows.png', 'img/cross.png'];
  var posicoesImagens = [];
  var tabelaDeJogos = [];

  $(document).ready(function() {
    $('#principal').append('<header id="titulo"><h1>Jogo da Memória</h1> </header>');
    $('#principal').append('<div id="botao" class="container"><button id="btnComecar" type="button" name="button">Começar novo jogo</button></div>');
    $('#principal').append('<div id="pacote" class="container"></div>');

    let i = j = 0;
    while (i < 8) {
      $('#pacote').append("<div class='imagem' id=" + j + "><img src=" + imagens[i] + "></div>");
      j++;
      $('#pacote').append("<div class='imagem' id=" + j + "><img src=" + imagens[i] + "></div>");
      i++;
      j++;
    }
    c1.clickComecarJogo();
  });

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//                                funções reutilizáveis
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  function setarInterface(pos, nrImagem) {
    console.log("chamada a interface");
    let v = "#" + pos;
    $(v).children().attr('src', imagens[nrImagem]);
  }

  function stopClicks() {
    $('.imagem').css("pointer-events", "none");
  }

  function reativaClicks() {
    $('.imagem').css("pointer-events", "auto");
  }

  function repetido(array, indice) {
    let copia = 0;

    for (let j = 0; j < indice; j++) {
      if (array[j] === array[indice]) {
        copia++;
      }
    }

    if (copia > 1) {
      return true;
    } else {
      return false;
    }
  }

  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  //                       função do click de inicio de jogo
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  let c1 = app.getComponente('c1');

  c1.clickComecarJogo = function() {
    $('#btnComecar').on("click", function() {

      if (tabelaDeJogos.length == 0) {
        //c1.clickImagem();
      }

      for (let i = 0; i < 16; i++) {
        do {
          posicoesImagens[i] = Math.round(Math.random() * (7 - 0) + 0); //alterar isso
        } while (repetido(posicoesImagens, i));
        stopClicks();
        setarInterface(i, posicoesImagens[i]);
      }
      // exibePosições
      setTimeout(function() {
        for (let i = 0; i < 16; i++) {
          setarInterface(i, 8);
        }
      }, 3000);
      reativaClicks();
    });
  }

})();
