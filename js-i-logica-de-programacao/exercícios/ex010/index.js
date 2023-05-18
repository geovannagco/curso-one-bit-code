// Pedindo que o usuário informe um número
let numero = parseInt(
  prompt(
    'Olá, eu sou o Robô da Tabuada!\nInforme um número que você deseja calcular a tabuada: '
  )
);

let resultado = ''; // Variável para armazenar a tabuada

// for (inicialização; condição; expressão final)
for (let contador = 1; contador <= 20; contador++) {
  resultado +=
    ' -> ' + numero + ' x ' + contador + ' = ' + numero * contador + '\n'; // Calculando e concatenando a tabuada
  alert('Resultado da tabuada de ' + numero + ':\n\n' + resultado); // Exibindo a tabuada parcial
  // alert(numero + ' x ' + contador + ' = ' + numero * contador); // Imprimir a tabela de multiplicação
}
