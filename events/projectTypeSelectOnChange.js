import state from "/data/applicationState.js";
import { mutateTecnologiesUsed } from "../data/applicationState.js";
import { fillTechnologiesSelect } from "/render/renderTechnologiesSelect.js";
import projectData from "/data/projectsData.js";

const filterTechnologiesByProjectType = (projectType) => {
  const select = document.getElementById("multiple-select");
  const buttonFilter = document.getElementById("filterButton");

  if (state.typeOfProjectSelected === "DEFAULT") {
    state.projects = projectData;
    buttonFilter.disabled = true;
    mutateTecnologiesUsed(state);
    fillTechnologiesSelect();
    return;
  }
  const filteredProjects = projectData.filter((project) => {
    return project.projectType === projectType;
  });

  state.projects = filteredProjects;
  select.removeAttribute("disabled");
  buttonFilter.removeAttribute("disabled");
  mutateTecnologiesUsed(state);
  fillTechnologiesSelect();
};

export function onChangeProjectType() {
  return filterTechnologiesByProjectType(state.typeOfProjectSelected);
}
