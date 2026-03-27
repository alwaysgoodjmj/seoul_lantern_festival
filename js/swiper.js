document.addEventListener('DOMContentLoaded', () => {
    const mainSwiper = new Swiper('.main-slide', {
      loop: true,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
      pagination: {
        el: '.main-slide .swiper-pagination',
        clickable: true,
      }
    });

    const contentSwiper = new Swiper('.content-slide', {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
      navigation: {
        nextEl: '.content-slide .swiper-button-next',
        prevEl: '.content-slide .swiper-button-prev',
      },
      breakpoints: {
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 }
    }
    });
}); 
  
  