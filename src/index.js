import style from './_scss/main.scss';
import handleSmoothScrolling from './js/handleSmoothScrolling';
import handleNavbarOnScroll from './js/handleNavbarOnScroll';
import handleHamburger from './js/handleHamburger';
import handleSiemaClass from './js/handleSiemaClass';
import Siema from 'siema';
if (window.screen.width > 1025) {
  var mySiema = new Siema({
    loop: true
  });
}

const handleSiemaSliding = (() => {
  const linkToHome = [
    document.querySelector('.navbar__link--home'),
    document.querySelector('.navbar__logo-link')
  ];
  const linkToAbout = document.querySelector('.navbar__link--about');
  const linkToContact = document.querySelector('.navbar__link--contact');

  const slideOnClick = () => {
    linkToHome.forEach(link =>
      link.addEventListener('click', () => mySiema.goTo(0))
    );
    linkToAbout.addEventListener('click', () => mySiema.goTo(1));
    linkToContact.addEventListener('click', () => mySiema.goTo(2));
  };
  const removeSlideOnClick = () => {
    linkToHome.forEach(link =>
      link.removeEventListener('click', () => mySiema.goTo(0))
    );
    linkToAbout.removeEventListener('click', () => mySiema.goTo(1));
    linkToContact.removeEventListener('click', () => mySiema.goTo(2));
  };

  const media1025 = window.matchMedia('(max-width: 1025px)');

  const siemaSlideMQ = media => {
    if (media.matches) {
      removeSlideOnClick();
    } else {
      slideOnClick();
    }
  };

  siemaSlideMQ(media1025);
  media1025.addListener(siemaSlideMQ);
})();
