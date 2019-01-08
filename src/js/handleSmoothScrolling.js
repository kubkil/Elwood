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
    document.querySelector('.navbar__link--gallery'),
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
  const paginationGalleryLink = document.querySelector(
    '.pagination__button--gallery'
  );
  const paginationContactLink = document.querySelector(
    '.pagination__button--contact'
  );

  const getAllSiblings = elem => {
    const siblings = [];
    let sibling = elem.parentNode.firstChild;

    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }
    return siblings;
  };

  const smoothScrollTo = (evt, section) => {
    evt.preventDefault();
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const changePaginationLinkColor = paginationLink => {
    if (!paginationLink.classList.contains('pagination__background--js')) {
      paginationLink.classList.add('pagination__background--js');
      const linkSiblings = getAllSiblings(paginationLink);
      linkSiblings.forEach(sibling => {
        sibling.classList.remove('pagination__background--js');
      });
    }
  };

  linkToHome.forEach(link =>
    link.addEventListener('click', e => {
      if (
        !paginationHomeLink.classList.contains('pagination__background--js')
      ) {
        paginationHomeLink.classList.add('pagination__background--js');
        const homeSiblings = getAllSiblings(paginationHomeLink);
        homeSiblings.forEach(btn =>
          btn.classList.remove('pagination__background--js')
        );
      }
      smoothScrollTo(e, homeSection);
    })
  );

  linkToAbout.forEach(link =>
    link.addEventListener('click', e => {
      if (
        !paginationAboutLink.classList.contains('pagination__background--js')
      ) {
        paginationAboutLink.classList.add('pagination__background--js');
        const aboutSiblings = getAllSiblings(paginationAboutLink);
        aboutSiblings.forEach(btn =>
          btn.classList.remove('pagination__background--js')
        );
      }
      smoothScrollTo(e, aboutSection);
    })
  );

  linkToContact.forEach(link =>
    link.addEventListener('click', e => {
      if (
        !paginationContactLink.classList.contains('pagination__background--js')
      ) {
        paginationContactLink.classList.add('pagination__background--js');
        const contactSiblings = getAllSiblings(paginationContactLink);
        contactSiblings.forEach(btn =>
          btn.classList.remove('pagination__background--js')
        );
      }
      smoothScrollTo(e, contactSection);
    })
  );

  linkToGallery.forEach(link =>
    link.addEventListener('click', e => {
      if (
        !paginationGalleryLink.classList.contains('pagination__background--js')
      ) {
        paginationGalleryLink.classList.add('pagination__background--js');
        const gallerySiblings = getAllSiblings(paginationGalleryLink);
        gallerySiblings.forEach(btn =>
          btn.classList.remove('pagination__background--js')
        );
      }
      smoothScrollTo(e, gallerySection);
    })
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
