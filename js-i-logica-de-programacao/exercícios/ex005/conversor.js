// Solicitando um valor em metros ao usuário
const metros = prompt('Quantos metros você deseja converter?');

//Solicitando que o usuário escolha para qual unidade de medida deve-se converter
const unidadeMedida = prompt(
  'Selecione a unidade de medida para a conversão:\na) milímetro(mm)\nb) centímetro(cm)\nc) decímetro(dm)\nd) decâmetro\ne) hectômetro\nf) quilômetro(km)'
);

//Convertendo usando switch a partir da medida escolhida pelo usuário
switch (unidadeMedida) {
  case 'a':
    alert(metros + 'm convertidos em milímetros é = ' + metros * 1000 + 'mm'); //Exibe o resultado da conversão para milímetros
    break;
  case 'b':
    alert(metros + 'm convertidos em centímetros é = ' + metros * 100 + 'cm'); //Exibe o resultado da conversão para centímetros
    break;
  case 'c':
    alert(metros + 'm convertidos em decímetros é = ' + metros * 10 + 'dm'); //Exibe o resultado da conversão para decímetros
    break;
    break;
  case 'd':
    alert(metros + 'm convertidos em decâmetros é = ' + metros / 10 + 'dam'); //Exibe o resultado da conversão para decâmetros
    break;
  case 'e':
    alert(metros + 'm convertidos em hectômetros é = ' + metros / 100 + 'hm'); //Exibe o resultado da conversão para hectômetros
    break;
  case 'f':
    alert(metros + 'm convertidos em quilômetros é = ' + metros / 1000 + 'km'); //Exibe o resultado da conversão para quilômetros
    break;
  default:
    alert('Opção inválida!'); //Exibe uma mensagem de erro caso a opção selecionada pelo usuário seja inválida
}
