new Swiper('.swiper2', {
    direction:'horizontal',
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
  
    pagination: {
      el: '.swiper2-pagination',
      type:'progressbar',
    },
  
    navigation: {
      nextEl: '.swiper2-button-next',
      prevEl: '.swiper2-button-prev',
    },
  });