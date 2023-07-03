// Map

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const doubledNumbers = numbers.map(number => number * 2); // a function map é usada para multiplicar cada número do array 'numbers' por 2.

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const names = ['Alice', 'Bob', 'Charlie'];
console.log(names);

const upperCaseNames = names.map(name => name.toUpperCase()); // a function map é usada para converter cada nome em maiúsculas usando o método toUpperCase()

console.log(upperCaseNames); // Output: ['ALICE', 'BOB', 'CHARLIE']

// Filter

const evenNumbers = numbers.filter(number => number % 2 === 0); // a function filter é usada para filtrar apenas os numeros pares do array.

console.log(evenNumbers); // Output: [2, 4]

const oddNumbers = numbers.filter(number => number % 2 !== 0); // a function filter é usada para filtrar apenas os números ímpares do array

console.log(oddNumbers); // Output: [1, 3, 5]

// Reduce

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0); // a function reduce é usada para somar todos os elementos do array numbers. A função de redução recebe dois argumentos: o acumulador, que armazena o valor parcial da soma, e o número atual do array.

console.log(sum); // Output: 15

const product = numbers.reduce(
  (accumulator, number) => accumulator * number,
  1
); // a function 'reduce' é usada para calcular o produto de todos os números do array 'numbers'. A função recebe dois argumentos: o acumulador, que armazena o valor parcial do produto, e o numero atual do array

console.log(product); // Output: 120

// Sort
const fruits = ['banana', 'apple', 'orange', 'grape'];
console.log(fruits);

const sortedFruits = fruits.sort((a, b) => a.localeCompare(b)); // a function sort é usada para ordenar as frutas em ordem alfabética. A funcção de comparação usa o método localCompare para comparar as strings 'a' e 'b'.

console.log(sortedFruits); // Output: ['apple', 'banana', 'grape', 'orange']

const ages = [30, 25, 40, 35, 20];
console.log(ages);

const sortedAges = ages.sort((a, b) => a - b);

console.log(sortedAges); // Output: [20, 25, 30, 35, 40]
