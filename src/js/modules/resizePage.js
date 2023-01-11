import headerFixationOnMobile from './headerFixationOnMobile';

const resizePage = () => {
  window.addEventListener('resize', () => {
    headerFixationOnMobile();
  });

  headerFixationOnMobile();
}

export default resizePage;