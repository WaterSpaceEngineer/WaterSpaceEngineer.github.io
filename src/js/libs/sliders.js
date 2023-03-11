import Swiper, { Autoplay, Navigation, Thumbs, Pagination } from "swiper";

new Swiper('.hero-swiper', {
  modules: [Autoplay],
  loop: true,
  speed: 750,

  autoplay: {
    delay: 3500,
  },
});

const galleryThumbs = new Swiper('.product-gallery-thumbs', {
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

const galleryTop = new Swiper('.product-gallery-top', {
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

const galleryThumbsSecond = new Swiper('.gallery-thumbs-second', {
  modules: [Navigation],
  // якщо зображень більше чотирьох розкоментувати loop та slidesPerView змінити на 4
  loop: true, 
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTopSecond = new Swiper('.gallery-top-second', {
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
    swiper: galleryThumbsSecond,
  },
});

const galleryThumbsThird = new Swiper('.gallery-thumbs-third', {
  modules: [Navigation],
  // якщо зображень більше чотирьох розкоментувати loop та slidesPerView змінити на 4
  loop: true, 
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTopThird = new Swiper('.gallery-top-third', {
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
    swiper: galleryThumbsThird,
  },
});

const galleryThumbsFourth = new Swiper('.gallery-thumbs-fourth', {
  modules: [Navigation],
  // якщо зображень більше чотирьох розкоментувати loop та slidesPerView змінити на 4
  loop: true, 
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTopFourth = new Swiper('.gallery-top-fourth', {
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
    swiper: galleryThumbsFourth,
  },
});

const galleryThumbsFiveth = new Swiper('.gallery-thumbs-fiveth', {
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

const galleryTopFiveth = new Swiper('.gallery-top-fiveth', {
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
    swiper: galleryThumbsFiveth,
  },
});

const galleryThumbsSixth = new Swiper('.gallery-thumbs-sixth', {
  modules: [Navigation],
  // якщо зображень більше чотирьох розкоментувати loop та slidesPerView змінити на 4
  loop: true, 
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTopSixth = new Swiper('.gallery-top-sixth', {
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
    swiper: galleryThumbsSixth,
  },
});

const galleryThumbsSeventh = new Swiper('.gallery-thumbs-seventh', {
  modules: [Navigation],
  // якщо зображень більше чотирьох розкоментувати loop та slidesPerView змінити на 4
  loop: true, 
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTopSeventh = new Swiper('.gallery-top-seventh', {
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
    swiper: galleryThumbsSeventh,
  },
});

const galleryThumbsEighth = new Swiper('.gallery-thumbs-eighth', {
  modules: [Navigation],
  // якщо зображень більше чотирьох розкоментувати loop та slidesPerView змінити на 4
  loop: true, 
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTopEighth = new Swiper('.gallery-top-eighth', {
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
    swiper: galleryThumbsEighth,
  },
});

const galleryThumbsNinety = new Swiper('.gallery-thumbs-ninety', {
  modules: [Navigation],
  loop: true, 
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTopNinety = new Swiper('.gallery-top-ninety', {
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
    swiper: galleryThumbsNinety,
  },
});

const galleryThumbsTenth = new Swiper('.gallery-thumbs-tenth', {
  modules: [Navigation],
  loop: true, 
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTopTenth = new Swiper('.gallery-top-tenth', {
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
    swiper: galleryThumbsTenth,
  },
});

const galleryThumbsEleventh = new Swiper('.gallery-thumbs-eleventh', {
  modules: [Navigation],
  loop: true, 
  spaceBetween: 10,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const galleryTopEleventh = new Swiper('.gallery-top-eleventh', {
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
    swiper: galleryThumbsEleventh,
  },
});