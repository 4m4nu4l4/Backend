/** 3) Crie um programa que calcule o volume (largura * altura * profundidade)  */

function calcularVol(larg, alt, prof) {
  return (larg * alt * prof) ;
}

var larg = 8;
var alt = 22;
var prof = 13;

var Volume = calcularVol(larg, alt, prof);
console.log("O volume é " + Volume);
