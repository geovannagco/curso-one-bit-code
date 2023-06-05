// Define a function 'dividir'
// A function recebe o parâmetro 'num'
function dividir(num) {
  console.log(num); // Imprime o valor atual de num

  // A function tem a finalidade de dividir o número 'num' por 2 repetidamente até que ele não seja divisível por 2
  if (num % 2 === 0) {
    // Verifica se num é divisível por 2 (Seu resto da divisão por 2 é 0)
    dividir(num / 2); // Chama recursivamente a função dividir passando num dividido por 2
  } else {
    return num; // Retorna num quando ele não é mais divisível por 2
  }
}

dividir(256); // Chama a função dividir com o argumento 256

console.clear();

//Define a function 'dobrar'
// function dobrar(num) {
//   console.log(num); // Imprime o valor atual de num
//   dobrar(num * 2); // Chama recursivamente a função dobrar passando num multiplicado por 2
// }

// dobrar(1); // Chama a função dobrar com o argumento 1
// console.clear; // Limpar o console

/* A função 'dobrar' chama recursivamente a si mesma, passando o valor de 'num' multiplicado por 2. Isso faz com que a função seja chamada novamente com o novo valor de 'num' e, assim, continue dobrando-o indefinidamente. */
/* Como não há um caso base definido para interromper a recursão, a função 'dobrar' entrará em loop infinito, chamando-se repetidamente com valores cada vez maiores de 'num' */
/* Dado que a função 'dobrar' entra em um loop infinito, o código irá imprimir indefinidamente os valores de 'num' dobrados no console até que seja interrompido manualmente ou que ocorra um estouro de pilha (stack overflow) devido ao número excessivo de chamadas recursivas. */

// !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4
function fatorial(num) {
  console.log('Número: ' + num);

  if (num === 0 || num === 1) {
    // caso base
    return 1;
  } else {
    console.log(num + '* !' + (num - 1));
    return num * fatorial(num - 1);
  }
}

console.log('Resultado: ' + fatorial(5));
