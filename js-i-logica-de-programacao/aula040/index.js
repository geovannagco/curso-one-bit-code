// Notação de objeto literal:
const pessoa = {
  nome: 'Geovanna',
  idade: 25,
  profissao: 'Programadora',
};

console.log(pessoa.nome); // Saída: Geovanna
console.log(pessoa.idade); // Saída: 25
console.log(pessoa.profissao); // Saída: Programadora

console.clear();

// Construtor de objeto

function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

const person = new Person('Lucian', 32, 'Professor');
console.log(person.name); // Saída: Lucian
console.log(person.age); // Saída: 32
console.log(person.occupation); // Saída: Professor
console.log(person);

console.clear();

// Acesso e modificação de propriedades
const carro = {
  marca: 'Ford',
  modelo: 'Mustang',
  ano: 2020,
};

console.log(carro.marca); // Saída: Ford
console.log(carro.modelo); // Saída: Mustang
console.log(carro.ano); // Saída: 2020
console.log(carro);

carro.ano = 2023; // Altera o ano
console.log(carro.ano);
carro.modelo = 'Territory'; // Altera o modelo
console.log(carro.modelo);
console.log(carro);

console.clear();

// Exclusão de propriedades:
console.log(pessoa);
delete pessoa.profissao; // exlui profissão
console.log(pessoa.profissao);
console.log(pessoa);
console.clear;

// Iteração sobre as propriedades de um objeto

for (let chave in pessoa) {
  console.log(chave + ': ' + pessoa[chave]);
}

console.clear();

for (let chave in carro) {
  console.log(chave + ': ' + carro[chave]);
}
