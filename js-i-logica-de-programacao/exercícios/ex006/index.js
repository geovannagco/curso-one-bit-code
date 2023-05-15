// perguntado o nome do turista
let turista = prompt('Informe o seu nome:');

// perguntando se o turista já visitou alguma cidade
let visitouCidade = prompt('Informe se já visitou alguma cidade: (sim/não)');

// criando um variável para armazenar as cidades visitas
let cidades = ''; // começando vazia

// criando uma variável para realizar a contagem das cidades visitadas
let contagem = 0; // começando em zero

// criando o loop while
while (visitouCidade == 'sim') {
  let cidadeVisitada = prompt('Qual o nome da cidade visitada?');
  // concatenando  a variável cidades com a resposta do usuário
  // cidades = cidades + cidadeVisitada
  cidades += ' - ' + cidadeVisitada + '\n';
  // realizando a contagem
  contagem++;
  // perguntando se visitou alguma outra cidade
  visitouCidade = prompt('Você visitou alguma outra cidade? (sim/não)');
}

// exibindo as informações
alert(
  'Turista: ' +
    turista +
    '\nNº de cidades visitadas: ' +
    contagem +
    '\nLista de cidades visitadas:\n' +
    cidades
);
