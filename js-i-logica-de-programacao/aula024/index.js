// Exemplo da estrutura de repetição while
// criando uma variável
let velocidade = 80;

// criando o loop com while
// enquanto velocidade > 0
while (velocidade > 0) {
  alert('O carro está a ' + velocidade + ' km/h'); // alerta mostrando a velocidade atual do veículo
  velocidade -= 20; // diminuindo 20km/h da velocidade do veículo
  alert('Diminuindo 20 km/h');

  // adicionando uma interrupção quando chegar em 40
  // if (velocidade == 40) {
  //   break;
  // }
}

alert('O veículo parou.');

// a execução parou quando a condição se tornou falsa. No caso, velocidade <= 0
