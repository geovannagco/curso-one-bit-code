function dobro(x) {
  alert('O dobro de ' + x + ' é ' + x * 2);
}

// dobro(5);
// dobro(15);
// dobro(7);

// dobro();

function dizOla(nome = 'Visitante') {
  // foi definido um valor padrão para a função
  alert('Olá, ' + nome + '!');
}
// dizOla();
// dizOla('Geovanna');

function soma(a, b) {
  alert('Resultado da soma: ' + (a + b));
}

// soma(3, 7);
// soma(55, 10);

function criarUsuario(nome, email, senha, tipo = 'admin') {
  // os parâmetros opcionais precisam ficar no final
  const usuario = {
    nome, // mesmo que nome: nome,
    email, // mesmo que email: email,
    senha, // mesmo que senha: senha,
    tipo, // mesmo que tipo: tipo,,
  };
  console.log(usuario);
}

criarUsuario('Geovanna', 'geovanna@email.com', 123456, 'usuário');
