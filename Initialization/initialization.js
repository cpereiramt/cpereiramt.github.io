import { TemplateCarouselItemProject } from "/render/renderProjectData.js";
import state from "/data/applicationState.js";
function initProjectData() {
  console.log(state);
  TemplateCarouselItemProject(state.projects);
}

initProjectData();
