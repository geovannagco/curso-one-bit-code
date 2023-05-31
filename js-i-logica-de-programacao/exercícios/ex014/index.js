// Inicialização da variável 'imoveis' com um array
const imoveis = [];
// Inicializaão da variável 'opcao'
let opcao = '';

// Menu Interativo
do {
  // Criar prompt para a variável 'opcao' para o menu
  opcao = prompt(
    'Seja bem-vindo(a) ao Programa Cadastro de Imóveis! \nNº de imóveis Cadastrados: ' +
      imoveis.length +
      '\n\nEscolha uma opção:\n[1] Cadastrar um imóvel\n[2] Listar imóveis\n[3] Sair'
  );

  // Criar switch...case para selecionar as opções
  switch (opcao) {
    case '1':
      const imovel = {};

      imovel.proprietario = prompt('Informe o nome do proprietário do imóvel:'); // Input proprietário
      imovel.quartos = parseFloat(prompt('Informe o número de quartos:')); // Input quartos
      imovel.banheiros = parseFloat(prompt('Informe o número de banheiros:')); // Input banheiros
      imovel.garagem = prompt('O imóvel possui garagem? (Sim/Não)'); // Input garagem

      // Confirmação de cadastro de imóvel
      const confirma = confirm(
        'Salvar este imóvel?\n' +
          '\nProprietário: ' +
          imovel.proprietario +
          '\nQuartos: ' +
          imovel.quartos +
          '\nBanheiros: ' +
          imovel.banheiros +
          '\nPossui Garagem? ' +
          imovel.garagem
      );

      // Push após a confirmação
      if (confirma) {
        imoveis.push(imovel);
      }
      break;
    case '2':
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          'Imóvel ' +
            (i + 1) +
            '\nProprietário: ' +
            imoveis[i].proprietario +
            '\nQuartos: ' +
            imoveis[i].quartos +
            '\nBanheiros: ' +
            imoveis[i].banheiros +
            '\nPossui Garagem? ' +
            imoveis[i].garagem
        );
      }
      break;
    case '3':
      alert('Encerrando...'); // Exibe um alerta informando que o programa está sendo encerrado
      break;
    default:
      alert('Opção inválida!');
      break;
  }
} while (opcao !== '3');
