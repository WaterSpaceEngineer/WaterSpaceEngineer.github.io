const touchSubMenu = () => {
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

    if(window.matchMedia('(min-width: 768px)').matches && isMobile.any()) {
      if(targetElement.classList.contains('submenu-button')) {
        targetElement.closest('.submenu-item').classList.toggle('_hover');
      }

      if(!targetElement.closest('.submenu-item') && document.querySelectorAll('.submenu-item._hover').length > 0) {
        document.querySelectorAll('.submenu-item._hover').forEach(item => {
          item.classList.remove('_hover');
        })
      }
    }
  }
}

export default touchSubMenu;

