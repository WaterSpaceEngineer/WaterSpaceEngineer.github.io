const navigationFixation = (headerSelector, headerTopSelector, headerMainSelector, mainPageSelector) => {
  const header = document.querySelector(headerSelector);
  const getParametersHeader = document.querySelector(headerTopSelector).getBoundingClientRect();
  const getParametersHeaderMain = document.querySelector(headerMainSelector).getBoundingClientRect();
  const mainPage = document.querySelector(mainPageSelector);
  
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > getParametersHeader.height && window.matchMedia('(min-width: 768px)').matches) {
      header.classList.add('nav-fix');
      mainPage.style.paddingTop = `${getParametersHeaderMain.height}px`;
    } else {
      header.classList.remove('nav-fix');
      mainPage.style.paddingTop = ``;
    }
  });
};

export default navigationFixation;