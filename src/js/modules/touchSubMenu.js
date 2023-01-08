const touchSubMenu = (buttonSelector, itemSelector, itemHoverSelector) => {
  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };
  
  document.addEventListener('click', documentActions);

  // Фунція делегування події click
  function documentActions (e) {
    const targetElement = e.target;

    if(window.innerWidth > 768 && isMobile.any()) {
      if(targetElement.classList.contains(buttonSelector)) {
        targetElement.closest(itemSelector).classList.toggle('_hover');
      }

      if(!targetElement.closest(itemSelector) && document.querySelectorAll(itemHoverSelector).length > 0) {
        document.querySelectorAll(itemHoverSelector).forEach(item => {
          item.classList.remove('_hover');
        })
      }
    }
  }
}

export default touchSubMenu;

