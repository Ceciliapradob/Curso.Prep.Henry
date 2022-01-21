// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código: 
  return array [0]; 

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var ultimoElemento = array.length -1; 
  return array  [ultimoElemento]; 
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length; 
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código: 
  var nuevoArray =[]; 
  for (var i=0; i<array.length; i++){
    nuevoArray[i] = array[i] + 1; 
 }
 return nuevoArray; 
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array 
  // Tu código: 
  array [array.length] = elemento; 
  return array; 
} 


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift (elemento); 
  return array; 
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  return palabras.join (" "); 
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código: 
  for (var i=0; i<array.length; i++){
    if (array [i]=== elemento){
      return true; 
    }
  }
  return false; 
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código: 
  var suma= 0 
  for ( var i=0; i<numeros.length; i++){
    suma= suma+ numeros[i]; 
  } return suma; 
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma= 0 
  for (var i=0; i<resultadosTest.length; i++){
    suma= suma+ resultadosTest[i]; 
  }
  var prom= suma/i; 
  return prom; 
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código: 
  var mayor= numeros[0]; 
  for (var i=0; i<numeros.length; i++){
    if (numeros[i]>mayor){
      mayor= numeros [i] 
    }
 } 
 return mayor; 
}
//Otra forma de hacerlo: 
//return Math.max (...numeros); 
// }  // El metodo Math.max lo que hace es que retorna el num mas grande. 
//De esta forma ahorramos todo el codigo y lo realizamos con tan solo un metodo.  

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length===0){ //Usamos length para que recorra el array 
    //
    //y que se fije si no hay ningun argumento en ninguno de los elementos
    return 0; 
  }
  if (arguments.length===1){
    return 1;
  }
  var multiplica= 1; 
  for( var i=0; i<arguments.length; i++){
  multiplica= multiplica*arguments[i]; 
  }
  return multiplica; 
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador= 0; 
  for (var i=0; i<arreglo.length; i++){
    if (arreglo[i]>18){
      contador++ 
    }
  }
return contador; 
}
//revisar


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia===1 || numeroDeDia===7){ 
return "Es fin de semana"; 
  }
else return "Es dia Laboral"; 
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. 
  //Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  //[98] nueve [98, 97] = ["98", "97"]
  var cambio= n.toString(); 
  if(cambio[0]==="9"){ // convierte el caracter 9 lo trae a string en posicion 0. 
    return true;
} else return false; 
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
for (var i=0; i<arreglo.length-1; i++){
  if (arreglo [i] !== arreglo [i+1]){
    return false; 
  }
}
return true; 
}

// Otra forma de realizarlo: 
//for (var i=0; i<arreglo.length-2;  i++){
  //if (arreglo [i] !== arreglo [i+1]){
   // return false; 
  //}
 //} 
 //return true; 
//} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  //["Enero", "Abril", "Marzo", "Julio, "Noviembre"]

  var nuevoArray= []
  for (var i=0; i<array.length; i++){
    if (array[i]=== "Enero" || array[i]=== "Marzo" || array[i]=== "Noviembre"){
      nuevoArray.push (array[i]); 
    }
   }
  if (nuevoArray.length<3){   //if (nuevoArreglo.length=== 3){
// return nuevoArreglo;}     return "No se encontraron los meses pedidos"; 
return "No se encontraron los meses pedidos"
  }
    return nuevoArray; 
  }
  


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar 
  //en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var NewArray= []
  for (var i=0; i<array.length; i++){
    if (array[i]>100){
      NewArray.push (array [i]); 
    }
  }
  return NewArray; 
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código: 6 [8, 10, 12, 14, 16, 18, 20, 22, 24, 26]
  var array= []; 
  var sumanumeros= 0; 
  for (var i=0; i<10; i++){
    numero = numero + 2;
    array.push(numero) 
    sumanumeros= sumanumeros + 1; 

     if (sumanumeros === numero){
      break; //El statement break sale del bucle for y corta al medio la ejecucion. 
    }
 }
 if (sumanumeros < 10){  
 return "Se interrumpió la ejecución"
}
return array; 
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código: 
  var continua= []
  for (i =0; i<10; i++){
    if (i===5){
      continue; 
    } 
    else {
      numero = numero + 2; 
      continua.push (numero); 
    }
  }
  return continua; 
}  
  
 
// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
}