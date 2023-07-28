import enteredCountSymbolsTextarea from './enteredCountSymbolsTextarea';

const submitForm = () => {
  const forms = document.querySelectorAll('form');
  const languagePage = document.documentElement.lang;

  const messages = {
    uk: {
      success: 'Повідомлення відправлено',
      failure: 'Виникла помилка',
      recaptchaFailure: 'Ви не пройшли перевірку reCAPTCHA',
      loading: '../img/spinner.svg'
    },
    ru: {
      success: 'Сообщение отправлено',
      failure: 'Возникла ошибка',
      recaptchaFailure: 'Вы не прошли проверку reCAPTCHA',
      loading: '../img/spinner.svg'
    },
    en: {
      success: 'Message sent',
      failure: 'An error has occurred',
      recaptchaFailure: 'You failed the reCAPTCHA check',
      loading: '../img/spinner.svg'
    }
  };

  let message = messages[languagePage];

  forms && forms.forEach(item => {
    enteredCountSymbolsTextarea(item);
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      const statusBlock = form.querySelector('.form-block__message');
      const recaptchaId = form.querySelector('.g-recaptcha').getAttribute('id');
      let captcha;
      let captchaId;

      switch(recaptchaId) {
        case 'recaptcha-1':
          captcha = grecaptcha.getResponse(widgetId1); // widgetId1 підтягується з <head>
          captchaId = widgetId1;
          break;
        case 'recaptcha-2':
          captcha = grecaptcha.getResponse(widgetId2);
          captchaId = widgetId2;
          break;
        default:
          captcha = grecaptcha.getResponse();
          break;
      }

      console.log(captchaId);
      
      e.preventDefault();

      if(!captcha.length) {
        captchaFailure();
      } else {
        const loadingMessage = document.createElement('img');
        loadingMessage.src = message.loading;
        loadingMessage.classList.add('loading');
        statusBlock.append(loadingMessage);
        
        const formData = new FormData(form);

        fetch('https://waterspace.ua/forms.php', {
          method: "POST",
          body: formData,
        })
        .then(res => {
          
          if(res.status === 200 || res.status === 201) {
            showStatus(message.success, 'message-success');
            form.reset();
            form.querySelector('[data-textarea-present]').innerHTML = 0;
            grecaptcha.reset(captchaId);
          } else {
            showStatus(message.failure, 'message-errow');
            grecaptcha.reset(captchaId);
            throw new Error(res.status);
          }
        })
        .catch(() => {
          showStatus(message.failure, 'message-errow');
          grecaptcha.reset(captchaId);
        })
      }
    });

    function showStatus(messageText, messageClass) {
      const statusBlock = form.querySelector('.form-block__message');
      statusBlock.innerHTML = `${messageText}`;
      statusBlock.classList.add(messageClass);

      setTimeout(() => {
        statusBlock.innerHTML = '';
        statusBlock.classList.remove(messageClass);
      }, 4000);
    }

    function captchaFailure() {
      const statusBlock = form.querySelector('.form-block__message');
      statusBlock.classList.add('message-errow');
      statusBlock.innerHTML = `${message.recaptchaFailure}`;

      setTimeout(() => {
        statusBlock.innerHTML = '';
        statusBlock.classList.remove('message-errow');
      }, 5000);
    }
  }
}


export default submitForm;
