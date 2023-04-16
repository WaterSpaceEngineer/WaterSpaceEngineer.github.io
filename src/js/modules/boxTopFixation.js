const boxTopFixation = (boxSelector) => {
  const box = document.querySelector(boxSelector);

  if(box) {
    const getParametersHeader = document.querySelector('.header').getBoundingClientRect();
    const getParametersHeaderMain = document.querySelector('.header-main').getBoundingClientRect();
    let getPaddingTopBox = parseInt(getComputedStyle(box).paddingTop);
    console.log(getPaddingTopBox);

    if(
      document.documentElement.scrollTop > 
      getParametersHeader.height
      &&
      window.matchMedia("(min-width: 768px)").matches
      ) {
        box.classList.add("fix");
        box.style.paddingTop = `${getParametersHeaderMain.height}px`;
    } else if (
      document.documentElement.scrollTop <= getParametersHeader.height &&
      window.matchMedia("(min-width: 768px)").matches
      ) {
        box.classList.remove("fix");
        box.style.paddingTop = '';
    }
  }
  
};

export default boxTopFixation;