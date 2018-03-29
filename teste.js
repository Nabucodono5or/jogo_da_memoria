(function(){
  var idsDescartadas = [];

  let num1 = 3;
  let num2 = 5;

  idsDescartadas.splice(0,0, num1, num2);

  console.log(idsDescartadas);
  idsDescartadas.splice(0,0, 10, 8);
  console.log(idsDescartadas);
  
})();
