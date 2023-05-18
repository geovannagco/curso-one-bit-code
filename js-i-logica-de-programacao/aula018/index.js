// const idade = prompt('Informe a sua idade: ');

// if (idade > 18) {
//   alert('Você é maior de idade!');
// } else if (idade > 12) {
//   alert('Você é menor de idade!');
// } else if (idade >= 4) {
//   alert('Você é criança!');
// } else if (idade < 4) {
//   alert('Você é um bebê!');
// }

// const resultado = 6 === 6 ? 'Verdadeiro' : 'falso'; //operador ternário é a abreviação da estrutura if else
// console.log(resultado);

const hora = prompt('Informe a hora: '); // Solicita ao usuário que informe a hora e armazena na variável "hora"

if (hora <= 12) {
  // Se a hora for menor ou igual a 12, exibe a mensagem "Bom dia!"
  alert('Bom dia!');
} else if (hora <= 18) {
  // Se a hora estiver entre 13 e 18, exibe a mensagem "Boa tarde!"
  alert('Boa tarde!');
} else {
  // Se a hora for maior que 18, exibe a mensagem "Boa noite!"
  alert('Boa noite!');
}
