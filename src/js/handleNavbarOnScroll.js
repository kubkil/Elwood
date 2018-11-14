const handleNavbarOnScroll = (() => {
  const elwoodLogo = document.querySelector('.navbar__logo');
  const navbarLinks = document.querySelectorAll('.navbar__link');
  const navbar = document.querySelector('.navbar');
  const aboutSection = document.querySelector('.about');

  const makeNavbarSmaller = () => {
    navbar.classList.add('navbar__scrolled-js');
    elwoodLogo.classList.add('navbar__logo--scrolled-js');
    navbarLinks.forEach(link =>
      link.classList.add('navbar__link--scrolled-js')
    );
  };

  const makeNavbarBigger = () => {
    navbar.classList.remove('navbar__scrolled-js');
    elwoodLogo.classList.remove('navbar__logo--scrolled-js');
    navbarLinks.forEach(link =>
      link.classList.remove('navbar__link--scrolled-js')
    );
  };

  const setNavbarSize = () => {
    if (window.pageYOffset > 0) {
      makeNavbarSmaller();
      const navbarHeight = navbar.offsetHeight;
      aboutSection.style.paddingTop = `${navbarHeight + 10}px`;
    } else {
      makeNavbarBigger();
    }
    window.addEventListener('scroll', setNavbarSize);
  };

  const media1025 = window.matchMedia('(max-width: 1025px)');

  const scrollMQ = media => {
    if (media.matches) {
      console.log('<1025');
      setNavbarSize();
    } else {
      console.log('>1025');
      makeNavbarBigger();
      aboutSection.style.removeProperty('padding-top');
      window.removeEventListener('scroll', setNavbarSize);
    }
  };

  scrollMQ(media1025);

  media1025.addListener(scrollMQ);
})();

export default handleNavbarOnScroll;
