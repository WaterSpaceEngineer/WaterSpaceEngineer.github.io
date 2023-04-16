const blockTopFixation = (blockSelector) => {
  const block = document.querySelector(blockSelector);
  
  if(block) {
    const getParametersHeader = document.querySelector('.header').getBoundingClientRect();
    const getParametersHeaderMain = document.querySelector('.header-main').getBoundingClientRect();
    const heroActionsSection = document.querySelector('.hero-actions__section');
    const heroActionsContainer = heroActionsSection.querySelector('.hero-actions__container');
    const getParametersheroActions = heroActionsSection.getBoundingClientRect();
    const getParametersBlock = block.getBoundingClientRect();

    let getPaddingBottomHeroActionsSection = parseInt(getComputedStyle(heroActionsSection).paddingBottom);
    let getRowGapHeroActionsContainer = parseInt(getComputedStyle(heroActionsContainer).rowGap);

    if (
      document.documentElement.scrollTop >
        getParametersHeader.height +
        getParametersheroActions.height -
        getParametersBlock.height -
        getPaddingBottomHeroActionsSection -
        getRowGapHeroActionsContainer / 2 
        // 232.5
        &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      block.classList.add("fix");
      block.style.paddingTop = `${getParametersHeaderMain.height + (getRowGapHeroActionsContainer / 4)}px`;
      block.style.paddingBottom = `${(getRowGapHeroActionsContainer / 4)}px`;
    } else if (
      document.documentElement.scrollTop <=
        getParametersHeader.height +
        getParametersheroActions.height -
        getPaddingBottomHeroActionsSection
        // 219.5
        &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      block.classList.remove("fix");
      block.style.paddingTop = '';
      block.style.paddingBottom = '';
    }
  }
}

export default blockTopFixation;