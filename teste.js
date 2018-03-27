(function(){
  var posicoesImagens = [];

  function gerarRamdomValues() {
    let min = 0;
    let max = 7;

    return Math.round(Math.random() * (max - min) + min);
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

  function gerarRamdomFotos(){
    for(let i = 0; i < 16; i++){
      do {
        posicoesImagens[i] = gerarRamdomValues();
      } while (repetido(posicoesImagens, i));
    }
    console.log(posicoesImagens);
  }

  gerarRamdomFotos();
})();
