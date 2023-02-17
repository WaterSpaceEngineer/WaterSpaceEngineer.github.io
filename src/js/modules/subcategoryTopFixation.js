const subcategoryTopFixation = () => {
  const subcategory = document.querySelector('.hero-actions__subcategory');

  if(subcategory) {
    const getParametersHeader = document.querySelector('.header').getBoundingClientRect();
    const getParametersHeaderMain = document.querySelector('.header-main').getBoundingClientRect();
    const heroActionsSection = document.querySelector('.hero-actions__section');
    const heroActionsContainer = heroActionsSection.querySelector('.hero-actions__container');
    const getParametersheroActions = heroActionsSection.getBoundingClientRect();
    const getParametersSubcategory = subcategory.getBoundingClientRect();

    let getPaddingBottomHeroActionsSection = parseInt(getComputedStyle(heroActionsSection).paddingBottom);
    let getRowGapHeroActionsContainer = parseInt(getComputedStyle(heroActionsContainer).rowGap);

    if (
      document.documentElement.scrollTop >
        getParametersHeader.height +
        getParametersheroActions.height -
        getParametersSubcategory.height -
        getPaddingBottomHeroActionsSection -
        getRowGapHeroActionsContainer / 2 
        // 232.5
        &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      subcategory.classList.add("fix");
      subcategory.style.paddingTop = `${getParametersHeaderMain.height + (getRowGapHeroActionsContainer / 4)}px`;
      subcategory.style.paddingBottom = `${(getRowGapHeroActionsContainer / 4)}px`;
    } else if (
      document.documentElement.scrollTop <=
        getParametersHeader.height +
        getParametersheroActions.height -
        getPaddingBottomHeroActionsSection
        // 219.5
        &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      subcategory.classList.remove("fix");
      subcategory.style.paddingTop = '';
      subcategory.style.paddingBottom = '';
    }
  }
}

export default subcategoryTopFixation;