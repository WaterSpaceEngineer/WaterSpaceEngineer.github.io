import headerTopFixation from './headerTopFixation';
import animationOnScroll from './animationOnScroll';
import blockTopFixation from './blockTopFixation';
import boxTopFixation from './boxTopFixation';

const scrollPage = () => {
  
  window.addEventListener('scroll', () => {
    // Фіксація header-top при scroll
    headerTopFixation();

    // Фіксація block при scroll
    blockTopFixation('.hero-actions__subcategory');

    // Фіксація box при scroll
    boxTopFixation('.fag-top__section');

    // Анімація при scroll
    animationOnScroll();
  });
};

export default scrollPage;