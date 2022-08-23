var swiper = new Swiper('.swiper3', {
    direction:'horizontal',
    slidesPerView: 1.5,
    spaceBetween: 0,
    loop: true,
  
    pagination: {
      el: '.swiper3-pagination',
      type:'progressbar',
    },
  
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  });