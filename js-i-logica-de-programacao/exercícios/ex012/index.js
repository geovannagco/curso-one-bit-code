let filaDeEspera = [];
let opcao = '';

do {
  let pacientes = '';
  for (let i = 0; i < filaDeEspera.length; i++) {
    pacientes += i + 1 + 'º - ' + filaDeEspera[i] + '\n';
  }

  opcao = prompt(
    'Pacientes:\n' +
      pacientes +
      '\nEscolha uma opção:\n' +
      '[1] Novo Paciente\n' +
      '[2] Atender Paciente\n' +
      '[3] Sair'
  );

  switch (opcao) {
    case '1':
      const novoPaciente = prompt('Informe o nome do paciente: ');
      filaDeEspera.push(novoPaciente);
      break;
    case '2':
      const pacienteConsultado = filaDeEspera.shift();
      alert(pacienteConsultado + ' foi atendido (a)!');
      break;
    case '3':
      alert('Encerrando...');
      break;
    default:
      alert('Opção inválida!');
  }
} while (opcao !== '3');
