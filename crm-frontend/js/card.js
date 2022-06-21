// Создание элемента html
function createNewElement(tag, attributes, classes) {
  const element = document.createElement(tag);
  if (!attributes) return;
  for (let a of attributes) {
    element.setAttribute(a.name, a.value)
  };
  if (!classes) return;
  for (let c of classes) {
    element.classList.add(c);
  }
  return element
}

// Получение id из списка запросов в адресной строке
function getQueryParam() {
  const pageParams = new URLSearchParams(window.location.search);
  return (pageParams.get('id'));
};

// Создание карточки клиента
const modalHeader = document.querySelector('.modal-header'),
  modalTitle = document.querySelector('.modal-title'),
  idSpan = document.createElement('span'),
  modalBody = document.querySelector('.modal-body'),
  modalForm = document.querySelector('.modal__form-container'),
  surnameInput = document.querySelector(`#surnameInput`),
  nameInput = document.querySelector(`#nameInput`),
  lastnameInput = document.querySelector(`#lastnameInput`),
  modalContacts = document.querySelector('.modal__contacts'),
  modalContactList = document.querySelector('.modal__list');
  cardLinkInput = document.querySelector('#copyLinkInput');
  copyLinkBtn = document.querySelector('#copyLinkBtn');

async function createClientCard() {
  const url = 'http://localhost:3000';
  const getId = getQueryParam();
  const response = await fetch(`${url}/api/clients/${getId}`)
  const data = await response.json();

  idSpan.textContent = `ID:${data.id}`;
  surnameInput.value = data.surname;
  nameInput.value = data.name;
  lastnameInput.value = data.lastName;
  modalTitle.after(idSpan);
  cardLinkInput.value = window.location.href;

  for (let contact of data.contacts) {
    const contactItem = createNewElement('li', [], ['list-group-item', 'input-group', 'modal__item', 'modal__item-card']),
      contactType = createNewElement('span', [], ['input-group-text', 'col-2']),
      contactValue = createNewElement('input', [{ name: 'disabled', value: 'disabled' }], ['form-control']);

    contactValue.value = contact.value;
    contactType.textContent = contact.type;

    contactItem.append(contactType);
    contactItem.append(contactValue);
    modalContactList.append(contactItem);
  }
};
createClientCard();

// Копирование ссылки
function copyLink() {
  copyLinkBtn.addEventListener('click', () => {
    cardLinkInput.select();
    document.execCommand("copy");
  })
}
copyLink()
