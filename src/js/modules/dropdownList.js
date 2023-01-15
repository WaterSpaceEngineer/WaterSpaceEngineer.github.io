const dropdownList = () => {
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

  const dropdown = document.querySelectorAll('[data-dropdown]');

  if(dropdown.length > 0 && isMobile.any()) {

    document.addEventListener('click', (e) => {
      const targetElement = e.target;

      if(targetElement.classList.contains('dropdown__btn')) {
        targetElement.closest('.dropdown').classList.toggle('_dropdown-open');
      }

      if(!targetElement.closest('.dropdown') && document.querySelectorAll('.dropdown._dropdown-open').length > 0) {
        document.querySelectorAll('.dropdown._dropdown-open').forEach(item => {
          item.classList.remove('_dropdown-open');
        })
      }
    });
  }
}

export default dropdownList;