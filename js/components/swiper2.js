const secondSwiper = new Swiper('.swiper2', {
  direction:'horizontal',
  slidesPerView: 2.2,
  spaceBetween: 15,
  loop: true,

  pagination: {
    el: '.swiper2-pagination',
    type:'progressbar',
  },

  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
    },
  });