var swiper = new Swiper('.swiper1', {
  direction:'horizontal',
  slidesPerView: 4.5,
  spaceBetween: 0,
  loop: true,

  pagination: {
    el: '.swiper-pagination1',
    type:'progressbar',
  },

  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
});