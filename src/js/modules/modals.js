const modals = () => {
    function bindModal(triggerSelector, modalSelector, modalWrapSelector, modalBodySelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const modalWrap = document.querySelector(modalWrapSelector);
        const modalBody = document.querySelector(modalBodySelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]'); // необходим для работы со всеми модальными окнами
        const scroll = calcScroll();

        const pageUp = document.querySelector('.page-up');

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('fadeIn');
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`;
             pageUp.style.marginRight = `${scroll}px`;
                modalBody.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.classList.remove('fadeIn');
                item.classList.add('fadeOut');
    
                setTimeout(() => {
                    item.classList.remove('fadeOut')
                    item.style.display = "none";
                }, 350)

            });

            modal.classList.remove('fadeIn');
            modal.classList.add('fadeOut');

            setTimeout(() => {
                modal.classList.remove('fadeOut');
                modal.style.display = "none";
            }, 350)


            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
         pageUp.style.marginRight = `0px`;
            modalBody.style.marginRight = `0px`;
        });

        modalWrap.addEventListener('click', (e) => {
            if (e.target === modalWrap && closeClickOverlay) {
                windows.forEach(item => {
                    item.classList.remove('fadeIn')
                    item.classList.add('fadeOut')
        
                    setTimeout(() => {
                        item.classList.remove('fadeOut')
                        item.style.display = "none";
                    }, 350)
                });

                
                modal.classList.remove('fadeIn')
                modal.classList.add('fadeOut')
    
                setTimeout(() => {
                    modal.classList.remove('fadeOut')
                    modal.style.display = "none";
                }, 350)

                document.body.style.overflow = ""; 
                document.body.style.marginRight = `0px`;
             pageUp.style.marginRight = `0px`;
                modalBody.style.marginRight = `0px`;
            }
        });
    }

     // Popup который вызывается через время
     function showModalByTime(selector, time) {
        setTimeout(function() {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });

            if(!display) {
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = "hidden";

                const scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    const popups = document.querySelectorAll('[data-popup-ultraviolet]');
    if(popups.length > 0) {
        bindModal('.condition__button.delivery', '.popup-delivery', '.popup-delivery .popup__wrap', '.popup-delivery .popup__body', '.popup-delivery .popup__close');
        bindModal('.condition__button.payment', '.popup-payment', '.popup-payment .popup__wrap', '.popup-payment .popup__body', '.popup-payment .popup__close');
    }

    if(document.querySelector('[data-popup-faq]')) {
        bindModal('.fag-top__button', '.popup-faq', '.popup-faq .popup__wrap', '.popup-faq .popup__body', '.popup-faq .popup__close');
    }

    // showModalByTime('.popup', 60000);
   
};

export default modals;