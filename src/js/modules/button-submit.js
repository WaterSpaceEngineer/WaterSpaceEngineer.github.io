const submitButton = () => {
  const submitButtons = document.querySelectorAll('.submit-button');

  submitButtons && submitButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('submiting');
      // btn.innerHTML = '';
      setTimeout(() => {
        btn.classList.remove('submiting');
        // btn.innerHTML = 'Готово';
      }, 3000)
    })
  })
}

export default submitButton;