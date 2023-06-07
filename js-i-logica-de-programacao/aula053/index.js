const numeros = [1, 2, 3, 4, 5];

// const aoQuadrado = numeros.map(function (numero) {
//   return numero ** 2;
// });

// console.log(aoQuadrado); // [1, 4, 9, 16, 25]

// 1. A função 'filter()' permite filtrar elementos de um array com base em determinada condição. Ela recebe uma função de callback que define a condição de filtragem.
const numerosPares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

console.log(numerosPares); // [2, 4]
console.clear();

function calcular(a, b, operacao) {
  console.log('Realizando uma operação.');
  const resultado = operacao(a, b); // somar (3, 5)
  return resultado;
}

function somar(x, y) {
  console.log('Realizando uma soma.');
  return x + y;
}

console.log(calcular(3, 5, somar));

console.log(
  calcular(8, 4, function (x, y) {
    console.log('Realizando uma subtração.');
    return x - y;
  })
);

console.clear();

function exibirElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}

const lista = ['Maça', 'Banana', 'Limão'];

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista);
}
// Retorna -> Maçã 0, Banana 1, Limão 2

// Método for each
lista.forEach(exibirElemento); // Retorna -> Maçã 0, Banana 1, Limão 2

lista.forEach(function (elemento, indice, array) {
  console.log(elemento, indice, array);
}); // Retorna -> Maçã 0, Banana 1, Limão 2

console.clear();

const listaDeCompras = ['Arroz', 'Feijão', 'Macarrão'];

listaDeCompras.forEach(function (item) {
  console.log('Você precisa comprar: ' + item);
});
// Retorna:
// Você precisa comprar: Arroz
// Você precisa comprar: Feijão
// Você precisa comprar: Macarrão
