/*creación de la ventana emergente para el usuario; pide el serial como string*/
var creditNum = prompt("Ingrese el serial de Tarjeta de Credito");
function isValidCard() {
/*separa los numeros en arrays*/
var creditNumSplit = creditNum.split("");
/*array que contiene los elementos para la iteración*/
var credArr = [];
/*itera en cada elemento del serial y los ordena al revés dentro del array*/
for ( var i = 0; i <= creditNumSplit.length; i--) {
/*toma el indice [i] de creditNumSplit y lo coloca al inicio del credArr*/
    credArr.push(parseInt(creditNumSplit[i]));
//variable que guarda los números que están en indices pares
var serialParNum = [];
//variable con los números de la tarjeta invertidos
var invertSerial = "";
//for que recorre el larfo del serial ya invertido
for (var i = 0; i <= credArr.length; i++) {
  serialParNum.push(credArr[i]);
}
//acá intentaba armar mi idea de solo hacer operaciones matemáticas con los número con indice par.
invertSerial = serialParNum.reverse();
if (invertSerial.n%2 ===0){

}
}
 console.log(invertSerial);
}
