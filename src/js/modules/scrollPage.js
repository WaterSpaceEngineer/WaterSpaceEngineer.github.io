import headerTopFixation from './headerTopFixation';
import animationOnScroll from './animationOnScroll';

const scrollPage = () => {
  
  window.addEventListener('scroll', () => {
    // Фіксація header-top при scroll
    headerTopFixation();

    // Анімація при scroll
    animationOnScroll();
  });
};

export default scrollPage;