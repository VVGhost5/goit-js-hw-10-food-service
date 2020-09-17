import itemsTemplate from '../templates/menu-items.hbs';

import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menu);

menuListRef.insertAdjacentHTML('afterbegin', markup);
