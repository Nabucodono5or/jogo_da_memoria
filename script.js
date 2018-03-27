(function() {
  var imagens = ['img/facebook.png', 'img/android.png', 'img/chrome.png', 'img/firefox.png', 'img/html5.png', 'img/googleplus.png', 'img/twitter.png', 'img/windows.png', 'img/cross.png'];

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

  criarPrimeiroEstado();
  let c1 = app.getComponente('c1');

  c1.clickComecarJogo = function() {
    $('#btnComecar').click(function(){
      console.log("clicou o botao");
      segundoEstado();
    });
  }

  c1.clickComecarJogo();
})();

//app.inicio();
