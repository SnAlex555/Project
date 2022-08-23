const fourSwiper = new Swiper('.swiper4', {
  direction:'horizontal',
  slidesPerView: 2.2,
  spaceBetween: 15,
  loop: true,

  pagination: {
    el: '.swiper4-pagination',
    type:'progressbar',
  },

  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
    },
  });