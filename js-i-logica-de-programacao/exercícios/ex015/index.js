// 1º Passo: Criando as funções correspondentes aos cálculos das áreas
// Function Triangulo: Calcula a área de um triângulo
function calcularTriangulo() {
  let base = parseFloat(prompt('Informe a base do triângulo: '));
  let altura = parseFloat(prompt('Informe a altura do triângulo: '));

  if (isNaN(base) || isNaN(altura)) {
    return 'Valores inválidos. Tente novamente.';
  } // Verifica se os valores inseridos são números

  return (base * altura) / 2; // Fórmula da área do triângulo: (base * altura) / 2
}

// Function Retângulo: Calcula a área de um retângulo
function calcularRetangulo() {
  let base = parseFloat(prompt('Informe a base do retâgulo: '));
  let altura = parseFloat(prompt('Informe a altura do retângulo:'));

  if (isNaN(base) || isNaN(altura)) {
    return 'Valores inválidos. Tente novamente.';
  } // Verifica se os valores inseridos são números

  return base * altura; // Fórmula da área do retângulo: base * altura
}

// Function Quadrado: Calcula a área de um quadrado
function calcularQuadrado() {
  let lado = parseFloat(prompt('Informe o lado do quadrado: '));

  if (isNaN(lado)) {
    return 'Valore inválido. Tente novamente.';
  } // Verifica se os valores inseridos são números

  return lado * lado; // Fórmula da área do quadrado: lado * lado
}

// Function Trapézio: Calcula a área de um trapézio
function calcularTrapezio() {
  let baseMaior = parseFloat(prompt('Informe a base maior do trapézio: '));
  let baseMenor = parseFloat(prompt('Informe a base menor do trapézio: '));
  let altura = parseFloat(prompt('Informe a altura do trapézio: '));

  if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
    return 'Valores inválidos. Tente novamente.';
  } // Verifica se os valores inseridos são números

  return ((baseMaior + baseMenor) * altura) / 2; // Fórmula da área do trapézio: ((baseMaior + baseMenor) * altura) / 2
}

// Function Círculo: Calcula a área de um círculo
function calcularCirculo() {
  let raio = parseFloat(prompt('Informe o raio do círculo: '));

  if (isNaN(raio)) {
    return 'Valor inválido. Tente novamente.';
  } // Verifica se os valores inseridos são números

  let pi = 3.14;

  return pi * (raio * raio); // Fórmula da área do círculo: pi * (raio * raio)
}

// Function Menu: Exibe o menu e retorna a opção selecionada
function exibirMenu() {
  return prompt(
    'Seja Bem-vindo ao Programa Calculadora Geométrica!\n Para continuar, selecione uma das opções:\n' +
      '[1] Calcular área do triângulo\n' +
      '[2] Calcular a área do retângulo\n' +
      '[3] Calcular a área do quadrado\n' +
      '[4] Calcular a área do trapézio\n' +
      '[5] Calcular a área do círculo\n' +
      '[6] Sair\n'
  );
}

// Function que executará o programa
function executar() {
  // Inicializando a 'opcao'
  let opcao = '';

  do {
    opcao = exibirMenu();
    let resultado;

    switch (opcao) {
      case '1':
        resultado = calcularTriangulo();
        break;
      case '2':
        resultado = calcularRetangulo();
        break;
      case '3':
        resultado = calcularQuadrado();
        break;
      case '4':
        resultado = calcularTrapezio();
        break;
      case '5':
        resultado = calcularCirculo();
        break;
      case '6':
        alert('Encerrando...');
        break;
      default:
        alert('Opção Inválida!');
        break;
    }
    if (resultado) {
      if (confirm('Deseja exibir o resultado?')) {
        alert('Resultado: ' + resultado);
      }
    }
  } while (opcao !== '6');
}

executar();
