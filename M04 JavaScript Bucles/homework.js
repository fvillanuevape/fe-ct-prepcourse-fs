/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   let numeroMayor=0;
   if (x>y) {
      numeroMayor=x;
   }else if (x===y){
      numeroMayor=x;
   }else{
      numeroMayor=y;
   }
   return numeroMayor;
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   let mensaje="";
   if (edad>=18) {
      mensaje="Allowed";
   }else{
      mensaje="Not allowed";
   }
   return mensaje;
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   let estado="";
   switch (status) {
      case 1:
         estado="Online";
         break;
      case 2:
         estado="Away";
         break;
      default:
         estado="Offline"
         break;
   }
   return estado;
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   let saludo="";
   switch (idioma) {
      case "aleman":
         saludo="Guten Tag!";
         break;
      case "mandarin":
         saludo="Ni Hao!"
         break;
      case "ingles":
         saludo="Hello!";
         break;
      case undefined:
         saludo="Hola!";
      default:
         saludo="Hola!";
         break;
   }
   return saludo;
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   let mensaje="";
   switch (color) {
      case "blue":
         mensaje='This is blue';
         break;
      case "red":
         mensaje='This is red';
         break;
      case "green":
         mensaje='This is green';
         break;
      case "orange":
         mensaje='This is orange';
         break;
      default:
         mensaje="Color not found";
         break;
   }
   return mensaje;
}

function esDiezOCinco(num) {
   // Retornar "true" si "num" es 10 o 5.
   // De lo contrario, retornar "false".
   // Tu código:
   if (num===10 || num===5) {
      return true;
   } else {
      return false;
   }
}

function estaEnRango(num) {
   // Retornar "true" si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar "false".
   // Tu código:
   if (num>20 && num<50) {
      return true;
   } else {
      return false;
   }
}

function esEntero(num) {
   // Retornar "true" si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna "false".
   // Tu código:
   if (Number.isInteger(num)) {
      return true;
   }else{
      return false;
   }

}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   let mensaje="";
   if (num%3==0) {
      mensaje="fizz";
      if(num%5==0){
         mensaje="fizzbuzz";
      }
   }else if(num%5==0) {
      mensaje="buzz";
      if(num%3==0){
         mensaje="fizzbuzz";
      }
   }else{
      mensaje=false;
   }
   return mensaje;
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   let mensaje="";
   if (num1>num2 && num1>num3 && num1>0) {
      mensaje="Numero 1 es mayor y positivo";
   } else if(num1<0|| num2<0 || num3<0) {
      mensaje="Hay negativos";
   }else if(num3>num1 && num3>num2){
      mensaje= num3+1;
   }else if(num1==0 && num2==0 && num3==0){
      mensaje="Error";
   }else{
      mensaje=false;
   }
   return mensaje;
}

function esPrimo(num) {
   // Retornar True si "num" es primo.
   // De lo contrario retorna False.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   let cantidadFactores=0;
   let mensaje;
   if (num>1) {
      for (let i = 1; i <= num; i++) {
         if( num%i===0){
            cantidadFactores= cantidadFactores+1;
         } 
      }
      if (cantidadFactores==2) {
         mensaje=true;
      } else {
         mensaje=false;
      }
   } else {
      mensaje=false;
   }
   return mensaje;
   
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   let mensaje="";
   if (valor) {
      mensaje="Soy verdadero";
   }else{
     mensaje="Soy falso";
   }
   return mensaje;
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar True.
   // Caso contrario, retornar False.
   // Tu código:
   if (num.toString().length==3) {
      return true;
   } else {
      return false;
   }

}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   let contador =0;
   let sumarValor=num;
   do {
      sumarValor=sumarValor+5;
      contador= contador+1;
      
   } while (contador<8);

   return sumarValor;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
