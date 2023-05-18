// Solicitar ao usuário que insira uma palavra
const palavra = prompt(
  'Olá, bem vindo (a) ao Programa Procurando Palíndromos!\n\n Informe a palavra a ser verificada:'
);

// Variável para armazenar a palavra invertida
// A variável é inicializada com uma string vazia
let palavraInvertida = '';

// Loop que itera pelos caracteres da palavra original, do último ao primeiro
for (let i = palavra.length - 1; i >= 0; i--) {
  // palavra.length - 1 representa o índice do último caractere da palavra
  palavraInvertida += palavra[i]; // Adicionar o caractere atual à palavra invertida
}

// Verificar se a palavra original é igual à palavra invertida
if (palavra === palavraInvertida) {
  alert(palavra + ' é um palíndromo!'); // Exibir mensagem informando que a palavra é um palíndromo
} else {
  alert(
    palavra + ' não é um palíndromo!\n\n' + palavra + ' !== ' + palavraInvertida
  ); // Exibir mensagem informando que a palavra não é um palíndromo, mostrando a palavra original e invertida
}
