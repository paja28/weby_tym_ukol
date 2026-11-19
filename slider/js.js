
const swiper = new Swiper('.swiper', {
  speed: 1000,
  loop: true,
  loopAddBlankSlides: false,
  loopPreventsSliding: false,
  effect: "cube",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  autoplay: {
    delay: 0
  }
});
