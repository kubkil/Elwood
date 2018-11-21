const handleMailTo = (() => {
  const mailLink = document.querySelector('.footer__link--gmail');
  const decode = mail => {
    const decoded = [];
    for (let i = 0; i < mail.length; i += 1) {
      const j = mail.charCodeAt(i);
      if (j >= 33 && j <= 126) {
        decoded[i] = String.fromCharCode(33 + ((j + 14) % 94));
      } else {
        decoded[i] = String.fromCharCode(j);
      }
    }
    return decoded.join('');
  };

  const showMail = () => {
    const mailAddress = decode('6=H@@54C27EDo8>2:=]4@>');
    mailLink.setAttribute('href', `mailto:${mailAddress}`);
  };

  mailLink.addEventListener('mousedown', showMail);
})();

export default handleMailTo;
