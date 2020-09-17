'use strict';

const switchInputRef = document.querySelector('.js-switch-input');
const bodyElementRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let currentTheme = JSON.parse(localStorage.getItem('currentTheme'));

const checkReceivedTheme = () => {
  if (currentTheme === Theme.LIGHT) {
    bodyElementRef.classList.toggle('light-theme');
    localStorage.setItem('currentTheme', JSON.stringify(currentTheme));
    switchInputRef.removeAttribute('checked');
  } else if (currentTheme === Theme.DARK) {
    switchInputRef.setAttribute('checked', 'true');
    bodyElementRef.classList.toggle('dark-theme');
    localStorage.setItem('currentTheme', JSON.stringify(currentTheme));
  } else {
    bodyElementRef.classList.add('light-theme');
    currentTheme = Theme.LIGHT;
  }
};

const changeTheme = () => {
  if (currentTheme === Theme.LIGHT) {
    currentTheme = Theme.DARK;
    localStorage.setItem('currentTheme', JSON.stringify(currentTheme));
    bodyElementRef.classList.replace('light-theme', 'dark-theme');
  } else {
    currentTheme = Theme.LIGHT;
    localStorage.setItem('currentTheme', JSON.stringify(currentTheme));
    bodyElementRef.classList.replace('dark-theme', 'light-theme');
  }
};

checkReceivedTheme();

switchInputRef.addEventListener('change', changeTheme);
