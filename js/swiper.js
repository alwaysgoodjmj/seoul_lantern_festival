document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.slide-container', {
      loop: true,
      autoplay: {
          delay: 4000,
          disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
}); 
  
  