// Функція перевіряє, чи присутній хеш у URL, і якщо так, то вона 
// викликає клік на відповідному елементі на сторінці

const clickOnHash = () => {
  if(window.location.hash) {
    document.querySelector(window.location.hash).click();
  }
}

export default clickOnHash;