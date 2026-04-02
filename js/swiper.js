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

    const contentSlides = document.querySelectorAll('.content-slide');

    contentSlides.forEach((el) => {
        const isArchive = el.closest('.archive-container');

        new Swiper(el, {
            loop: true,
            
            slidesPerView: isArchive ? 3 : 1,
            spaceBetween: isArchive ? 30 : 0,
            centeredSlides: true,
            
            navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
            },

            // 반응형
            breakpoints: {
                1024: {
                    slidesPerView: isArchive ? 3 : 1,
                    spaceBetween: isArchive ? 40 : 0
                }
            }
        });
    });
}); 
  
  