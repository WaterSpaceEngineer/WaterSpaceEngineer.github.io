const swiper = new Swiper('.actual-swiper', {
    loop: true,

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});