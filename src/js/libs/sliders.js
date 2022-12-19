const swiper = new Swiper('.swiper', {
  loop: true,

  autoplay: {
    delay: 3500,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },

  // effect: "cube",
  // grabCursor: true,
  // cubeEffect: {
  //   shadow: true,
  //   slideShadows: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },
});