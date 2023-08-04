import { getResource } from "../services/service";

const renderPrices = () => {
  const codeNames = document.querySelectorAll('[data-item-code]');
  const discountСodeNames = document.querySelectorAll('[data-item-discount-code]');

  if(codeNames.length > 0) {
    getResource('../data/bd-hr.json')
      .then(data => {
        setPrices(data.prices);

        if(discountСodeNames.length > 0) {
          setPriceDiscount();
        }
      });
  }

  function setPrices(data) {
    
    const codesFromData = data.map(item => item.code);

    codeNames.forEach(item => {
      const itemCode = item.getAttribute('data-item-code');
  
      if (codesFromData.includes(itemCode)) {
        const codeData = data.find(item => item.code === itemCode);
        if (itemCode === codeData.code) {
          item.innerText = codeData.price;
        }
      }
    });
  }

  function setPriceDiscount() {
    console.log('true');
  }
};

export default renderPrices;