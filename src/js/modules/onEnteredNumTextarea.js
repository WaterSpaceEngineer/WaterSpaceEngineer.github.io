const onEnteredNumTextarea = async (form) => {

  const formTextarea = await form.querySelector('.form-block__textarea');
  const formTextareaMaxLength = formTextarea.maxLength;
  const textareaPresentValue = form.querySelector('[data-textarea-present]');
  const textareamaxValue = form.querySelector('[data-textarea-max]');

  textareamaxValue.innerHTML = formTextareaMaxLength;

  formTextarea.addEventListener('input', () => {
    textareaPresentValue.innerHTML = formTextarea.value.length;
  })
};

export default onEnteredNumTextarea;