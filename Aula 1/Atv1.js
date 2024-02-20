function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

var nota1 = 7;
var nota2 = 8;
var nota3 = 6;

var media = calcularMedia(nota1, nota2, nota3);
console.log("A média das notas é: " + media);
