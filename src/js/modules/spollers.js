const spollers = () => {
  const toggleButtons = document.querySelectorAll('[data-spoller-btn]');
  
  toggleButtons && toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.target;
      e.preventDefault();

      target.classList.toggle('button-active');
      
      target.nextElementSibling.classList.toggle('content-open');
    })
  })
}

export default spollers;
