import state from "/data/applicationState.js";
import { mutateTecnologiesUsed } from "../data/applicationState.js";
import { fillTechnologiesSelect } from "/render/renderTechnologiesSelect.js";
import projectData from "/data/projectsData.js";

const filterTechnologiesByProjectType = (projectType) => {
  if (state.typeOfProjectSelected === "DEFAULT") {
    state.projects = projectData;
    mutateTecnologiesUsed(state);
    fillTechnologiesSelect();
    return;
  }
  const filteredProjects = projectData.filter((project) => {
    return project.projectType === projectType;
  });

  state.projects = filteredProjects;
  mutateTecnologiesUsed(state);
  fillTechnologiesSelect();
};

export function onChangeProjectType() {
  return filterTechnologiesByProjectType(state.typeOfProjectSelected);
}
