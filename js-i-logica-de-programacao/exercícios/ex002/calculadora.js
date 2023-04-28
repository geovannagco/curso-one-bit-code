const entrada1 = prompt('Informe o 1º número: ');
const entrada2 = prompt('Informe o 2º número: ');

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtracao = x - y;
const multplicacao = x * y;
const divisao = x / y;

alert(
  'Resultados:\n ' +
    '\nSoma: ' +
    soma +
    '\nSubtração: ' +
    subtracao +
    '\nMultplicação: ' +
    multplicacao +
    '\nDivisão: ' +
    divisao
);
