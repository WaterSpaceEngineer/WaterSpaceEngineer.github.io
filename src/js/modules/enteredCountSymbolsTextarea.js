const enteredCountSymbolsTextarea = async (form) => {

  const formTextarea = await form.querySelector('.form-block__textarea');
  const textareaPresentValue = form.querySelector('[data-textarea-present]');
  const textareamaxValue = form.querySelector('[data-textarea-max]');

  textareamaxValue.innerHTML = formTextarea.maxLength;

  formTextarea.addEventListener('input', () => {
    textareaPresentValue.innerHTML = formTextarea.value.length;
  })
};

export default enteredCountSymbolsTextarea;