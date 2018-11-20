const handleHamburger = (() => {
  const hamburger = document.querySelector('.navbar__hamburger');
  const navbarToggle = document.querySelector('.navbar__toggle');
  const navbarAndMenu = [
    document.querySelector('.navbar'),
    document.querySelector('.navbar__list')
  ];
  const hamburgerBox = document.querySelector('.navbar__hamburger-box');
  const hamburgerInner = document.querySelector('.navbar__hamburger-inner');

  const expandMenu = () => {
    navbarToggle.checked = true;
    hamburger.setAttribute('aria-expanded', 'true');
    navbarAndMenu.forEach(elem => elem.classList.add('navbar__background-js'));
  };

  const hideMenu = () => {
    navbarToggle.checked = false;
    hamburger.setAttribute('aria-expanded', 'false');
    navbarAndMenu.forEach(elem =>
      elem.classList.remove('navbar__background-js')
    );
  };

  const toggleClass = () => {
    hamburger.classList.toggle('is-active');

    if (hamburger.classList.contains('is-active')) {
      expandMenu();
    } else {
      hideMenu();
    }
  };

  const hideMenuOnWindowClick = e => {
    if (
      e.target !== hamburger &&
      e.target !== hamburgerBox &&
      e.target !== hamburgerInner
    ) {
      hamburger.classList.remove('is-active');
      hideMenu();
    }
  };

  const navbarEnabled = () => {
    hamburger.addEventListener('click', toggleClass);
    window.addEventListener('click', e => {
      hideMenuOnWindowClick(e);
    });
  };

  const navbarDisabled = () => {
    hamburger.classList.remove('is-active');
    hideMenu();
    hamburger.removeEventListener('click', toggleClass);
    window.removeEventListener('click', e => {
      hideMenuOnWindowClick(e);
    });
  };

  const media768 = window.matchMedia('(max-width: 768px)');

  const navbarMQ = media => {
    if (media.matches) {
      navbarEnabled();
    } else {
      navbarDisabled();
    }
  };

  navbarMQ(media768);

  media768.addListener(navbarMQ);
})();

export default handleHamburger;
