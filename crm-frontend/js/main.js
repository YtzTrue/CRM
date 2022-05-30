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
  date = dd + '.' + mm + '.' + yyyy + '  ' + hours + ':' + minutes;
  return date;
}

// Создание иконок контактов
function createContactsSvg(contact) {
  const ns = "http://www.w3.org/2000/svg"
  const svg = document.createElementNS(ns, 'svg');
  const circle = document.createElementNS(ns, 'circle');
  const path = document.createElementNS(ns, 'path');
  const svgSize = 16;
  svg.classList.add('tbody-ico');
  svg.setAttribute('width', svgSize);
  svg.setAttribute('height', svgSize);
  if (contact === 'Телефон') {
    circle.setAttribute('r', svgSize / 2);
    circle.setAttribute('cx', svgSize / 2);
    circle.setAttribute('cy', svgSize / 2);
    circle.setAttribute('fill', '#9873FF');
    path.setAttribute('d', 'M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z');
    path.setAttribute('fill', 'white');
  } else if (contact === 'Email') {
    path.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z');
    path.setAttribute('fill', '#9873FF');
  } else if (contact === 'Facebook') {
    path.setAttribute('d', 'M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z');
    path.setAttribute('fill', '#9873FF');
  } else if (contact === 'VK') {
    path.setAttribute('d', 'M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z');
    path.setAttribute('fill', '#9873FF');
  } else {
    path.setAttribute('d', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z');
    path.setAttribute('fill', '#9873FF');
  }
  svg.append(circle);
  svg.append(path);
  return svg;
}

// Создание кнопок "Изменить" и "Удалить"
function createButtonGroup() {

  const buttonGroup = document.createElement('div');
  buttonGroup.classList.add('btn-group', 'btn-group-td');
  buttonGroup.setAttribute('role', 'group');

  const changeBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  const ns = "http://www.w3.org/2000/svg";
  const svgPen = document.createElementNS(ns, 'svg');
  const svgCross = document.createElementNS(ns, 'svg');
  const pathPen = document.createElementNS(ns, 'path');
  const pathCross = document.createElementNS(ns, 'path');

  changeBtn.classList.add('btn', 'btn-td', 'btn-change');
  changeBtn.setAttribute('data-bs-target', '#changeClientModal');
  changeBtn.setAttribute('data-bs-toggle', 'modal');
  changeBtn.setAttribute('type', 'button');
  svgPen.setAttribute('width', 16);
  svgPen.setAttribute('height', 16);
  pathPen.setAttribute('d', 'M2 11.5002V14.0002H4.5L11.8733 6.62687L9.37333 4.12687L2 11.5002ZM13.8067 4.69354C14.0667 4.43354 14.0667 4.01354 13.8067 3.75354L12.2467 2.19354C11.9867 1.93354 11.5667 1.93354 11.3067 2.19354L10.0867 3.41354L12.5867 5.91354L13.8067 4.69354Z');
  pathPen.setAttribute('fill', '#9873FF');
  svgPen.append(pathPen);
  changeBtn.append(svgPen);
  changeBtn.innerHTML += 'Изменить';

  deleteBtn.classList.add('btn', 'btn-td', 'btn-delete');
  deleteBtn.setAttribute('data-bs-target', '#deleteClientModal');
  deleteBtn.setAttribute('data-bs-toggle', 'modal');
  deleteBtn.setAttribute('type', 'button');
  svgCross.setAttribute('width', 16);
  svgCross.setAttribute('height', 16);
  pathCross.setAttribute('d', 'M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z');
  pathCross.setAttribute('fill', '#F06A4D');
  svgCross.append(pathCross);
  deleteBtn.append(svgCross);
  deleteBtn.innerHTML += 'Удалить';

  buttonGroup.append(changeBtn);
  buttonGroup.append(deleteBtn);

  return buttonGroup;
}

// Создание выпадающего списка контактов
function createContactsSelect() {
  const contacts = ['Телефон', 'Email', 'Facebook', 'VK', 'Другое'];
  const select = document.createElement('select');
  select.classList.add('form-select');
  for (let contact of contacts) {
    let option = document.createElement('option');
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
    const contactsSelect = createContactsSelect();
    const contactItem = document.createElement('li');
    const contactInput = document.createElement('input');
    const contactCloseBtn = document.createElement('button');
    const ns = "http://www.w3.org/2000/svg";
    const svgCross = document.createElementNS(ns, 'svg');
    const pathCross = document.createElementNS(ns, 'path');

    contactCloseBtn.setAttribute('type', 'button');
    svgCross.setAttribute('width', 16);
    svgCross.setAttribute('height', 16);
    pathCross.setAttribute('d', 'M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z');
    pathCross.setAttribute('fill', '#B0B0B0');
    svgCross.append(pathCross);
    contactCloseBtn.append(svgCross);
    contactItem.classList.add('list-group-item', 'input-group', 'modal__item');
    contactInput.classList.add('form-control');
    contactInput.setAttribute('placeholder', 'Введите данные контакта');
    contactCloseBtn.classList.add('btn');
    contactItem.append(contactsSelect);
    contactItem.append(contactInput);
    contactItem.append(contactCloseBtn);
    contactList.append(contactItem);
    contactCloseBtn.addEventListener('click', () => {
      contactItem.remove();
    })
  })
}
addContact();

// Добавление клиента в таблицу из массива объектов
function addClientToList(arr) {

  const list = document.getElementById('clientList');
  let clientItem;

  for (let client of arr) {

    clientItem = document.createElement('tr');
    list.append(clientItem);

    // ID
    const idCell = document.createElement('td');
    const id = client.id;
    idCell.innerHTML = id;
    clientItem.append(idCell);

    // ФИО
    const fullNameCell = document.createElement('td');
    const fullName = `${client.surname} ${client.name} ${client.lastName}`;
    fullNameCell.innerHTML = fullName;
    clientItem.append(fullNameCell);

    // Дата и время создания
    const createdAtCell = document.createElement('td');
    let createdAt = new Date(client.createdAt);
    createdAtCell.innerHTML = createDateTime(createdAt);
    clientItem.append(createdAtCell);

    // Дата и время изменения
    const updatedAtCell = document.createElement('td');
    let updatedAt = new Date(client.updatedAt);
    updatedAtCell.innerHTML = createDateTime(updatedAt);
    clientItem.append(updatedAtCell);

    // Контакты
    const contactsCell = document.createElement('td');
    const contacts = client.contacts;

    for (let contact of contacts) {
      const contactType = contact.type;
      contactsCell.append(createContactsSvg(contactType));
    }

    clientItem.append(contactsCell);

    // Кнопки
    const actionsCell = document.createElement('td');
    const btnGroup = createButtonGroup();
    actionsCell.append(btnGroup);
    clientItem.append(actionsCell);
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

// Получение массива объектов от сервера
async function getClientsArray() {
  tablePreloader('enabled');
  const url = 'http://localhost:3000';
  const response = await fetch(`${url}/api/clients`);
  const data = await response.json();
  tablePreloader('disabled');
  addClientToList(data);
}
getClientsArray();

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
  const surnameInput = document.querySelector('#surnameInput');
  const nameInput = document.querySelector('#nameInput');
  const lastnameInput = document.querySelector('#lastnameInput');
  const contacts = createContactsArray();
  const clietObject = {
    name: `${nameInput.value}`,
    surname: `${surnameInput.value}`,
    lastName: `${lastnameInput.value}`,
    contacts: contacts,
  }
  return clietObject;
}

// Добавление нового клиента
function createNewClient() {
  const newClientSubmitBtn = document.querySelector('#newClientSubmit');
  newClientSubmitBtn.addEventListener('click', async e => {
    e.preventDefault();

    const newClient = createClientObject();

    const url = 'http://localhost:3000';
    const response = await fetch(`${url}/api/clients`, {
      method: 'POST',
      body: JSON.stringify(newClient),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await response.json();
    console.log(data);
  })
}
createNewClient();
