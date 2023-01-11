const headerFixationOnMobile = () => {
  const getParametersHeader = document.querySelector('.header').getBoundingClientRect();
  const mainPage = document.querySelector('.page');

  if(window.matchMedia('(max-width: 767px)').matches) {
    mainPage.style.paddingTop = `${getParametersHeader.height}px`;
  }
  else {
    mainPage.style.paddingTop = ``;
  }
  
}

export default headerFixationOnMobile;