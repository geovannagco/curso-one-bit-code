const resultado = prompt('Escolha uma alternativa:\na)\nb)\nc)');

switch (resultado) {
  case 'a':
    alert('o resultado é "a"');
    break;
  case 'b':
    alert('o resultado é "b"');
    break; //comando para parar
  //caso não tenha o break, o código será executado por completo
  case 'c':
    alert('o resultado é "c"');
    break;
  default: //caso padrão
    alert('finalizando...');
}
