import projects from "./projects.js";
import {
  renderItemsListsUIComponent,
  renderProjectsOnUI,
  toggleCssClassesToSameTypeElements,
} from "./ui.js";
import { useTranslation } from "./language.js";
import { THEMES } from "./constants.js";

const $btnCurriculum = document.querySelector("#btn-curriculum");
const $projectCategoriesButtons = document.querySelectorAll(
  ".projects-categories--button"
);
const $allTranslationTags = document.querySelectorAll("[data-translation-id]");

$btnCurriculum.addEventListener("click", (e) => {
  window.open(
    "./assets/pdf/Currículum Vitae Carlos Humberto Quesada - English.pdf"
  );
});

$projectCategoriesButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    renderProjectsOnUI({
      containerElementId: "projects-grid",
      UIComponent: renderItemsListsUIComponent({
        itemsList: projects,
        category: button.id,
      }),
    });

    toggleCssClassesToSameTypeElements({
      elementsSelector: ".projects-categories--button",
      targetElement: button,
      className: "active",
    });
  });
});

window.addEventListener("load", (e) => {
  $allTranslationTags.forEach((translationTag) => {
    translationTag.textContent = useTranslation({
      key: translationTag.dataset.translationId,
      language: "en-US",
    });
  });
});

document.addEventListener("DOMContentLoaded", (e) => {
  renderProjectsOnUI({
    containerElementId: "projects-grid",
    UIComponent: renderItemsListsUIComponent({
      itemsList: projects.sort((firstElement, secondElement) => {
        const firstCategory = firstElement.category.toUpperCase(); // ignore upper and lowercase
        const secondCategory = secondElement.category.toUpperCase(); // ignore upper and lowercase
        if (firstCategory < secondCategory) {
          return -1;
        }
        if (firstCategory > secondCategory) {
          return 1;
        }
        return 0;
      }),
      category: "",
    }),
  });
});

document.querySelector("#theme-button").addEventListener("click", (e) => {
  if (e.target.textContent === THEMES.LIGHT) {
    document.documentElement.style.setProperty(
      "--selected-background-color",
      "#1f1f1f"
    );
    document.documentElement.style.setProperty("--selected-font-color", "#FFF");
    e.target.textContent = THEMES.DARK;
  } else {
    document.documentElement.style.setProperty(
      "--selected-background-color",
      "#e3e3e3"
    );
    document.documentElement.style.setProperty(
      "--selected-font-color",
      "#1f1f1f"
    );
    e.target.textContent = THEMES.LIGHT;
  }
});
