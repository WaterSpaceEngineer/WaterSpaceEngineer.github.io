const submitForm = () => {
  const forms = document.querySelectorAll('form');
  const submitButtons = document.querySelectorAll('.submit-button');
  const languagePage = document.documentElement.lang;

  let message = {};

  if(languagePage === 'uk') {
    message = {... {
      original: 'Відправити-2',
      success: 'Повідомлення відправлено',
      failure: 'Виникла помилка'
    }}
  } else if (languagePage === 'ru') {
    message = {... {
      original: 'Отправить',
      success: 'Сообщение отправлено',
      failure: 'Возникла ошибка'
    }}
  }

  submitButtons && submitButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.add('submiting');
      setTimeout(() => {
        btn.classList.remove('submiting');
      }, 3000)
    })
  })

  forms && forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);

      fetch('server1.php', {
        method: "POST",
        body: formData
      })
      // .then(data => data.text())
      .then(res => {
        if(res.status === 200 || res.status === 201) {
          console.log(res.status);
          showStatus(message.success, message.original, '#388E3C');
        }
        else {
          console.log(res.status);
          throw new Error(res.status);
        }
        form.reset();
      })
      .catch(() => {
        showStatus(message.failure, message.original, '#D32F2F');
      })
    });

    function showStatus(message, original, bgColor) {
      const submitButton = form.querySelector('.submit-button');
      const submitButtonText = submitButton.querySelector('.submit-button__text');
      
      submitButton.disabled = true;
      submitButtonText.innerHTML = `${message}`;
      submitButton.style.backgroundColor = bgColor;
    
      setTimeout(() => {
        submitButton.style.backgroundColor = '';
        submitButton.disabled = false;
        submitButtonText.innerHTML = `${original}`;
      }, 6000)
    }
  }
}

export default submitForm;