/** 6) Crie um programa que calcule a velocidade média de uma viagem (distancia (km) / tempo (h)) */


function calcVelocidadeM(km, h) {
  return km / h;
}

var valor1 = 10;
var valor2 = 5;

var resultado = verificarMaiorQueDobro(valor1, valor2);

if (resultado) {
  console.log(valor1 + " é maior do que o dobro de " + valor2);
} else {
  console.log(valor1 + " não é maior do que o dobro de " + valor2);
}
