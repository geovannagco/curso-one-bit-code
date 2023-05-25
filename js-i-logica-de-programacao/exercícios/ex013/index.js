let baralho = [];
let opcao = '';

do {
  opcao = prompt(
    'Cartas no baralho: ' +
      baralho.length +
      '\n[1] Adicionar uma carta\n[2] Puxar uma carta\n[3] Sair'
  );

  switch (opcao) {
    case '1':
      let novaCarta = prompt('Qual é a carta?');
      baralho.push(novaCarta);
      break;
    case '2':
      let cartaPuxada = baralho.pop();
      if (!cartaPuxada) {
        alert('Não há nenhuma carta no baralho!');
      } else {
        alert('Você puxou um(a) ' + cartaPuxada);
      }
      break;
    case '3':
      alert('Encerrando...');
      break;
    default:
      alert('Opção inválida!');
  }
} while (opcao !== '3');
