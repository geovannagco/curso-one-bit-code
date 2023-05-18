// Cria a variável de saldo inicial
let saldoInicial = parseFloat(prompt('Informe o saldo inicial:'));

// Cria a variável opcao para verificar se o usuário deseja 'depositar' ou 'sacar' dinheiro ou sair
let opcao = '';

do {
  opcao = prompt(
    'Saldo disponível: R$ ' +
      saldoInicial +
      '\nSelecione uma opção:' +
      '\n1. Depositar (1)' +
      '\n2. Sacar (2)' +
      '\n3. Sair (3)'
  );

  switch (opcao) {
    case '1':
      saldoInicial += parseFloat(prompt('Informe o valor a ser depositado:'));
      break;
    case '2':
      saldoInicial -= parseFloat(prompt('Informe o valor a ser sacado:'));
      break;
    case '3':
      alert('Saindo...');
      break;
    default:
      alert('Opção inválida');
  }
} while (opcao !== '3');
