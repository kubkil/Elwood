import Siema from 'siema';

const handleSiema = (() => {
  const mySiema = new Siema({
    loop: true,
    perPage: {
      769: 2,
      1025: 3
    }
  });

  const siemaBtns = (() => {
    const prevBtn = document.querySelector('.gallery__btn--prev');
    const nextBtn = document.querySelector('.gallery__btn--next');

    prevBtn.addEventListener('click', () => mySiema.prev());
    nextBtn.addEventListener('click', () => mySiema.next());
  })();
})();

export default handleSiema;
