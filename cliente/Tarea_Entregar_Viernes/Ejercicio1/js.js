
//Lo de ...numeros lo busque en internet para poder meter los valores que quieras por parametro a traves de un Array.
//pd:Era necesario ;)
function separaNumeros(...numeros) {
    const numerosEnteros = [];
    for (var i=0;i<numeros.length;i++) {
    //Si el nuemro es entero directamente lo añade.
      if (Number.isInteger(numeros[i])) {
        numerosEnteros.push(numeros[i]);
      } 
    //Si el numero es una cadena de texto lo transforma en un entero.
      else if (typeof numeros[i] == 'string' && !isNaN(numeros[i])) {
        const numero = parseInt(numeros[i]);
        numerosEnteros.push(numero);
      }
    //Si el numero es un decimal lo redondea al entero mas cercano.
      else if(typeof numeros[i]==='number'){
        const numero2 = Math.round(numeros[i]);
        numerosEnteros.push(numero2);
      }
    }
    return numerosEnteros;
  }
  
  var valores = separaNumeros(10, "20", "treinta", 40, 50.4, "60");
  console.log(valores);
  