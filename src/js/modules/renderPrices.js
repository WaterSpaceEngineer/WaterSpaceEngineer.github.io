import { getResource } from "../services/service";

const renderPrices = async () => {
  const codeNames = document.querySelectorAll('[data-item-code]');
  const discountСodeNames = document.querySelectorAll('[data-item-discount-code]');
  const languagePage = document.documentElement.lang;

  const data = await getResource('../data/bd.json');

  const codeDataMap = {};
  data.prices.forEach(({ code, priceHr, priceDoll, priceDiscountHr, priceDiscountDoll }) => {
    codeDataMap[code] = { priceHr, priceDoll, priceDiscountHr, priceDiscountDoll };
  });
  
  codeNames.forEach(item => {
    const itemCode = item.getAttribute('data-item-code');
    const codeData = codeDataMap[itemCode];

    const isUkOrRu = languagePage === 'uk' || languagePage === 'ru';
    const isEn = languagePage === 'en';
    
    if (codeData) {
      if (isUkOrRu && Number(codeData.priceHr) > 0) {
        item.innerText = codeData.priceHr;
      } else if (isEn && Number(codeData.priceDoll) > 0) {
        item.innerText = codeData.priceDoll;
      } else {
        item.parentElement.style.display = 'none';
        item.parentElement.nextElementSibling.style.display = 'block';
      }
    }
  });

  discountСodeNames.forEach(item => {
    const discountСodeName = item.getAttribute('data-item-discount-code');
    const codeData = codeDataMap[discountСodeName];
    if (codeData) {
      item.innerText = languagePage === 'uk' || languagePage === 'ru' ? codeData.priceDiscountHr : codeData.priceDiscountDoll;
    }
  });
};

// const renderPrices = () => {
//   const codeNames = document.querySelectorAll('[data-item-code]');
//   const discountСodeNames = document.querySelectorAll('[data-item-discount-code]');

//   if (codeNames.length > 0) {
//     getResource('../data/bd.json')
//       .then(data => {
//         const languagePage = document.documentElement.lang;
//         const codeDataMap = createCodeDataMap(data.prices);

//         setPrices(codeNames, codeDataMap, languagePage);
//         if(discountСodeNames.length > 0) {
//           setPrices(discountСodeNames, codeDataMap, languagePage, true);
//         }
//       });
//   }
// };

// function createCodeDataMap(prices) {
//   return prices.reduce((map, { code, priceHr, priceDoll, priceDiscountHr, priceDiscountDoll }) => {
//     map[code] = { priceHr, priceDoll, priceDiscountHr, priceDiscountDoll };
//     return map;
//   }, {});
// }

// function setPrices(items, codeDataMap, languagePage, isDiscount = false) {
//   items.forEach(item => {
//     const codeAttributeName = isDiscount ? 'data-item-discount-code' : 'data-item-code';
//     const itemCode = item.getAttribute(codeAttributeName);
//     const codeData = codeDataMap[itemCode];
    
//     if (codeData) {
//       item.innerText = languagePage === 'uk' || languagePage === 'ru' ? 
//                       (isDiscount ? codeData.priceDiscountHr : codeData.priceHr) : 
//                       (isDiscount ? codeData.priceDiscountDoll : codeData.priceDoll);
//     }
//   });
// }

export default renderPrices;