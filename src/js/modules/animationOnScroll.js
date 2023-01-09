const animationOnScroll = () => {

  const animeteItems = document.querySelectorAll('.animate');

  if(animeteItems.length > 0) {
    // function offset(elem) {
    //   const rect = elem.getBoundingClientRect();
    //   const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    //   return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    // }

    // animeteItems.forEach(item => {

    //   const animateHeight = item.offsetHeight;
    //   const animateOffset = offset(item).top;
    //   const animStart = 4;

    //   let animateItemPoint = window.innerHeight - animateHeight / animStart;

    //   if(animateHeight > window.innerHeight) {
    //     animateItemPoint = window.innerHeight - window.innerHeight / animStart;
    //   }

    //   if((pageYOffset > animateOffset - animateItemPoint) && pageYOffset < (animateOffset + animateHeight)) {
    //     item.classList.add('show');
    //   } else {
    //     item.classList.remove('show');
    //   }
    // });

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