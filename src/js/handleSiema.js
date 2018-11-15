import Siema from 'siema';

if (window.screen.width > 1025) {
  var mySiema = new Siema({
    loop: true
  });
}

const handleSiema = (() => {
  const siemaDiv = document.querySelector('.navbar__container')
    .nextElementSibling;
  const linkToHome = [
    document.querySelector('.navbar__link--home'),
    document.querySelector('.navbar__logo-link')
  ];
  const linkToAbout = document.querySelector('.navbar__link--about');
  const linkToContact = document.querySelector('.navbar__link--contact');

  const removeSiemaClass = () => {
    if (siemaDiv.classList.contains('siema')) {
      siemaDiv.classList.remove('siema');
    }
  };

  const addSiemaClass = () => {
    if (!siemaDiv.classList.contains('siema')) {
      siemaDiv.classList.add('siema');
    }
  };

  const slideOnClick = () => {
    linkToHome.forEach(link =>
      link.addEventListener('click', () => mySiema.goTo(0))
    );
    linkToAbout.addEventListener('click', () => mySiema.goTo(1));
    linkToContact.addEventListener('click', () => mySiema.goTo(3));
  };

  const removeSlideOnClick = () => {
    linkToHome.forEach(link =>
      link.removeEventListener('click', () => mySiema.goTo(0))
    );
    linkToAbout.removeEventListener('click', () => mySiema.goTo(1));
    linkToContact.removeEventListener('click', () => mySiema.goTo(3));
  };

  const media1025 = window.matchMedia('(max-width: 1025px)');

  const siemaMQ = media => {
    if (media.matches) {
      removeSlideOnClick();
      removeSiemaClass();
    } else {
      addSiemaClass();
      slideOnClick();
    }
  };

  siemaMQ(media1025);
  media1025.addListener(siemaMQ);
})();

export default handleSiema;
