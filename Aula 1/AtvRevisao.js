// Função para calcular a média das notas
function calcularMedia(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

var Num1, Num2, Num3;

Num1 = prompt("Informe a primeira nota:");
Num1 = parseFloat(Num1); // Convertendo a string para um número

Num2 = prompt("Informe a segunda nota:");
Num2 = parseFloat(Num2); // Convertendo a string para um número

Num3 = prompt("Informe a terceira nota:");
Num3 = parseFloat(Num3); // Convertendo a string para um número

// Chamando a função para calcular a média e armazenando o resultado
var media = calcularMedia(Num1, Num2, Num3);

// Exibindo o resultado
console.log("A média das notas é: " + media);

