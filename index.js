import projects from "./projects.js";

const $scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
const $form = document.querySelector('.form');
const $btnMailto = document.querySelector('#btn-mailto')
const $projects = document.querySelector('#projects');
const $btnCurriculum = document.querySelector('#btn-curriculum')

function handleSubmit(e) {
      e.preventDefault()

      const form = new FormData(this);

      $btnMailto.setAttribute('src', `mailto:carlosquesadaumana@gmail.com?subject=${form.get('name')}&body=${form.get('message')}`);
      $btnMailto.click();
};

document.addEventListener("scroll", () => {
      if (window.scrollY > 770) {
            // Poner la clase al navbar para que aparezca
      };

      if (window.scrollY > 739) {
            $scrollToTopBtn.classList.add('scroll-to-top-btn--active');
      } else {
            $scrollToTopBtn.classList.remove('scroll-to-top-btn--active');
      };
});

$btnCurriculum.addEventListener("click", e => {
      window.open("./assets/pdf/Currículum Vitae Carlos Humberto Quesada - English.pdf")
})

function renderProjectsOnUI() {

      let resultHTML = "";

      for (let index = 0; index < projects.length; index++) {
            const project = projects[index]

            resultHTML += `
                  <div class="projects-card"> <img class="projects-card__img" src=${project.imageUrl} alt="">
                        <div class="projects-card__info">
                              <h3 class="projects-card__title">${project.name}</h3>
                              <p class="projects-card__category ${project.category === "Landing page" ? "projects-card__category--landing-page" : "projects-card__category--web-application"}">${project.category}</p> 
                              <p class="projects-card__text">${project.description}</p> 
                              <a class="projects-card__link projects-card__link--live" href=${project.reposLinks.productionUrl} target="_blank"> <span>See Project</span> <i class="fas fa-eye"></i> </a> 
                              <a class="projects-card__link projects-card__link--code" href=${project.reposLinks.githubUrl} target="_blank"> <span>See code</span> <i class="fab fa-github"></i> </a>
                        </div>
                  </div>
            `
      }

      $projects.innerHTML = resultHTML;
      $projects.classList.add("projects-grid")
}

// $form.addEventListener('submit', handleSubmit)

document.addEventListener("DOMContentLoaded", e => {
      renderProjectsOnUI()
})