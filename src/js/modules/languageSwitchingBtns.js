const languageSwitchingBtns = () => {
  const languageBtns = document.querySelectorAll('.language-btn');

  languageBtns && languageBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const href = window.location.href;
      const lang = '/' + e.target.dataset.pageLanguage;
      const pageHeadLang = document.documentElement.lang;
      let languagePage = '';
      
      const creatingNewHref = () => {
        const new_href = href.replace(languagePage, lang);
        window.location.href = new_href;
      };

      if (pageHeadLang === 'uk') {
        languagePage = '/ukr';
        creatingNewHref();
      } else if (pageHeadLang === 'en') {
        window.location.pathname === '/eng/' ? window.location.href = window.location.origin : (languagePage = '/eng', creatingNewHref());
      } else if (pageHeadLang === 'ru') {
        window.location.pathname === '/rus/' ? window.location.href = window.location.origin : (languagePage = '/rus', creatingNewHref());
      } 
    })
  })
}

export default languageSwitchingBtns;