const navigationFixation = (navigationSelector, headerTopSelector) => {
  const header = document.querySelector(navigationSelector);
  const getParametersHeader = document.querySelector(headerTopSelector).getBoundingClientRect();
  
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > getParametersHeader.height && window.matchMedia('(min-width: 768px)').matches) {
      header.classList.add('nav-fix');
    } else {
      header.classList.remove('nav-fix');
    }
  });
};

export default navigationFixation;