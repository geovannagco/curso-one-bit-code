function addInput() {
  const ul = document.getElementById('inputs');

  const newLi = document.createElement('li');
  newLi.className = 'list-item';
  newLi.innerText = 'Novo input: ';
  // innerText e innerHTML são propriedades usadas para manipular o conteúdo de elementos HTML
  // innerText: retorna/define o texto visível contido em um elemento, excluindo as tagas HTML. Ou seja, ela retorna apenas o conteúdo textual e não interpreta ou exibe as tags HTML.
  // innerHTML: retorna/define o conteúdo HTML completo de um elemento, incluindo tags HTML. Ela retorna o conteúdo interpretado do elemento, o que significa que qualquer marcação HTML presente será renderizada no resultado. Ao definir o valor da propriedade innerHTML, o conteúdo HTML é substituido inteiramente.

  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'input';

  newLi.appendChild(newInput);
  ul.appendChild(newLi);
  // O método appendChild é usada para adicionar um nó filho a um elemento pai existente em uma página HTML.
  // Sintaxe: parentElement.appendChild(childElement);
}
