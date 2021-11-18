const $scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
const $form = document.querySelector('.form');
const $btnMailto = document.querySelector('#btn-mailto')
const $projects = document.querySelector('#projects');

function handleSubmit(e) {
      e.preventDefault()

      const form = new FormData(this);

      $btnMailto.setAttribute('src', `mailto:carlosquesadaumana@gmail.com?subject=${form.get('name')}&body=${form.get('message')}`);
      $btnMailto.click();
};

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

$form.addEventListener('submit', handleSubmit)