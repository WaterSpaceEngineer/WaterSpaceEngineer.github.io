const animationOnScroll = () => {

  const animeteItems = document.querySelectorAll('.animate');

  if(animeteItems.length > 0) {
    const triggerHeight = window.innerHeight / 5*4;

    animeteItems.forEach(item => {
      const boxTop = item.getBoundingClientRect().top;
  
      if(boxTop < triggerHeight) {
        item.classList.add('show');
      } else {
        if(!item.classList.contains('animate-no-hide')) {
          item.classList.remove('show');
        }
      }
    });
  }
}

export default animationOnScroll;