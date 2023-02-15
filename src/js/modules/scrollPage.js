import headerTopFixation from './headerTopFixation';
import animationOnScroll from './animationOnScroll';
import subcategoryTopFixation from './subcategoryTopFixation';

const scrollPage = () => {
  
  window.addEventListener('scroll', () => {
    // Фіксація header-top при scroll
    headerTopFixation();

    // Фіксація subcategory при scroll
    subcategoryTopFixation();

    // Анімація при scroll
    animationOnScroll();
  });
};

export default scrollPage;