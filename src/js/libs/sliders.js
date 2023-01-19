import Swiper, { Autoplay, Navigation, Thumbs } from "swiper";

new Swiper('.hero-swiper', {
  modules: [Autoplay],
  loop: true,
  speed: 750,

  autoplay: {
    delay: 3500,
  },
});

const galleryThumbs = new Swiper('.gallery-thumbs', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

const galleryTop = new Swiper('.gallery-top', {
  modules: [Navigation, Thumbs],
  loop: true,
  speed: 750,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
