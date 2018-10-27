'use strict';

const hamburger = document.querySelector('.navbar__hamburger');
const navbarToggle = document.querySelector('.navbar__toggle');

const menuNotExpanded = () => {
  navbarToggle.checked = false;
  hamburger.setAttribute('aria-expanded', 'false');
};

const toggleClass = () => {
  console.log('boo');
  hamburger.classList.toggle('is-active');
  if (hamburger.classList.contains('is-active')) {
    navbarToggle.checked = true;
    hamburger.setAttribute('aria-expanded', 'true');
  } else {
    menuNotExpanded();
  }
};

hamburger.addEventListener('click', () => {
  toggleClass();
});

window.addEventListener('click', (e) => {
  const hamburgerBox = document.querySelector('.hamburger-box');
  const hamburgerInner = document.querySelector('.hamburger-inner');

  switch (true) {
    case e.target !== hamburger:
    case e.target !== hamburgerBox:
    case e.target !== hamburgerInner:
      hamburger.classList.remove('is-active');
      menuNotExpanded();
      break;
    default:
      console.log('Something went wrong');
  }
});
