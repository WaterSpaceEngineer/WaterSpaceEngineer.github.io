const languageSwitchingBtns = () => {
  const languageBtns = document.querySelectorAll('.language-btn');

languageBtns && languageBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const href = window.location.href;
    const lang = '/' + e.target.dataset.pageLanguage;
    const pageHeadLang = document.documentElement.lang;
    let languagePage = '';

    const createNewHref = () => {
      const newHref = href.replace(languagePage, lang);
      window.location.href = newHref;
    };

    switch (pageHeadLang) {
      case 'uk':
        languagePage = '/ukr';
        createNewHref();
        break;
      case 'en':
        if (window.location.pathname === '/eng/' && e.target.dataset.pageLanguage === 'ukr') {
          window.location.href = window.location.origin;
        } else {
          languagePage = '/eng';
          createNewHref();
        }
        break;
      case 'ru':
        if (window.location.pathname === '/rus/' && e.target.dataset.pageLanguage === 'ukr') {
          window.location.href = window.location.origin;
        } else {
          languagePage = '/rus';
          createNewHref();
        }
        break;
      default:
        break;
    }
  })
})
}

export default languageSwitchingBtns;