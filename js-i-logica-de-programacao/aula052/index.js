// function somar(a, b) {
//   return a + b;
// }

// let operacao = somar;

// console.log(operacao(4, 5));

// operacao = function (a, b) {
//   return a - b;
// };

// console.log(operacao(4, 5));

olaMundo();

// oiMundo(); // as funções anônimas só podem ser acessadas após a sua declaração

function olaMundo() {
  console.log('Olá, mundo!');
}

const oiMundo = function () {
  console.log('Oi, mundo!');
};

oiMundo();
