const handleSiemaClass = (() => {
  const siemaDiv = document.querySelector('.navbar__container')
    .nextElementSibling;

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

  const media1025 = window.matchMedia('(max-width: 1025px)');

  const siemaMQ = media => {
    if (media.matches) {
      removeSiemaClass();
    } else {
      addSiemaClass();
    }
  };

  siemaMQ(media1025);
  media1025.addListener(siemaMQ);
})();

export default handleSiemaClass;
