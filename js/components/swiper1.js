var swiper = new Swiper('.swiper1', {
  direction:'horizontal',
  spaceBetween: 0,
  breakpoints:{
    1600:{
      slidesPerView:3.5,
      
    },
    1400:{
      slidesPerView:3,
    },
    1150:{
      slidesPerView:2.5,
    },
    // 768:{
    //   slidesPerView:
    // },
    500:{
      slidesPerView:2,
    },
    500:{
      slidesPerView:1.5,
    },
    320:{
      slidesPerView:1,
    }
  

  } ,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type:'progressbar',
  },

  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },

  
});