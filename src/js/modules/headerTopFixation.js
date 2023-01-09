const headerTopFixation = () => {
  const header = document.querySelector('.header');
  const getParametersHeader = document.querySelector('.header__container').getBoundingClientRect();
  const getParametersHeaderMain = document.querySelector('.header-main').getBoundingClientRect();
  const mainPage = document.querySelector('.page');

  if (document.documentElement.scrollTop > getParametersHeader.height && window.matchMedia('(min-width: 768px)').matches) {
    header.classList.add('nav-fix');
    mainPage.style.paddingTop = `${getParametersHeaderMain.height}px`;
  } else {
    header.classList.remove('nav-fix');
    mainPage.style.paddingTop = ``;
  }
}

export default headerTopFixation;