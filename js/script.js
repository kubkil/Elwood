'use strict';

const hamburger = document.querySelector('.navbar__hamburger');
const navbarToggle = document.querySelector('.navbar__toggle');
const homeSection = document.querySelector('.home');

const expandMenu = () => {
  navbarToggle.checked = true;
  hamburger.setAttribute('aria-expanded', 'true');
};

const hideMenu = () => {
  navbarToggle.checked = false;
  hamburger.setAttribute('aria-expanded', 'false');
};

const toggleClass = () => {
  hamburger.classList.toggle('is-active');
  homeSection.classList.toggle('home__blurred-js');
  if (hamburger.classList.contains('is-active')) {
    expandMenu();
  } else {
    hideMenu();
  }
};

hamburger.addEventListener('click', () => {
  toggleClass();
});

window.addEventListener('click', (e) => {
  const hamburgerBox = document.querySelector('.navbar__hamburger-box');
  const hamburgerInner = document.querySelector('.navbar__hamburger-inner');

  if (e.target !== hamburger && e.target !== hamburgerBox && e.target !== hamburgerInner) {
    hamburger.classList.remove('is-active');
    hideMenu();
  }
});
