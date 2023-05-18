let velocidade = 0;

do {
  alert('A velocidade do veículo é ' + velocidade + ' km/h'); // Exibe a velocidade atual do veículo
  velocidade -= 20; // Reduz a velocidade em 20 km/h
} while (velocidade > 0); // Repete o loop enquanto a velocidade for maior que 0

alert('Velocidade final: ' + velocidade + ' km/h'); // Exibe a velocidade final do veículo
