const $scrollToTopBtn = document.querySelector('.scroll-to-top-btn');


document.addEventListener("scroll", () => {
      if(window.scrollY > 770) {
            // Poner la clase al navbar para que aparezca
      };

      if(window.scrollY > 739) {
            $scrollToTopBtn.classList.add('scroll-to-top-btn--active');
      } else {
            $scrollToTopBtn.classList.remove('scroll-to-top-btn--active');
      };
});