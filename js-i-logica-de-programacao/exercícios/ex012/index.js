let filaDeEspera = []; // Array que irá armazenar os nomes dos pacientes em espera
let opcao = ''; // Variável que irá armazenar a opção escolhida pelo usuário

do {
  let pacientes = ''; // Variável para construir a lista de pacientes em espera
  for (let i = 0; i < filaDeEspera.length; i++) {
    pacientes += i + 1 + 'º - ' + filaDeEspera[i] + '\n';
  } // Constrói a lista de pacientes numerada

  opcao = prompt(
    'Pacientes:\n' +
      pacientes +
      '\nEscolha uma opção:\n' +
      '[1] Novo Paciente\n' +
      '[2] Atender Paciente\n' +
      '[3] Sair'
  ); // Prompt para o usuário com a lista de pacientes e opções disponíveis

  switch (opcao) {
    case '1': // Caso a opção escolhida seja '1' (novo paciente)
      const novoPaciente = prompt('Informe o nome do paciente: '); // Solicita o nome do novo paciente
      filaDeEspera.push(novoPaciente); // Adiciona o novo paciente ao final da fila
      break;
    case '2': // Caso a opção escolhida seja '2' (atender paciente)
      const pacienteConsultado = filaDeEspera.shift(); // Remove o primeiro paciente da fila e armazena o nome
      if (filaDeEspera.length > 0) {
        alert(pacienteConsultado + ' foi atendido (a)!'); // Exibe um alerta informando que o paciente foi atendido
      } else {
        alert('Não há pacientes na fila!');
      }

      break;
    case '3': // Caso a opção escolhida seja '3' (sair)
      alert('Encerrando...'); // Exibe um alerta informando que o sistema está sendo encerrado
      break;
    default: // Caso a opção escolhida não seja nenhum dos casos anteriores
      alert('Opção inválida!'); // Exibe um alerta informando que a opção é inválida
  }
} while (opcao !== '3'); // O loop continua enquanto a opção escolhida for diferente de '3'
