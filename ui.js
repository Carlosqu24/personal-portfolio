export function renderItemsListsUIComponent({ itemsList = [], category = "" }) {
  let resultHTML = "";

  const itemsListFiltered = itemsList.filter((project) =>
    category.length === 0 ? project : project.category === category
  );

  itemsListFiltered.map((project) => {
    resultHTML += `
                      <div class="projects-card">
                       <img class="projects-card__img" src=${
                         project.imageUrl
                       } alt="">
                            <div class="projects-card__info">
                                  <h3 class="projects-card__title">${
                                    project.name
                                  }</h3>
                                  <p class="projects-card__category ${
                                    project.category === "Landing page"
                                      ? "projects-card__category--landing-page"
                                      : "projects-card__category--web-application"
                                  }">${project.category}</p> 
                                  <p class="projects-card__text">${
                                    project.description
                                  }</p> 
                                  ${
                                    project.reposLinks.productionUrl
                                      ? `<a class="projects-card__link projects-card__link--live" href=${project.reposLinks.productionUrl} target="_blank"> <span data-translation-id="projects.seeProject">See Project</span> <i class="fas fa-eye"></i> </a> `
                                      : `<span style="padding: 12px;" class="projects-card__link">Coming soon!</span>`
                                  }
                                  
                                  

                                 
                            </div>
                      </div>
                `;
  });

  return resultHTML;
}

export function renderProjectsOnUI({
  containerElementId = "",
  UIComponent = "",
}) {
  document.getElementById(containerElementId).innerHTML = UIComponent;
}

export function toggleCssClassesToSameTypeElements({
  elementsSelector = "",
  targetElement = null,
  className = "",
}) {
  const elementsList = document.querySelectorAll(elementsSelector);

  elementsList.forEach((element) => {
    element.classList.remove(className);
  });

  targetElement.classList.add(className);
}
