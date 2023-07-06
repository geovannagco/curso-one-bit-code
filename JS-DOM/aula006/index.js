function addContact() {
  const contactSection = document.getElementById('contacts-list');

  const h3 = document.createElement('h3');
  h3.innerText = 'Contato';

  const ul = document.createElement('ul');

  const nameLi = document.createElement('li');
  nameLi.innerText = 'Nome: ';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'fullname';
  nameLi.appendChild(nameInput);
  ul.appendChild(nameLi);
  ul.appendChild(document.createElement('br'));

  const phoneLi = document.createElement('li');
  phoneLi.innerText = 'Telefone: ';
  const phoneInput = document.createElement('input');
  phoneInput.type = 'text';
  phoneInput.name = 'fullname';
  phoneLi.appendChild(phoneInput);
  ul.appendChild(phoneLi);
  ul.appendChild(document.createElement('br'));

  const addressLi = document.createElement('li');
  addressLi.innerHTML = '<label for="address"> Endereço: </label>';
  // o innerText não funcionaria nesse caso
  const addressInput = document.createElement('input');
  addressInput.type = 'text';
  addressInput.name = 'address';
  addressInput.id = 'address';
  addressLi.appendChild(addressInput);
  ul.appendChild(addressLi);
  ul.appendChild(document.createElement('br'));

  contactSection.append(h3, ul);
  // O método append() permite adicionar um ou mais elementos como filhos de um elemento pai. Ele aceita vários argumentos separados por vírgula e também pode aceitar elementos HTML, nós de texto ou objetos do tipo 'Node'.
  // Além disso, ele suporta a sintaxe de array, permitindo passar um array de elementos para serem adicionados.
  // Sintaxe: parentElement.append(element1, element2, element3, ..., elementN);
}

function removeContact() {
  const contactSection = document.getElementById('contacts-list');

  const titles = document.getElementsByTagName('h3');
  const contacts = document.getElementsByTagName('ul');

  contactSection.removeChild(titles[titles.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
  // O método removeChild() é usado para remover um nó filho específico de um elemento paii no DOM.
  // Ele aceita um único argumento, que é o nó filho a ser removido.
  // Sintaxe: parentElement.removeChild(childElement);
}
