export { onClickFilterButtonEvent };
import state from "/data/applicationState.js";
import projectData from "/data/projectsData.js";
import { TemplateCarouselItemProject } from "/render/renderProjectData.js";

const onClickFilterButtonEvent = () => {
  const buttonFilter = document.getElementById("filterButton");
  buttonFilter.addEventListener("click", () => {
    if (state.typeOfProjectSelected === "DEFAULT") {
      state.projects = projectData;
      return TemplateCarouselItemProject(state.projects);
    }
    state.projects = projectData.filter(
      (project) => project.projectType === state.typeOfProjectSelected
    );
    TemplateCarouselItemProject(state.projects);
  });
};
