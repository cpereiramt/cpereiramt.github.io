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
    // First filter only with Type of Project
    let filtered = projectData.filter(
      (project) => project.projectType === state.typeOfProjectSelected
    );
    const filteredArrayWithProjectType =
      filterByTechnologies(selectedTecnologies);

    // If any technology is selected then filter per array of Technologies
    if (filteredArrayWithProjectType.length > 0) {
      filtered = filtered.map((projects) => {
        const result = projects.projectTechnologiesUsed.filter((tech) =>
          filteredArrayWithProjectType.includes(tech)
        );
        return result.map((boolean) => {
          if (boolean) {
            return projects;
          }
          if (!boolean) {
            return null;
          }
          return;
        });
      });
      // Filter the unique projects results; 
      const uniqueTechnologiesResults = new Set(filtered.flat());
      TemplateCarouselItemProject([...uniqueTechnologiesResults]);
      return;
    }

    TemplateCarouselItemProject(state.projects);
  });
};
