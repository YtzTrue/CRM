const icons = {
  'Изменить': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g opacity="0.7">
  <path d="M2 11.5002V14.0002H4.5L11.8733 6.62687L9.37333 4.12687L2 11.5002ZM13.8067 4.69354C14.0667 4.43354 14.0667 4.01354 13.8067 3.75354L12.2467 2.19354C11.9867 1.93354 11.5667 1.93354 11.3067 2.19354L10.0867 3.41354L12.5867 5.91354L13.8067 4.69354Z" fill="#9873FF"/>
  </g>
  </svg>`,
  'Удалить': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g opacity="0.7">
  <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/>
  </g>
  </svg>`,
  'Телефон': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g opacity="0.7">
  <circle cx="8" cy="8" r="8" fill="#9873FF"/>
  <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
  </g>
  </svg>`,
  'Email': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
  </svg>`,
  'VK': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g opacity="0.7">
  <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
  </g>
  </svg>`,
  'Другое': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
  </svg>`,
  'Закрыть': `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#b0b0b0"/>
  </svg>`,
}

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

// Интерпретация даты и времени
function createDateTime(date) {

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yyyy = date.getFullYear();

  if (hours < 10) {
    hours = '0' + hours
  };
  if (minutes < 10) {
    minutes = '0' + minutes
  };
  if (dd < 10) {
    dd = '0' + dd
  };
  if (mm < 10) {
    mm = '0' + mm
  };
  currentDate = dd + '.' + mm + '.' + yyyy;
  currentTime = hours + ':' + minutes;
  return {
    currentDate,
    currentTime,
  }
}

// Создание иконок контактов
function createContactsSvg({ contactType, contactValue }) {
  let svg = document.createElement('svg');
  svg.innerHTML = icons[`${contactType}`];
  svg.classList.add('tbody-ico');
  svg.setAttribute('data-bs-toggle', 'tooltip');
  svg.setAttribute('title', `${contactValue}`);
  return svg;
}

// Создание кнопок "Изменить" и "Удалить"
function createButtonGroup() {

  const buttonGroup = createNewElement('div', [{ name: 'role', value: 'group' }], ['btn-group', 'btn-group-td']);

  const handlersAttributes = [
    { name: 'data-bs-target', value: '#clientModal' },
    { name: 'data-bs-toggle', value: 'modal' },
    { name: 'type', value: 'button' }
  ];
  const editBtn = createNewElement('button', handlersAttributes, ['btn', 'btn-td', 'btn-edit']);
  const deleteBtn = createNewElement('button', handlersAttributes, ['btn', 'btn-td', 'btn-delete']);

  editBtn.innerHTML = (icons['Изменить']);
  editBtn.innerHTML += 'Изменить';
  deleteBtn.innerHTML = (icons['Удалить']);
  deleteBtn.innerHTML += 'Удалить';

  buttonGroup.append(editBtn);
  buttonGroup.append(deleteBtn);

  return {
    buttonGroup,
    editBtn,
    deleteBtn
  };
}

// Создание выпадающего списка контактов
function createContactsSelect() {
  const contacts = ['Телефон', 'Email', 'Facebook', 'VK', 'Другое'];
  const select = createNewElement('select', [], ['form-select']);
  for (let contact of contacts) {
    let option = createNewElement('option', [], []);
    option.value = contact;
    option.textContent = contact;
    select.append(option);
  }
  return select
}

// Добавление котактов в модальном окне
function addContact() {
  const contactList = document.querySelector('.modal__list-add-contact');
  const addBtn = document.querySelector('.modal__btn-add-contact');

  contactList.classList.add('list-group');
  addBtn.addEventListener('click', () => {
    let counter = Array.from(document.querySelectorAll('.modal__item')).length;
    counter++;

    const contactsSelect = createContactsSelect();
    const contactItem = createNewElement('li', [], ['list-group-item', 'input-group', 'modal__item']);
    const contactInput = createNewElement('input', [{ name: 'placeholder', value: 'Введите данные контакта' }], ['form-control', 'modal__contact-input']);
    const contactCloseBtn = createNewElement('button', [{ name: 'type', value: 'button' }], ['btn']);

    contactCloseBtn.innerHTML = icons['Закрыть'];
    contactItem.append(contactsSelect);
    contactItem.append(contactInput);
    contactItem.append(contactCloseBtn);
    contactList.append(contactItem);
    contactCloseBtn.addEventListener('click', () => {
      contactItem.remove();
      counter--;
      console.log(counter);
      if (counter < 10) {
        addBtn.removeAttribute('disabled', 'disabled');
      }
    })
    console.log(counter);
    if (counter >= 10) {
      addBtn.setAttribute('disabled', 'disabled');
    }
  })
}
addContact();

// Добавление клиента в таблицу из массива объектов
function addClientToList(arr) {

  const list = document.getElementById('clientList');
  list.innerHTML = '';
  let clientItem;

  for (let client of arr) {

    clientItem = document.createElement('tr');
    list.append(clientItem);

    // ID
    const idCell = document.createElement('td');
    const id = client.id;
    idCell.classList.add('td-id');
    idCell.innerHTML = id;
    clientItem.append(idCell);

    // ФИО
    const fullNameCell = document.createElement('td');
    const fullName = createNewElement('a', [{ name: 'href', value: `card.html?id=${id}` }, { name: 'target', value: '_blank' }], ['td-link']);
    fullName.innerText = `${client.surname} ${client.name} ${client.lastName}`;
    fullNameCell.append(fullName);
    clientItem.append(fullNameCell);

    // Дата и время создания
    const createdAtCell = document.createElement('td');
    const createdAtDiv = document.createElement('div');
    const createdAtDate = document.createElement('span');
    const createdAtTime = document.createElement('span');
    const createdAt = new Date(client.createdAt);

    createdAtDiv.classList.add('container-date');
    createdAtDate.classList.add('td-date');
    createdAtTime.classList.add('td-time');
    createdAtDate.innerHTML = createDateTime(createdAt).currentDate;
    createdAtTime.innerHTML = createDateTime(createdAt).currentTime;
    createdAtDiv.append(createdAtDate);
    createdAtDiv.append(createdAtTime);
    createdAtCell.append(createdAtDiv);
    clientItem.append(createdAtCell);

    // Дата и время изменения
    const updatedAtCell = document.createElement('td');
    const updatedAtDiv = document.createElement('div');
    const updatedAtDate = document.createElement('span');
    const updatedAtTime = document.createElement('span');
    const updatedAt = new Date(client.updatedAt);

    updatedAtDiv.classList.add('container-date');
    updatedAtDate.classList.add('td-date');
    updatedAtTime.classList.add('td-time');
    updatedAtDate.innerHTML = createDateTime(updatedAt).currentDate;
    updatedAtTime.innerHTML = createDateTime(updatedAt).currentTime;
    updatedAtDiv.append(updatedAtDate);
    updatedAtDiv.append(updatedAtTime);
    updatedAtCell.append(updatedAtDiv);
    clientItem.append(updatedAtCell);

    // Контакты
    const contactsCell = document.createElement('td');
    const contacts = client.contacts;

    if (contacts.length <= 4)
      for (let i = 0; i < contacts.length; i++) {
        const contactType = contacts[i].type;
        const contactValue = contacts[i].value;
        contactsCell.append(createContactsSvg({ contactType, contactValue }));
      } else {
      for (let i = 0; i <= 3; i++) {
        const contactType = contacts[i].type;
        const contactValue = contacts[i].value;
        contactsCell.append(createContactsSvg({ contactType, contactValue }));
      }
      const moreContactsBtn = document.createElement('button');
      moreContactsBtn.classList.add('contacts-ico-btn', 'btn');
      moreContactsBtn.innerText = `+${contacts.length - 4}`;
      contactsCell.append(moreContactsBtn);
      moreContactsBtn.addEventListener('click', () => {
        moreContactsBtn.classList.add('visually-hidden');
        for (let i = 4; i < contacts.length; i++) {
          const contactType = contacts[i].type;
          const contactValue = contacts[i].value;
          contactsCell.append(createContactsSvg({ contactType, contactValue }));
          activateTooltips();
        }
      })
    }

    contactsCell.classList.add('td-contacts');
    clientItem.append(contactsCell);

    // Кнопки
    const actionsCell = document.createElement('td');
    const btnGroup = createButtonGroup();
    actionsCell.append(btnGroup.buttonGroup);
    clientItem.append(actionsCell);
    btnGroup.deleteBtn.setAttribute('data-bs-id', `${id}`);
    btnGroup.editBtn.setAttribute('data-bs-id', `${id}`);
    btnGroup.deleteBtn.setAttribute('data-bs-action', `delete`);
    btnGroup.editBtn.setAttribute('data-bs-action', `edit`);
  }
}

// Индикатор загрузки таблицы
function tablePreloader(status) {
  const preloader = document.querySelector('#preloader');
  if (status === 'enabled') {
    preloader.classList.remove('visually-hidden')
  } else if (status === 'disabled') {
    preloader.classList.add('visually-hidden')
  };
}

// Активация тултипов
function activateTooltips() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
}

const url = 'http://localhost:3000'; // адрес сервера с БД
let visClientArr = []; // Отображаемый массив клиентов
let origClientArr = []; // Оригинальный массив клиентов

// Получение массива объектов от сервера и отрисовка
async function getClientsArray() {
  tablePreloader('enabled');
  const response = await fetch(`${url}/api/clients`);
  const data = await response.json();
  tablePreloader('disabled');
  visClientArr = [];
  origClientArr = [];
  visClientArr.push(...data);
  origClientArr.push(...data);
  addClientToList(origClientArr);
  activateTooltips();
}
getClientsArray();

// Сортировка таблицы
function sortBy() {
  const idTh = document.querySelector('#idColumnTitle'),
    fullNameTh = document.querySelector('#fullNameColumnTitle'),
    dateTh = document.querySelector('#dateColumnTitle'),
    changesTh = document.querySelector('#changesColumnTitle');
  let sortId = 0;
  let sortFullname = 0;
  let sortDate = 0;
  let sortChanges = 0;

  idTh.addEventListener('click', () => {
    const svgDirection = idTh.querySelector('svg');
    if (sortId === 0) {
      svgDirection.style.transform = 'rotate(180deg)';
      visClientArr.sort((a, b) => a.id >= b.id ? 1 : -1);
      addClientToList(visClientArr);
      activateTooltips();
      sortId++;
    } else {
      svgDirection.style.transform = 'rotate(0)';
      visClientArr.sort((a, b) => a.id <= b.id ? 1 : -1);
      addClientToList(visClientArr);
      activateTooltips();
      sortId = 0;
    }
  });

  fullNameTh.addEventListener('click', () => {
    const svgDirection = fullNameTh.querySelector('svg');
    const spans = fullNameTh.querySelectorAll('span');
    spans.forEach(span => {
      span.classList.toggle('visually-hidden');
    });
    if (sortFullname === 0) {
      svgDirection.style.transform = 'rotate(180deg)';
      visClientArr.sort((a, b) => a.surname >= b.surname ? 1 : -1);
      addClientToList(visClientArr);
      activateTooltips();
      sortFullname++;
    } else {
      svgDirection.style.transform = 'rotate(0)';
      visClientArr.sort((a, b) => a.surname <= b.surname ? 1 : -1);
      addClientToList(visClientArr);
      activateTooltips();
      sortFullname = 0;
    }
  });

  dateTh.addEventListener('click', () => {
    const svgDirection = dateTh.querySelector('svg');
    if (sortDate === 0) {
      svgDirection.style.transform = 'rotate(180deg)';
      visClientArr.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      addClientToList(visClientArr);
      activateTooltips();
      sortDate++;
    } else {
      svgDirection.style.transform = 'rotate(0)';
      visClientArr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      addClientToList(visClientArr);
      activateTooltips();
      sortDate = 0;
    }
  });

  changesTh.addEventListener('click', () => {
    const svgDirection = changesTh.querySelector('svg');
    if (sortChanges === 0) {
      svgDirection.style.transform = 'rotate(180deg)';
      visClientArr.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
      addClientToList(visClientArr);
      activateTooltips();
      sortChanges++;
    } else {
      svgDirection.style.transform = 'rotate(0)';
      visClientArr.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      addClientToList(visClientArr);
      activateTooltips();
      sortChanges = 0;
    }
  });
}
sortBy();

// Фильтрация (поиск)
let timeout;
function filterBy() {
  const searchInput = document.querySelector('#searchInput');
  clearTimeout(timeout)
  timeout = setTimeout(function () {
    visClientArr = origClientArr.filter(client => (client.surname.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1) ||
      (client.name.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1) ||
      (client.lastName.toLowerCase().indexOf(searchInput.value.toLowerCase()) !== -1));
    addClientToList(visClientArr);
    activateTooltips();
  }, 500);
}
searchInput.addEventListener('input', filterBy);

// Создание списка контактов клиента
function createContactsArray() {
  const modalItems = Array.from(document.querySelectorAll('.modal__item'));
  let conacts = [];
  for (let modalItem of modalItems) {
    const select = modalItem.querySelector('.form-select');
    const input = modalItem.querySelector('.form-control');
    const contactType = select.options[select.selectedIndex].value;
    const contactValue = input.value.trim();
    const contact = {
      type: `${contactType}`,
      value: `${contactValue}`
    }
    conacts.push(contact);
  }
  return conacts;
}

// Создание объекта клиента
function createClientObject() {
  const surnameInput = document.querySelector(`#surnameInput`);
  const nameInput = document.querySelector(`#nameInput`);
  const lastnameInput = document.querySelector(`#lastnameInput`);
  const contacts = createContactsArray();
  const clietObject = {
    name: `${nameInput.value.trim()}`,
    surname: `${surnameInput.value.trim()}`,
    lastName: `${lastnameInput.value.trim()}`,
    contacts: contacts,
  }
  return clietObject;
}

// Модальные окна
const clientModal = document.getElementById('clientModal'),
  modalHeader = clientModal.querySelector('.modal-header'),
  modalTitle = clientModal.querySelector('.modal-title'),
  idSpan = document.createElement('span'),
  modalBody = clientModal.querySelector('.modal-body'),
  textModal = document.createElement('p'),
  modalForm = clientModal.querySelector('.modal__form-container'),
  surnameInput = document.querySelector(`#surnameInput`),
  nameInput = document.querySelector(`#nameInput`),
  lastnameInput = document.querySelector(`#lastnameInput`),
  modalContacts = clientModal.querySelector('.modal__contacts'),
  modalContactList = clientModal.querySelector('.modal__list'),
  errorDisplay = clientModal.querySelector('#errorDisplay'),
  newClientSubmit = document.querySelector('#newClientSubmit'),
  editClientSubmit = document.querySelector('#editClientSubmit'),
  deleteClientSubmit = document.querySelector('#deleteClientSubmit');

const spinner = createNewElement('span', [{ name: 'role', value: 'status' }, { name: 'aria-hidden', value: 'true' }], ['spinner-border', 'spinner-border-sm']);

// Появление модального окна
clientModal.addEventListener('show.bs.modal', function (event) {

  const button = event.relatedTarget,
    action = button.getAttribute('data-bs-action'),
    id = button.getAttribute('data-bs-id');

  if (action === 'new') {
    modalTitle.textContent = 'Новый клиент';
    modalForm.classList.remove('visually-hidden');
    modalContacts.classList.remove('visually-hidden');
    newClientSubmit.classList.remove('visually-hidden');
    newClientSubmit.onclick = (e) => {
      e.preventDefault();
      doRequest(action);
    };

  } else if (action === 'edit') {
    idSpan.textContent = `ID:${id}`;
    edited = origClientArr.find(client => (client.id === id));
    surnameInput.value = edited.surname;
    nameInput.value = edited.name;
    lastnameInput.value = edited.lastName;
    modalTitle.textContent = 'Изменить данные';
    modalTitle.after(idSpan);
    modalForm.classList.remove('visually-hidden');
    modalContacts.classList.remove('visually-hidden');
    editClientSubmit.classList.remove('visually-hidden');

    for (let contact of edited.contacts) {
      const contactsSelect = createContactsSelect(),
        contactItem = createNewElement('li', [], ['list-group-item', 'input-group', 'modal__item']),
        contactInput = createNewElement('input', [], ['form-control']),
        contactCloseBtn = createNewElement('button', [{ name: 'type', value: 'button' }], ['btn']),
        ns = "http://www.w3.org/2000/svg",
        svgCross = document.createElementNS(ns, 'svg'),
        pathCross = document.createElementNS(ns, 'path');

      svgCross.setAttribute('width', 16);
      svgCross.setAttribute('height', 16);
      pathCross.setAttribute('d', 'M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z');
      pathCross.setAttribute('fill', '#B0B0B0');
      svgCross.append(pathCross);
      contactCloseBtn.append(svgCross);

      contactInput.value = contact.value;
      contactsSelect.options[contactsSelect.selectedIndex].value = contact.type;
      contactsSelect.options[contactsSelect.selectedIndex].text = contact.type;

      contactItem.append(contactsSelect);
      contactItem.append(contactInput);
      contactItem.append(contactCloseBtn);
      modalContactList.append(contactItem);
      contactCloseBtn.addEventListener('click', () => {
        contactItem.remove();
      })
    }
    editClientSubmit.onclick = (e) => {
      e.preventDefault();
      doRequest(action, id);
    };

  } else if (action === 'delete') {
    modalHeader.classList.add('d-flex', 'justify-content-center');
    modalForm.classList.add('visually-hidden');
    modalContacts.classList.add('visually-hidden');
    deleteClientSubmit.classList.remove('visually-hidden');
    modalTitle.textContent = 'Удалить клиента';
    textModal.textContent = 'Вы действительно хотите удалить данного клиента?';
    modalBody.append(textModal);
    deleteClientSubmit.onclick = (e) => {
      e.preventDefault();
      doRequest(action, id);
    };
  }
})

// Скрытие модального она
clientModal.addEventListener('hidden.bs.modal', function (event) {
  modalHeader.classList.remove('d-flex', 'justify-content-center');
  modalForm.classList.add('visually-hidden');
  modalContactList.innerHTML = '';
  surnameInput.value = '';
  nameInput.value = '';
  lastnameInput.value = '';
  errorDisplay.textContent = '';
  modalContacts.classList.add('visually-hidden');
  idSpan.remove();
  textModal.remove();
  surnameInput.classList.remove('is-invalid');
  nameInput.classList.remove('is-invalid');
  newClientSubmit.classList.add('visually-hidden');
  editClientSubmit.classList.add('visually-hidden');
  deleteClientSubmit.classList.add('visually-hidden');
  spinner.remove();
})

// Валидация полей ФИО клиента
function validateClientInputs() {
  surnameInput.addEventListener('input', () => {
    surnameInput.classList.remove('is-invalid');
    errorDisplay.textContent = '';
  })
  nameInput.addEventListener('input', () => {
    nameInput.classList.remove('is-invalid');
    errorDisplay.textContent = '';
  })
  if (!surnameInput.value.trim() && !nameInput.value.trim()) {
    surnameInput.classList.add('is-invalid');
    nameInput.classList.add('is-invalid');
    errorDisplay.textContent = 'Введите фамилию и имя клиента';
    return false;
  } else if (!surnameInput.value.trim()) {
    surnameInput.classList.add('is-invalid');
    errorDisplay.textContent = 'Введите фамилию клиента';
    return false;
  } else if (!nameInput.value.trim()) {
    nameInput.classList.add('is-invalid');
    errorDisplay.textContent = 'Введите имя клиента';
    return false;
  } else return true;
}

// Валидация полей контактов
function validateContactsInputs() {
  const contactInputs = document.querySelectorAll('.modal__contact-input');
  let arr = [];
  for (let input of contactInputs) {
    if (!input.value.trim()) {
      input.classList.add('is-invalid');
      errorDisplay.textContent = 'Есть незаполненные поля контактов';
      arr.push('false');
    } else {
      arr.push('true');
    }
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
    })
  }
  return arr
}

// Запрос на добавление клиента
async function createNewClient() {
  const validate = validateClientInputs();
  const validateContacts = validateContactsInputs();
  if (validate === false || validateContacts.includes('false')) return;
  newClientSubmit.prepend(spinner);
  const newClient = createClientObject();
  await fetch(`${url}/api/clients`, {
    method: 'POST',
    body: JSON.stringify(newClient),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  spinner.remove();
  const modalInstance = bootstrap.Modal.getInstance(clientModal);
  modalInstance.hide();
  window.location.reload();
}

// Запрос на удаление клиента
async function deleteClient(id) {
  deleteClientSubmit.prepend(spinner);
  await fetch(`${url}/api/clients/${id}`, {
    method: 'DELETE',
  });
  spinner.remove();
  const modalInstance = bootstrap.Modal.getInstance(clientModal);
  modalInstance.hide();
  window.location.reload();
}

// Запрос на редактирование клиента
async function editClient(id) {
  const validate = validateClientInputs();
  const validateContacts = validateContactsInputs();
  if (validate === false || validateContacts.includes('false')) return;
  const editClient = createClientObject();
  editClientSubmit.prepend(spinner);
  await fetch(`${url}/api/clients/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(editClient),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  spinner.remove();
  const modalInstance = bootstrap.Modal.getInstance(clientModal);
  modalInstance.hide();
  window.location.reload();
}

// Выбор типа запроса
function doRequest(action, id) {
  if (action === 'new') {
    createNewClient()
  } else if (action === 'edit') {
    editClient(id)
  } else if (action === 'delete') {
    deleteClient(id)
  }
}
