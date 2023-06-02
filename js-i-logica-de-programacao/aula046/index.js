// function saudar() {
//   console.log('Olá!');
//   // Não há instrução de retorno
// }

// let resultado = saudar();
// console.log(resultado); // Output: undefined

function verificarIdade(idade) {
  if (idade < 0) {
    return 'Idade Inválida';
  } else if (idade < 18) {
    return 'Menor de idade';
  } else {
    return 'Maior de idade';
  }
}

// console.log(verificarIdade(5)); //Output: Maior de idade

function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
}

const resultado = calcularMedia(7, 2);
console.log(resultado);
console.clear();

function criarProduto(nome, preco) {
  const produto = {
    nome, // nome: nome,
    preco, // preco: preco,
    estoque: 1,
  };

  return produto;
}

const notebook = criarProduto('Notebook Itel Core i3 8GB', 'R$ 2.800');
console.log(notebook);

console.clear();

function areaRetangular(base, altura) {
  return base * altura;
}

function areaQuadrada(lado) {
  return areaRetangular(lado, lado);
}

console.log(areaRetangular(3, 5));
console.log(areaQuadrada(9));

console.clear();

function ola() {
  let texto = '...';
  return texto;
  texto = 'Olá, mundo!';
  console.log(texto); // Não é exibido por estar após o return, que finalizou a function
}

console.log(ola());

console.clear();

console.log(verificarIdade(55));
console.log(verificarIdade(10));
