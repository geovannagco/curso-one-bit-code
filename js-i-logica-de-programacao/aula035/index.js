const senhorDosAneis = [
  'Frodo',
  'Sam',
  'Merry',
  'Pippin',
  'Gandalf',
  'Aragorn',
  'Legolas',
  'Gimli',
];

console.log(senhorDosAneis);

// Adicionar elementos no array
// push - adiciona o elemento no final
senhorDosAneis.push('Boromir');
console.log(senhorDosAneis);

// unshift - adciona o elemento no começo
senhorDosAneis.unshift('Galadriel');
console.log(senhorDosAneis);

// Remover elementos no array
// pop - remove um elemento do final
const ultimoElemento = senhorDosAneis.pop();
console.log(senhorDosAneis);
console.log(ultimoElemento);

//shift - remove um elemento do começo
const primeiroElemento = senhorDosAneis.shift();
console.log(senhorDosAneis);
console.log(primeiroElemento);

// Pesquisar elementos
// Includes - verifica se um elemento está presente no array
const inclui = senhorDosAneis.includes('Gandalf');
console.log(inclui);

// indexOf
const indice = senhorDosAneis.indexOf('Gandalf');
console.log(indice);

// Cortar e Concaternar
// slice
const hobbits = senhorDosAneis.slice(0, 4);
const outros = senhorDosAneis.slice(-4);
console.log(senhorDosAneis);
console.log(hobbits);
console.log(outros);
