function show() {
  // Obtendo um elemento a partir do id
  const contactList = document.getElementById('contact-list');
  console.log(contactList);

  const listElements = document.getElementsByTagName('li');
  console.log(listElements);

  const contactInputs = document.getElementsByClassName('contact-input');
  console.log(contactInputs);

  const contact1 = document.getElementsByName('contact1');
  console.log(contact1);

  const contacts = document.querySelectorAll('#contact-list > li > label');
  console.log(contacts);

  const firstContact = document.querySelector('#contact-list > li > label');
  console.log(firstContact);
}
