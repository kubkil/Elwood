import debounce from 'lodash.debounce';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const handleSmoothScrolling = (() => {
  const linkToHome = [
    document.querySelector('.navbar__link--home'),
    document.querySelector('.navbar__logo-link'),
    document.querySelector('.pagination__button--home')
  ];
  const linkToAbout = [
    document.querySelector('.navbar__link--about'),
    document.querySelector('.pagination__button--about')
  ];

  const linkToContact = [
    document.querySelector('.navbar__link--contact'),
    document.querySelector('.pagination__button--contact')
  ];

  const linkToGallery = [
    document.querySelector('.about__gallery-link'),
    document.querySelector('.pagination__button--gallery')
  ];

  const arrowLink = document.querySelector('.home__link');
  const homeSection = document.querySelector('.home');
  const aboutSection = document.querySelector('.about');
  const gallerySection = document.querySelector('.gallery');
  const contactSection = document.querySelector('.contact');
  const paginationHomeLink = document.querySelector(
    '.pagination__button--home'
  );
  const paginationAboutLink = document.querySelector(
    '.pagination__button--about'
  );

  const smoothScrollTo = (evt, section) => {
    evt.preventDefault();
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  linkToHome.forEach(link =>
    link.addEventListener('click', e => smoothScrollTo(e, homeSection))
  );
  linkToAbout.addEventListener('click', e => smoothScrollTo(e, aboutSection));
  linkToGallery.addEventListener('click', e =>
    smoothScrollTo(e, gallerySection)
  );
  linkToContact.addEventListener('click', e =>
    smoothScrollTo(e, contactSection)
  );

  const arrowDisplay = () => {
    if (window.scrollY > 200) {
      arrowLink.classList.add('home__link--js-flex');
    } else {
      arrowLink.classList.remove('home__link--js-flex');
    }
  };

  window.addEventListener('scroll', debounce(arrowDisplay, 200));
  arrowLink.addEventListener('click', e => smoothScrollTo(e, homeSection));
})();

export default handleSmoothScrolling;
