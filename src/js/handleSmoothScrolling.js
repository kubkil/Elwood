import debounce from 'lodash.debounce';

const handleSmoothScrolling = (() => {
  const linkToHome = [
    document.querySelector('.navbar__link--home'),
    document.querySelector('.navbar__logo-link')
  ];
  const linkToAbout = document.querySelector('.navbar__link--about');
  const linkToContact = document.querySelector('.navbar__link--contact');
  const linkToGallery = document.querySelector('.about__gallery-link');
  const arrowLink = document.querySelector('.home__link');
  const homeSection = document.querySelector('.home');
  const aboutSection = document.querySelector('.about');
  const gallerySection = document.querySelector('.gallery');
  const contactSection = document.querySelector('#contact');

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
    console.log("i'm listening");
  };

  const arrowDisplay = () => {
    if (window.scrollY > 200) {
      arrowLink.classList.add('home__link--js-flex');
    } else {
      arrowLink.classList.remove('home__link--js-flex');
    }
  };

  window.addEventListener('scroll', debounce(arrowDisplay, 250));
  arrowLink.addEventListener('click', e => smoothScrollTo(e, homeSection));
})();

export default handleSmoothScrolling;
