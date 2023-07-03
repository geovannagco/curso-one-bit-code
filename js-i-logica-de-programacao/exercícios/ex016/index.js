const vagas = []; // Declara um array vazio para armazenar as vagas

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    // Declaração de uma variável chamada 'vagasEmTexto'
    // O método reduce é aplicado ao array 'vagas' para iterar por cada elemento e reduzi-los a um único valor, nesse caso, uma strinf que representa as vagas.
    // A função passada para o 'reduce' recebe três argumentos:
    // 1º 'textoFinal', que acumula o texto resultante;
    // 2º 'vaga', que é o elemento atual do array;
    // 3º 'indice', que representa o índice atual do elemento no array
    textoFinal += indice + '. '; // Adiciona o índice da vaga no texto
    textoFinal += vaga.nome; // Adiciona o nome da vaga no texto
    textoFinal += ' (' + vaga.candidatos.lenght + ' candidatos)\n'; // Adiciona o número de candidatos no texto
    return textoFinal;
  }, ''); // Inicializa o texto final como uma string vazia

  alert(vagasEmTexto); // Exibe um alerta com as informações das vagas
} // Output Exemplo:
// 0. Desenvolvedor Full Stack (3 candidatos)
// 1. Designer UI/UX (2 candidatos)

function novaVaga() {
  const nome = prompt('Informe o nome da vaga:'); // Solicita ao usuário que informe o nome da vaga por meio de um prompt e armazena o valor na variável 'nome'
  const descricao = prompt('Informe a descrição da vaga:'); // Solicita ao usuário que informe a descrição da vaga por meio de um prompt e armazena o valor na variável 'descricao'
  const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa) para a vaga'); // Solicita ao usuário que informe uma data limite para a vaga por meio de um prompt e armazena o valor na variável 'dataLimite'

  const confirmacao = confirm(
    'Deseja criar uma nova vaga com essas informações?\n' +
      'Nome: ' +
      nome +
      '\nDescrição: ' +
      descricao +
      '\nData Limite: ' +
      dataLimite
  ); // Exibe um diálogo de confirmação com as informações inseridas pelo usuário e armazena a resposta na variável 'confirmacao'

  if (confirmacao) {
    // Verifica se o usuário confirmou a criação da nova vaga
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] }; // Cria um objeto 'novaVaga' contendo as informações inseridas pelo usuário, incluindo um array vazio para 'candidatos'
    vagas.push(); // Adiciona a 'novaVaga' ao array 'vagas'
    alert('Vaga criada!'); // Exibe um alerta informando que a vaga foi criada com sucesso
  }
}

function exibirVaga() {
  const indice = prompt('Informe o índice da vaga que deseja exibir: '); // Solicita ao usuário que informe o índice da vaga que deseja exibir por meio de um prompt e armazena o valor na variável 'indice'
  const vaga = vagas[indice]; // Acessa a vaga no array 'vagas' com base no índice informado e armazena o objeto de vaga correspondente na variável 'vaga'

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + '\n - ' + candidato;
  },
  ''); // Utiliza o método 'reduce' para percorrer o array 'candidatos' da vaga e criar uma string formatada com os nomes dos candidatos, separados por quebras de linha

  alert(
    'Vaga nº ' +
      indice +
      '\nNome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData Limite: ' +
      vaga.dataLimite +
      '\nQuantidade de Candidatos: ' +
      vaga.candidatos.lenght +
      '\nCandidatos Inscritos: ' +
      candidatosEmTexto
  ); // Exibe um alerta com as informações da vaga, incluindo o índice, nome, descrição, data limite, quantidade de candidatos e a lista de candidatos inscritos formatada
} // Output Exemplo:
// Vaga nº 0
// Nome: Desenvolvedor Full Stack
// Descrição: Experiência com HTML, CSS, JavaScript e Node.js
// Data Limite: 10/07/2023
// Quantidade de Candidatos: 3
// Candidatos Inscritos:
// - João
// - Maria
// - Pedro

function inscreverCandidato() {
  const candidato = prompt('Informe o nome do candidato(a): '); // Solicita ao usuário que informe o nome do candidato por meio de um prompt e armazena o valor na variável 'candidato'
  const indice = prompt(
    'Informe o índice da vaga para o qual o(a) candidato(a) deseja se inscrever: '
  );
  const vaga = vagas[indice]; // Solicita ao usuário que informe o índice da vaga para a qual o candidato deseja se inscrever por meio de um prompt e armazena o valor na variável 'indice'

  const confirmacao = confirm(
    'Deseja inscrever o candidato ' +
      candidato +
      ' na vaga ' +
      indice +
      '?\n' +
      'Nome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData Limite: ' +
      vaga.dataLimite
  ); // Exibe um diálogo de confirmação com as informações da vaga e do candidato e armazena a resposta na variável 'confirmacao'

  if (confirmacao) {
    // Verifica se o usuário confirmou a inscrição do candidato
    vaga.candidatos.push(candidato); // Adiciona o nome do candidato ao array 'candidatos' da vaga correspondente
  }

  alert('Inscrição confirmada!'); // Exibe um alerta informando que a inscrição foi confirmada
}

function excluirVaga() {
  const indice = prompt('Informe o índice da vaga que deseja excluir: '); // Solicita ao usuário que informe o índice da vaga que deseja excluir por meio de um prompt e armazena o valor na variável 'indice'
  const vaga = vagas[indice]; // Acessa a vaga no array 'vagas' com base no índice informado e armazena o objeto de vaga correspondente na variável 'vaga'

  const confirmacao = confirm(
    'Tem certeza que deseja excluir a vaga ' +
      indice +
      '?\n' +
      'Nome: ' +
      vaga.nome +
      '\nDescrição: ' +
      vaga.descricao +
      '\nData Limite: ' +
      vaga.dataLimite
  ); // Exibe um diálogo de confirmação com as informações da vaga a ser excluída e armazena a resposta na variável 'confirmacao'

  if (confirmacao) {
    // Verifica se o usuário confirmou a exclusão da vaga
    vagas.splice(indice, 1); // Remove a vaga do array 'vagas' utilizando o método 'splice' com o índice e quantidade 1 para remover apenas a vaga em questão
    alert('Vaga excluída!'); // Exibe um alerta informando que a vaga foi excluída com sucesso
  }
}

function exibirMenu() {
  const opcao = prompt(
    'Cadastro de Vagas de Emprego' +
      '\n\nEscolha uma das opções:' +
      '\n1. Listar vagas disponíveis' +
      '\n2. Criar nova vaga' +
      '\n3. Exibir uma vaga' +
      '\n4. Inscrever candidato' +
      '\n5. Exluir vaga' +
      '\n6. Sair'
  );

  return opcao;
}
