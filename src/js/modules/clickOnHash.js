const clickOnHash = () => {
  if(window.location.hash) {
    document.querySelector(window.location.hash).click();
  }
}

export default clickOnHash;