// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código: 
  var arr= nombre.split("") //Metodo split separa las string
  arr[0]= arr[0].toUpperCase() //toUpperCase() agarra la posicion que se le 
  //indica y lo vuelve en mayuscula. En este caso la primera posicion. 
  return arr.join("") //Devuelve una cadena string. 

  //return nombre[0]. toUpperCase() + nombre.slice(1)
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb() 
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática 
  //como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código: 
  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var suma = 0
  for(var i=0; i<numeros.length; i++){
    suma = suma + numeros[i]
  } 
    cb(suma)
}
//Otra forma: 
// var suma= numeros.reduce(function (ac, ele)){
// return ac + ele 
//},0) 
// cb(suma) } 


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código: 
  return array.forEach(cb)

} 

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código: 
  var resultado = array.map(function(e){
    return cb(e)
  })
  return resultado;
}


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = []
  
  for(var i=0; i<array.length; i++){
    if (array[i][0] === "a" ){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray
  }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
