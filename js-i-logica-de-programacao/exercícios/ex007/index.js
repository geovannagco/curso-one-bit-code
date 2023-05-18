// Cria a variável 'opcao' para o menu interativo
let opcao = '';

do {
  // Solicita ao usuário que escolha uma opção do menu
  opcao = prompt(
    'Seja bem-vindo (a)!\n Escolha uma das opções abaixo:' +
      '\n1. Opção (1)' +
      '\n2. Opção (2)' +
      '\n3. Opção (3)' +
      '\n4. Opção (4)' +
      '\n5. Encerrar (5)'
  );

  // Executa ações com base na opção escolhida
  switch (opcao) {
    case '1':
      alert('A opção escolhida foi a (1)');
      break;
    case '2':
      alert('A opção escolhida foi a (2)');
      break;
    case '3':
      alert('A opção escolhida foi a (3)');
      break;
    case '4':
      alert('A opção escolhida foi a (4)');
      break;
    case '5':
      alert('Encerrando...');
      break;
    default:
      alert('Opção Inválida');
  }
} while (opcao !== '5');
