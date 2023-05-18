// expressão 1 (inicialização); expressão 2 (condição); expressão 3 (finalização)
// for (let i = 0; i <= 10; i++) {
//   alert('Índice = ' + i);
// }

let nome = prompt('Informe o seu nome: ');

for (let indice = 0; indice < nome.length; indice++) {
  console.log(nome[indice]);
}
