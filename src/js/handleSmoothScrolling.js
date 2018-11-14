const handleSmoothScrolling = (() => {
  console.log('handleSmoothScrolling');
  const linkToHome = [
    document.querySelector('.navbar__link--home'),
    document.querySelector('.navbar__logo-link')
  ];
  const linkToAbout = document.querySelector('.navbar__link--about');
  const linkToContact = document.querySelector('.navbar__link--contact');
  const homeSection = document.querySelector('.home');
  const aboutSection = document.querySelector('.about');
  const contactSection = document.querySelector('.contact');

  const smoothScrollTo = (evt, section) => {
    evt.preventDefault();
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollOnClick = () => {
    linkToHome.forEach(link =>
      link.addEventListener('click', e => smoothScrollTo(e, homeSection))
    );
    linkToAbout.addEventListener('click', e => smoothScrollTo(e, aboutSection));
    linkToContact.addEventListener('click', e =>
      smoothScrollTo(e, contactSection)
    );
    console.log("i'm listening");
  };

  const removeScroll = () => {
    linkToHome.forEach(link =>
      link.removeEventListener('click', e => smoothScrollTo(e, homeSection))
    );
    linkToAbout.removeEventListener('click', e =>
      smoothScrollTo(e, aboutSection)
    );
    linkToContact.removeEventListener('click', e =>
      smoothScrollTo(e, contactSection)
    );
    console.log("i'm not listening");
  };

  const media1025 = window.matchMedia('(max-width: 1025px)');

  const scrollMQ = media => {
    if (media.matches) {
      scrollOnClick();
    } else {
      removeScroll();
    }
  };

  scrollMQ(media1025);

  media1025.addListener(scrollMQ);
})();

export default handleSmoothScrolling;