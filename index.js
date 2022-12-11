import projects from "./projects.js";
import { 
      renderItemsListsUIComponent, 
      renderProjectsOnUI, 
      toggleCssClassesToSameTypeElements 
} from "./ui.js";
import { useTranslation } from "./language.js";

const $btnCurriculum = document.querySelector('#btn-curriculum')
const $projectCategoriesButtons = document.querySelectorAll(".projects-categories--button")
const $allTranslationTags = document.querySelectorAll("[data-translation-id]")

$btnCurriculum.addEventListener("click", e => {
      window.open("./assets/pdf/Currículum Vitae Carlos Humberto Quesada - English.pdf")
})

$projectCategoriesButtons.forEach(button => {
      button.addEventListener("click", e => {

            renderProjectsOnUI({ 
                  containerElementId: "projects-grid",
                  UIComponent: renderItemsListsUIComponent({
                        itemsList: projects,
                        category: button.id
                  })
            });

            toggleCssClassesToSameTypeElements({
                  elementsSelector: ".projects-categories--button",
                  targetElement: button,
                  className: "active"
            })
      })
})

window.addEventListener("load", e => {
      $allTranslationTags.forEach(translationTag => {
            translationTag.textContent = useTranslation({ 
                  key: translationTag.dataset.translationId,
                  language: 'en-US'
            })
      })
})

document.addEventListener("DOMContentLoaded", e => {
      renderProjectsOnUI({ 
            containerElementId: "projects-grid",
            UIComponent: renderItemsListsUIComponent({
                  itemsList: projects,
                  category: ""
            })
       })
})

