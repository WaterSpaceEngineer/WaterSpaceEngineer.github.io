import Swiper, { Autoplay, Navigation, Thumbs, Pagination } from "swiper";

new Swiper('.hero-swiper', {
  modules: [Autoplay],
  loop: true,
  speed: 750,

  autoplay: {
    delay: 3500,
  },
});

const galleryThumbs = new Swiper('.gallery-thumbs', {
  modules: [Navigation],
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTop = new Swiper('.gallery-top', {
  modules: [Navigation, Thumbs, Pagination],
  loop: true,
  speed: 750,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});
