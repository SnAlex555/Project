const swiper = new Swiper('.swiper1', {
  direction:'horizontal',
  slidesPerView: 4.5,
  spaceBetween: 0,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type:'progressbar',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});