//Solicitando o nome e poder de ataque de um personagem
let personagemAtaque = prompt('Qual é o nome do personagem de ataque?');
let poderAtaque = parseInt(
  prompt('Qual é o poder de ataque do personagem ' + personagemAtaque + '?')
);

//Solicitando o nome, o poder de defesa e a quantidade de pontos de vida do personagem
let personagemDefesa = prompt('Qual é o nome do personagem de defesa?');
let poderDefesa = parseInt(
  prompt('Qual é o poder de defesa do personagem ' + personagemDefesa + '?')
);
let pontosVida = parseInt(
  prompt('Quantos pontos de vida o personagem ' + personagemDefesa + ' possui?')
);

//verificando se o personagemDefesa possui escudo
let escudo = parseInt(
  prompt(
    'O personagem ' +
      personagemDefesa +
      ' possui escudo? Digite "1" para sim e "2" para não'
  )
);
