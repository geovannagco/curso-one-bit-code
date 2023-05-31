// Declaração da matriz arr
// A matriz contém 4 elementos:
// 1º elemento: do tipo string, '1º Nível'
// 2º elemento: do tipo matriz, ['2º Nível', 42, true]
// 3º elemento: do tipo matriz aninhada,
/* [
    ['3º Nível, 1º item', 'Olá, mundo!'],
    ['3º Nível, 2º item', 'Oi, mundo!'],
  ] */
// 4º elemento: do tipo matriz, []
const arr = [
  '1º Nível',
  ['2º Nível', 42, true],
  [
    ['3º Nível, 1º item', 'Olá, mundo!'],
    ['3º Nível, 2º item', 'Oi, mundo!'],
  ],
  [],
];
console.log(arr);
console.log(arr[0]); // imprime o 1º elemento da matriz
console.log(arr[1]); // imprime o 2º elelemento da matriz
console.log(arr[1][0]); // imprime o 1º elemento da 2ª matriz
console.log(arr[1][1]); // imprime o 2º elemento da 2ª matriz
console.log(arr[2][0][1]); // imprime o 2º elemento da 1ª matriz aninhada
console.log(arr[2][1][1]); // imprime o 2º elemento da 2ª matriz aninhada

console.clear();

// Novo array declarado
// Contém três arrays aninhados, representando três linhas com quatro colunas
const matriz = [
  ['l1, c1', 'l1, c2', 'l1, c3', 'l1, c4'],
  ['l2, c1', 'l1, c2', 'l1, c3', 'l1, c4'],
  ['l3, c1', 'l1, c2', 'l1, c3', 'l1, c4'],
];

// console.log(matriz);
// console.table(matriz);

// matriz.push(['Nova linha']);
// matriz[0].push('Nova coluna');
// console.table(matriz);

// Percorre todos os elementos do array 'matriz'. O loop externo 'for' itera sobre as linhas da matriz, enquanto o loop interno 'for' itera sobre as colunas de cada linha
// Em cada iteração o elemento atual é acessado usando a notação matriz[i][j]
// Em seguida é exibida uma mensagem no console mostrando a posição (linha, coluna) e o valor do elemento
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j];
    console.log('Posição: (' + i + ', ' + j + ') Valor: ' + elemento);
  }
}
