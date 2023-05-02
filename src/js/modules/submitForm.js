const submitForm = () => {
  const forms = document.querySelectorAll('form');
  const languagePage = document.documentElement.lang;

  let message = {};

  const loadingMessage = {
    loading: '../img/spinner.svg'
  };

  if(languagePage === 'uk') {
    message = { ...loadingMessage, ... {
      success: 'Повідомлення відправлено',
      failure: 'Виникла помилка'
    }}
  } else if (languagePage === 'ru') {
    message = {...loadingMessage, ... {
      success: 'Сообщение отправлено',
      failure: 'Возникла ошибка'
    }}
  } else if (languagePage === 'en') {
    message = {...loadingMessage, ... {
      success: 'Message sent',
      failure: 'An error has occurred'
    }}
  }

  forms && forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      const statusBlock = form.querySelector('.form-block__message');
      e.preventDefault();

      const loadingMessage = document.createElement('img');
      loadingMessage.src = message.loading;
      loadingMessage.classList.add('loading');
      statusBlock.append(loadingMessage);
      
      const formData = new FormData(form);

      // const object = {};
      // formData.forEach((value, key) => {
      //   object[key] = value
      // })

      // http://2.waterspace.pl.ua/call.php
      fetch('http://2.waterspace.pl.ua/call.php', {
        method: "POST",
        body: formData,
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(object)
      })
      .then(data => data.text())
      // .then(response => response.json())
      

      .then(res => {
        console.log(res.status);
        showStatus(message.success, 'message-success');
        // if(res.status === 200 || res.status === 201) {
        //   console.log(res.status);
        //   showStatus(message.success, 'message-success');
        // }
        // else {
        //   console.log(res.status);
        //   throw new Error(res.status);
        // }
        form.reset();
      })
      .catch(() => {
        showStatus(message.failure, 'message-errow');
      })
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
  }
}

export default submitForm;