import Siema from '../../vendor/siema-1.5.1/dist/siema.min.js';

new Siema();

(function handleScrolling() {
  const linkToHome = [document.querySelector('.navbar__link--home'), document.querySelector('.navbar__logo-link')];
  const linkToAbout = document.querySelector('.navbar__link--about');
  const linkToContact = document.querySelector('.navbar__link--contact');

  linkToHome.forEach(link => link.addEventListener('click', (e) => {
    const homeSection = document.querySelector('.home');
    e.preventDefault();
    homeSection.scrollIntoView({ behavior: 'smooth' });
  }));

  linkToAbout.addEventListener('click', (e) => {
    const aboutSection = document.querySelector('.about');
    e.preventDefault();
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  linkToContact.addEventListener('click', (e) => {
    const contactSection = document.querySelector('.contact');
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
}());

(function handleNavbarOnScroll() {
  if (window.screen.width < 1025) {
    const makeNavbarSmaller = () => {
      const elwoodLogo = document.querySelector('.navbar__logo');
      const navbarLinks = document.querySelectorAll('.navbar__link');
      const aboutSection = document.querySelector('.about');
      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar.offsetHeight;

      if (window.pageYOffset > 0) {
        navbar.classList.add('navbar__scrolled-js');
        elwoodLogo.classList.add('navbar__logo--scrolled-js');
        navbarLinks.forEach(link => link.classList.add('navbar__link--scrolled-js'));
        aboutSection.style.paddingTop = `${navbarHeight + 10}px`;
      } else {
        navbar.classList.remove('navbar__scrolled-js');
        elwoodLogo.classList.remove('navbar__logo--scrolled-js');
        navbarLinks.forEach(link => link.classList.remove('navbar__link--scrolled-js'));
      }
    };

    window.addEventListener('scroll', makeNavbarSmaller);
  }
}());

(function handleNavbar() {
  if (window.screen.width < 768) {
    const hamburger = document.querySelector('.navbar__hamburger');
    const navbarToggle = document.querySelector('.navbar__toggle');
    const navbarAndMenu = [document.querySelector('.navbar'), document.querySelector('.navbar__list')];

    const expandMenu = () => {
      navbarToggle.checked = true;
      hamburger.setAttribute('aria-expanded', 'true');
      navbarAndMenu.forEach(elem => elem.classList.add('navbar__background-js'));
    };

    const hideMenu = () => {
      navbarToggle.checked = false;
      hamburger.setAttribute('aria-expanded', 'false');
      navbarAndMenu.forEach(elem => elem.classList.remove('navbar__background-js'));
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

    window.addEventListener('click', (e) => {
      hideMenuOnWindowClick(e);
    });
  }
}());
