const accordion = () => {
  const toggleButtons = document.querySelectorAll('[data-accordion-btn]');
  
  toggleButtons && toggleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const target = e.target;
      e.preventDefault();

      target.classList.toggle('button-active');
      
      target.nextElementSibling.classList.toggle('content-open');
    })
  })
};

export default accordion;
