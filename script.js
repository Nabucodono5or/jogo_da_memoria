(function() {
  var imagens = ['img/facebook.png', 'img/android.png', 'img/chrome.png', 'img/firefox.png', 'img/html5.png', 'img/googleplus.png', 'img/twitter.png', 'img/windows.png', 'img/cross.png'];
  var posicoesImagens = [];
  var tabelaDeJogos = [];
  var idsDescartadas = [];
  var jogadas = 0;
  var inicio;

  $(document).ready(function() {
    $('#principal').append('<header id="titulo"><h1>Jogo da Memória</h1> </header>');
    $('#principal').append('<div id="botao" class="container"><button id="btnComecar" type="button" name="button">Começar novo jogo</button></div><div id="pacote" class="container"></div>');

    let i = j = 0;
    while (i < 8) {
      $('#pacote').append("<div class='imagem' id=" + j + "><img src=" + imagens[i] + "></div>");
      j++;
      $('#pacote').append("<div class='imagem' id=" + j + "><img src=" + imagens[i] + "></div>");
      i++; j++;
    }

    $('#principal').append('<div class="container"><button id="btnExibirTabelaResultado" type="button" name="button" onclick="app.c1.ClickTabelaDeJogos()">Exibir tabela de resultados</button></div><div id="rodape"></div>');
    c1.clickComecarJogo();
  });

  function setarInterface(pos, nrImagem) {
    console.log("chamada a interface");
    let v = "#" + pos;
    $(v).children().attr('src', imagens[nrImagem]);
  }

  function stopClicks() {  $('.imagem').css("pointer-events", "none"); }

  function reativaClicks() {  $('.imagem').css("pointer-events", "auto"); }

  function repetido(array, indice) {
    let copia = 0;

    for (let j = 0; j < indice; j++) {
      if (array[j] === array[indice]) {
        copia++;
      }
    }

    if (copia > 1) { return true; } else { return false; }
  }

  let c1 = app.getComponente('c1');

  function condicaoDoJogo(num1, num2) {
    if (posicoesImagens[num1] == posicoesImagens[num2]) {
      idsDescartadas.splice(0, 0, num1, num2);
      jogadas++

      if (jogadas >= 8) {
        let tempo = Math.floor((Date.now() - inicio) / 1000);
        alert("acabou o jogo em " + tempo + " segundos.");
        tabelaDeJogos.push(tempo);
      }

      reativaClicks();
    } else {
      setTimeout(function() {
        setarInterface(num1, 8);
        setarInterface(num2, 8);
        reativaClicks();
      }, 1500);
    }
  }

  c1.clickImagem = function() {
    let clicks = [];

    $('.imagem').on("click", function() {
      let id = $(this).attr('id');

      if (!idsDescartadas.includes(id)) {
        setarInterface(id, posicoesImagens[id]);

        if (id != clicks[0]) {
          clicks.push(id);
        }

        if (clicks.length == 2) {
          stopClicks();
          condicaoDoJogo(clicks[0], clicks[1]);
          clicks = [];
        }
      }
    });
  };

  c1.ClickTabelaDeJogos = function() {
    if (tabelaDeJogos.length > 0) {
      for (let i = 0; i < tabelaDeJogos.length; i++) {
        $('#rodape').append("<p class='jogos'> Jogo " + (i + 1) + " : " + tabelaDeJogos[i] + " segundos" + "</p><br>");
      }
    }
  }

  c1.clickComecarJogo = function() {
    $('#btnComecar').on("click", function() {
      if (tabelaDeJogos.length == 0) {
        c1.clickImagem();
      }

      $('.jogos').remove();
      idsDescartadas = [];
      jogadas = 0;
      inicio = Date.now();

      for (let i = 0; i < 16; i++) {
        do {
          posicoesImagens[i] = Math.round(Math.random() * (7 - 0) + 0);
        } while (repetido(posicoesImagens, i));
        stopClicks();
        setarInterface(i, posicoesImagens[i]);
      }

      setTimeout(function() {
        for (let i = 0; i < 16; i++) {
          setarInterface(i, 8);
        }
      }, 3000);
      reativaClicks();
    });
  }
})();
//app.inicio();
