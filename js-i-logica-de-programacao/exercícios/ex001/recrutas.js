const primeiroNome = prompt('Informe o primeiro nome do recruta:');
const sobrenome = prompt('Informe o sobrenome do recruta:');
const anoDeNascimento = prompt('Informe o ano de nascimento do recruta:');
const campoDeEstudo = prompt('Qual é o campo de estudo do recruta?');
// O navegador exibirar uma caixa para insereção dos dados

alert(
  'Recruta cadastrado com sucesso!\n ' + //string concatenada com a const primeiroNome + espaço
    // '\n' pula uma linha
    '\nNome Completo: ' +
    primeiroNome +
    ' ' +
    sobrenome + //const primeiroNome concatenada com espaço + const sobrenome
    ' ' +
    '\nCampo de Estudo: ' + //espaço concatenado com string
    ' ' +
    campoDeEstudo + //espaço concatenado com a const a const + campoDeEstudo
    ' ' +
    '\nIdade: ' + //espaço concatenado com string
    (2023 - anoDeNascimento) //cálculo da idade usando o ano base menos a const anoDeNascimento
); //o alert exibirá uma caixa no navegador com os dados armazenados nas constantes
