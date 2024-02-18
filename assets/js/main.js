

var swiper = new Swiper('.swiper-rem', {
  slidesPerView: 1,
 
  spaceBetween: 10,
 
  speed: 1000,
  slidesPerGroup: 4,
  autoplay:
  {
    delay: 5000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
   pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
});



var swiper = new Swiper('.swiper-img-sec', {
  slidesPerView: 3,
 
  spaceBetween: 30,
 
  speed: 1000,
  slidesPerGroup: 4,
  autoplay:
  {
    delay: 5000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
   pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
});