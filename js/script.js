'use strict';

(function handleNavbar() {
if (window.screen.width < 768) {
  const hamburger = document.querySelector('.navbar__hamburger');
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarAndMenu = [document.querySelector('.navbar'), document.querySelector('.navbar__list')];

  const expandMenu = () => {
    navbarToggle.checked = true;
    hamburger.setAttribute('aria-expanded', 'true');
    [...navbarAndMenu].forEach(elem => elem.classList.add('navbar__background-js'));
  };

  const hideMenu = () => {
    navbarToggle.checked = false;
    hamburger.setAttribute('aria-expanded', 'false');
    [...navbarAndMenu].forEach(elem => elem.classList.remove('navbar__background-js'));
  };

  const toggleClass = () => {
    hamburger.classList.toggle('is-active');
    if (hamburger.classList.contains('is-active')) {
      expandMenu();
    } else {
      hideMenu();
    }
  };

    hamburger.addEventListener('click', toggleClass);

    const hideMenuOnWindowClick = (e) => {
    const hamburgerBox = document.querySelector('.navbar__hamburger-box');
    const hamburgerInner = document.querySelector('.navbar__hamburger-inner');

    if (e.target !== hamburger && e.target !== hamburgerBox && e.target !== hamburgerInner) {
      hamburger.classList.remove('is-active');
      hideMenu();
    }
    };

    const makeNavbarSmaller = () => {
    const navbar = document.querySelector('.navbar');
    const elwoodLogo = document.querySelector('.navbar__logo');
    if (window.pageYOffset > 0) {
      navbar.classList.add('navbar__scrolled-js');
      elwoodLogo.classList.add('navbar__logo--scrolled-js');
    } else {
      navbar.classList.remove('navbar__scrolled-js');
      elwoodLogo.classList.remove('navbar__logo--scrolled-js');
    }
    };

    window.addEventListener('click', (e) => {
      hideMenuOnWindowClick(e);
  });
}
}());
