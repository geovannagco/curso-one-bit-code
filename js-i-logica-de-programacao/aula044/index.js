function olaMundo() {
  // ainda que não seja estabelecido nenhum parâmetro, os parênteses são obrigatórios
  console.log('Olá, mundo!');
}

olaMundo();

console.clear();

// Definindo uma função que soma dois números
function soma(a, b) {
  // a função soma recebe dois argumentos (a, b)
  return a + b;
}

// Chamando a função e armazenando o resultado em uma varíavel
const resultado = soma(2, 3); // Output = 5
console.log(resultado);
