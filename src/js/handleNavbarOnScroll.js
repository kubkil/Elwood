import debounce from 'lodash.debounce';

const handleNavbarOnScroll = (() => {
  const navbarContainer = document.querySelector('.navbar__container');
  let lastScrollPosition = 0;

  const checkScrollPosition = () => {
    const newScrollPosition = window.scrollY;
    if (newScrollPosition > lastScrollPosition) {
      navbarContainer.classList.add('navbar__container-js-scrolled');
    } else {
      navbarContainer.classList.remove('navbar__container-js-scrolled');
    }
    lastScrollPosition = newScrollPosition;
  };
  // https://www.yourwebtech.info/tutorial/how-to-detect-vertical-scroll-direction-using-javascript/
  window.addEventListener('scroll', debounce(checkScrollPosition, 200));
})();

export default handleNavbarOnScroll;
