/** 5) Crie um programa que calcule bhaskara  */

function calcDelta(a, b, c){
  return b* b - 4 * a * c;
}

var a = 2;
var b = 4;
var c = 1;

var resultDelta = calcDelta(a, b, c);

if (resultDelta < 0) {
  console.log("Delta é negativo");
  return
}
function calcX1(a, b){
  return (-b + Math.sqrt(+resultDelta)) / (2 * a);
}

function calcX2(a, b){
  return (-b - Math.sqrt(+resultDelta)) / (2 * a);
}

console.log(" O resultado de X1 é " + calcX1(a,b), "E o do X2 é " + calcX2(a,b));
