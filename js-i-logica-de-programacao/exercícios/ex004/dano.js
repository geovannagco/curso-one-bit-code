//Solicitando o nome e poder de ataque de um personagem
const atacante = prompt('Qual é o nome do personagem atacante?');
const poderAtaque = parseFloat(
  prompt('Qual é o poder de ataque do personagem ' + atacante + '?')
);

//Solicitando o nome do defensor, o poder de defesa e a quantidade de pontos de vida do personagem
const defensor = prompt('Qual é o nome do personagem defensor?');
const poderDefesa = parseFloat(
  prompt('Qual é o poder de defesa do personagem ' + defensor + '?')
);
let pontosVida = parseFloat(
  prompt('Quantos pontos de vida o personagem ' + defensor + ' possui?')
);

//verificando se o defensor possui escudo
const possuiEscudo = prompt(
  'O personagem ' + defensor + ' possui escudo? (Sim/Não)'
);

//variável para armazenar o dano causado
let danoCausado = 0; //começa com o valor 0 ou vazio.

//verificando os danos causados com a estrutura if e else
if (poderAtaque > poderDefesa && possuiEscudo === 'Não') {
  danoCausado = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && possuiEscudo === 'Sim') {
  danoCausado = (poderAtaque - poderDefesa) / 2;
}

//calculando os pontos de vida
pontosVida -= danoCausado;

//exibindo as mensagens na tela
alert(atacante + ' causou ' + danoCausado + ' pontos de dano em ' + defensor);

alert(
  atacante +
    '\nPoder de Ataque: ' +
    poderAtaque +
    '\n\n' +
    defensor +
    '\nPontos de Vida: ' +
    pontosVida +
    '\nPoder de Defesa: ' +
    poderDefesa +
    '\nPossui Escudo: ' +
    possuiEscudo
);
