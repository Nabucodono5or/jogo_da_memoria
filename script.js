(function() {
  var imagens = ['img/facebook.png', 'img/android.png', 'img/chrome.png', 'img/firefox.png', 'img/html5.png', 'img/googleplus.png', 'img/twitter.png', 'img/windows.png', 'img/cross.png'];
  var posicoesImagens = [];
  var jogadas = 0;
  var inicio;
  var tabelaDeJogos = [];

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
      $('#pacote').append("<div class='imagem' id=" + j + "><img src=" + imagens[i] + "></div>");
      j++;
      $('#pacote').append("<div class='imagem' id=" + j + "><img src=" + imagens[i] + "></div>");
      i++;
      j++;
    }
  }

  // função  "mão para toda obra"
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

  /*
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                funções que geram as fotos
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  */

  function gerarRamdomValues() {
    let min = 0;
    let max = 7;

    return Math.round(Math.random() * (max - min) + min);
  }

  function gerarRamdomFotos() {
    for (let i = 0; i < 16; i++) {
      do {
        posicoesImagens[i] = gerarRamdomValues();
      } while (repetido(posicoesImagens, i));
    }
    console.log(posicoesImagens);
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

  function terceiroEstado() {
    for (let i = 0; i < 16; i++) {
      setarInterface(i, 8);
    }
  }

/*
function clickDois(numClick) {
  if (numClick == 2) {
    return true;
  }
  return false;
}

*/

  function exibirPosicoes() {
    stopClicks();
    for (let i = 0; i < 16; i++) {
      setarInterface(i, posicoesImagens[i]);
    }
  }

  function segundoEstado() {
    // exibir toda as imagens por um curto periodo de tempo
    exibirPosicoes();
    setTimeout(terceiroEstado, 2000);
  }

  /*
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                avalia condição do jogo
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  */

  /*
  function clickFigura() {
    let clicks = [];

    $('.imagem').on("click", function() {
      let id = $(this).attr('id');
      clicks.push(id);

      if (!clickDois(clicks.length)) {
        setarInterface(id, posicoesImagens[id]);

        console.log(id);
      } else {
        stopClicks();
        condicaoDoJogo(clicks);
        clicks = [];
      }
    })
  }

  */


  /*
  function condicaoDoJogo(clicks) {
    if (posicoesImagens[clicks[0]] === posicoesImagens[clicks[1]]) {
      reativaClicks();
      return;
    }

    setTimeout(retornarEstado(clicks[0], clicks[1]), 2000);
  }

  function figuraCorreta() {
    //clickFigura();
    reativaClicks();
  }

  function figuraErrada(clicks) {
    setTimeout(retornarEstado(clicks), 3000);
     // será que vai ser o suficiente?
  }

  function retornarEstado(primeiro, segundo) {
    setarInterface(primeiro, 8);
    setarInterface(segundo, 8);
    reativaClicks();
    //clickFigura();
  }

  */

  function condicaoDoJogo(num1, num2) {
    if (posicoesImagens[num1] == posicoesImagens[num2]) {
      fimDeJogo();
      reativaClicks();
    } else {
      setTimeout(function functionName() {
        stopClicks();
        setarInterface(num1, 8);
        setarInterface(num2, 8);
        reativaClicks();
      }, 2000);

    }
  }

  /*
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                condição de fim de jogo
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  */

  function fimDeJogo() {
    jogadas++;

    if(jogadas >= 8){
      let tempo = determinarTempo();
      alert("acabou o jogo em " + tempo + " segundos.");
      tabelaDeJogos.push(tempo);
      console.log(tabelaDeJogos);
      //jogadas = 0;
    }
  }

  function determinarTempo(){
    let millis = Date.now() - inicio;
    return Math.floor(millis/1000);
  }
  /*
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                criação de componente
  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  */

  criarPrimeiroEstado();
  let c1 = app.getComponente('c1');

  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx TESTE PARA CONSERTO DO BUG xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  c1.clickImagem = function() {
    let clicks = [];

    $('.imagem').on("click", function() {
      let id = $(this).attr('id');
      setarInterface(id, posicoesImagens[id]);

      if (id != clicks[0]) {
        clicks.push(id);
      }

      console.log(clicks);
      if (clicks.length == 2) {
        stopClicks();
        //setTimeout(condicaoDoJogo(clicks), 3000);
        condicaoDoJogo(clicks[0], clicks[1]);
        clicks = [];
      }
      /*
      if (clickDois(clicks.length)) {
        stopClicks();
        condicaoDoJogo(clicks);
        clicks = [];
      } else {
        console.log(id);
      }

      */
    })
  };

  c1.clickComecarJogo = function() {
    $('#btnComecar').on("click",function() {

      if(tabelaDeJogos.length == 0){
        c1.clickImagem();
      }

      jogadas = 0;
      inicio = Date.now();
      gerarRamdomFotos();
      segundoEstado();
      reativaClicks();
      //clickFigura();
    });
  }

  c1.clickComecarJogo();
})();

//app.inicio();
