/** 6) Crie um programa que calcule a velocidade média de uma viagem (distancia (km) / tempo (h)) */


function calcVelocidadeM(km, h) {
  return km / h;
}

var km = 34;
var h = 9;

var resultado = calcVelocidadeM(km, h);

if (resultado) {
  console.log("A velocidade média é" + resultado);
} else {
console.log("erro");
}
