// Solicitando nome e velocidade do primeiro veículo
const veiculo1 = prompt('Qual é o primeiro veículo?');
const velocidade1 = parseInt(
  prompt('Qual é a velocidade do véiculo ' + veiculo1 + '?')
);

// Solicitando nome e velocidade do segundo veículo
const veiculo2 = prompt('Qual é o segundo veículo?');
const velocidade2 = parseInt(
  prompt('Qual é a velocidade do véiculo ' + veiculo2 + '?')
);

// Verificando qual dos dois veículos é mais rápido
if (velocidade1 > velocidade2) {
  alert('O veículo ' + veiculo1 + ' é mais rápido que o veículo ' + veiculo2);
} else if (velocidade2 > velocidade1) {
  alert('O veículo ' + veiculo2 + ' é mais rápido que o veículo ' + veiculo1);
} else {
  alert('Os dois veículos têm a mesma velocidade.');
}
