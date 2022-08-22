var secondswiper = new Swiper('.swiper2', {
  direction:'horizontal',
  slidesPerView: 2.5,
  spaceBetween: 30,
  loop: true,
  
  pagination: {
    el: '.swiper-pagination2',
    type:'progressbar',
    },
  
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
    },
  });