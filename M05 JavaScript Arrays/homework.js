/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length-1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var nuevoArray= array.map((elemento)=>{  return elemento+1;});
   return nuevoArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let miArray= array;
   miArray.push(elemento);
   console.log(miArray);

   return miArray;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   let miArray= array;
   miArray.unshift(elemento);
   return miArray;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let frase = palabras.join(' ');
   return frase;

}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
   let estado=false;
   for (let i = 0; i < array.length; i++) {
      if (array[i]===elemento) {
         estado = true;
      }
      
   }
   return estado;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma=0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      suma = arrayOfNums[i]+ suma;
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let sumaNota=0;
   let promedio=0;
   for (let i = 0; i < resultadosTest.length; i++) {
      sumaNota = resultadosTest[i]+sumaNota;
   }
   promedio = sumaNota/resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numerMayor=0;
   for (let i = 0; i < arrayOfNums.length; i++) {
      if (arrayOfNums[i]>numerMayor) {
         numerMayor= arrayOfNums[i];
      }
   }
   return numerMayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let producto=1;
   if (arguments.length>0) {
      for (let i = 0; i < arguments.length; i++) {
         producto = producto*arguments[i];
      }
   } else {
      producto=0;
   }
   return producto;

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cantidadElementos=0;
   for (let i = 0; i < array.length; i++) {
      if (array[i]>18) {
         cantidadElementos= cantidadElementos+1;
      }
   }
   return cantidadElementos;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   let mensaje="";
   if ( numeroDeDia ===1 || numeroDeDia===7) {
      mensaje="Es fin de semana"
   }else{
      mensaje="Es dia laboral";
   }
   return mensaje;
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let estado=false;
   let datos=num.toString().split('');

   if (parseInt(datos[0])===9) {
      estado=true;
   }
   return estado;

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   let estado=false;
   let elemento=array[0];
   for (let i = 0; i < array.length; i++) {
      if (elemento===array[i]) {
         elemento=array[i];
         estado=true;
      }else{
         estado=false;
      }
   }
   return estado;

}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let meses=[];
   for (let i = 0; i < array.length; i++) {
      if (array[i]==='Enero') {
         meses.push(array[i]);
      }else if(array[i]==="Marzo"){
         meses.push(array[i]);
      }else if(array[i]==="Noviembre"){
         meses.push(array[i]);
      }
   }
   if (meses.length===3) {
      return meses;
   }else{
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tablaMultiplicar =[];
   for (let i = 0; i <= 10; i++) {
      tablaMultiplicar[i]=6*i;
   }
   return tablaMultiplicar;
   
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let valoresMayores=[];
   let posicion=0;
   for (let i = 0; i < array.length; i++) {
      if (array[i]>100) {
         valoresMayores[posicion]=array[i];
         posicion= posicion+1;
      }
   }
   return valoresMayores;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let valor =num;
   let valorIncrementado=[];
   let interrumpir=false;
   let mensaje="Se interrumpió la ejecución";
   incremento:
   for (let i = 0; i < 10; i++) {
      valor=valor+2;
      if (valor===i) {
         interrumpir = true;
         break incremento;
      }else{
         valorIncrementado[i]= valor; 
      }
   }
   if ( interrumpir ===true) {
      return mensaje;
   }else{
      return valorIncrementado;
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let valor =num;
   let incrementoNums=[];
   let indice=0;
   for (let i = 1; i <= 10; i++) {
      if (i===5) {
         continue;
      }
      valor= valor+2;
      incrementoNums[indice]=valor;
      indice= indice+1;
   }
   return incrementoNums;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
