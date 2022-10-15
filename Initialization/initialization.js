import { TemplateCarouselItemProject } from "/render/renderProjectData.js";
import { fillTypeOfProjectSelect } from "/render/renderTypeOfProjectSelect.js";
import { fillTechnologiesSelect } from "/render/renderTechnologiesSelect.js";
import { onClickFilterButtonEvent } from "/events/projectListOnfilterButtonClicked.js";
import state from "/data/applicationState.js";

function initProjectData() {
  const buttonFilter = document.getElementById("filterButton");
  buttonFilter.disabled = true;
  TemplateCarouselItemProject(state.projects);
  fillTypeOfProjectSelect();
  fillTechnologiesSelect();
  onClickFilterButtonEvent();
}

initProjectData();
