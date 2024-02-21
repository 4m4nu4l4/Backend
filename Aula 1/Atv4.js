/** 4) Crie um programa que avalie se um valor é maior do que o dobro de outro valor  */

function verificarMaiorQueDobro(valor1, valor2) {
  return valor1 > (2 * valor2);
}

var valor1 = 10;
var valor2 = 5;

var resultado = verificarMaiorQueDobro(valor1, valor2);

if (resultado) {
  console.log(valor1 + " é maior do que o dobro de " + valor2);
} else {
  console.log(valor1 + " não é maior do que o dobro de " + valor2);
}
