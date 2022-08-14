const swiper = new Swiper('.swiper2', {
    direction:'horizontal',
    slidesPerView: 3,
    spaceBetween: 20,
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