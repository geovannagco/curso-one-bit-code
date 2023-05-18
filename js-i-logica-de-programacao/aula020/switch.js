const resultado = prompt('Escolha uma alternativa:\na)\nb)\nc)'); // Solicita ao usuário que escolha uma alternativa e armazena na variável "resultado"

switch (resultado) {
  case 'a': // Se o resultado for 'a', exibe a mensagem correspondente
    alert('o resultado é "a"');
    break; // O comando "break" é utilizado para parar a execução do switch quando um caso é correspondido.
  case 'b': // Se o resultado for 'b', exibe a mensagem correspondente
    alert('o resultado é "b"');
    break; // O comando "break" é utilizado para parar a execução do switch quando um caso é correspondido.
  // Caso não haja o break, o código continuaria executando os casos abaixo
  case 'c': // Se o resultado for 'c', exibe a mensagem correspondente
    alert('o resultado é "c"');
    break;
  default: // Caso nenhuma das opções anteriores seja correspondida, executa o caso padrão
    alert('finalizando...'); // Exibe a mensagem de finalização
}
