export { onClickFilterButtonEvent };
import state from "/data/applicationState.js";
import projectData from "/data/projectsData.js";
import { TemplateCarouselItemProject } from "/render/renderProjectData.js";

const filterByTechnologies = (arrayOfTechnologies) => {
  const selectedTecnologies = [];
  for (var option of arrayOfTechnologies.options) {
    if (option.selected) {
      selectedTecnologies.push(option.value);
    }
  }
  return selectedTecnologies;
};

const onClickFilterButtonEvent = () => {
  const buttonFilter = document.getElementById("filterButton");
  const selectedTecnologies = document.getElementById("multiple-select");

  buttonFilter.addEventListener("click", () => {
    if (state.typeOfProjectSelected === "DEFAULT") {
      state.projects = projectData;
      return TemplateCarouselItemProject(state.projects);
    }

    // continuar daqui para tentar filtrar por tipo de projeto e tipo de tecnologia .
    const filtered = projectData.filter(
      (project) => project.projectType === state.typeOfProjectSelected
    );
    const filteredArrayWithProjectType =
      filterByTechnologies(selectedTecnologies);

    TemplateCarouselItemProject(state.projects);
  });
};
