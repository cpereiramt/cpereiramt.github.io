import { TemplateCarouselItemProject } from "/render/renderProjectData.js";
import { fillTypeOfProjectSelect } from "/render/renderTypeOfProjectSelect.js";
import { fillTechnologiesSelect } from "/render/renderTechnologiesSelect.js";
import { onClickFilterButtonEvent } from "/events/projectListOnfilterButtonClicked.js";
import {templateNavigation} from '/render/renderPagination.js'
import state from "/data/applicationState.js";
import {paginate} from '/utils/pagination.js'
import projectData from "/data/projectsData.js";

function initProjectData() {
  const buttonFilter = document.getElementById("filterButton");
  const paginationNav = document.getElementsByClassName("navigation-container");
  const cardContainer = document.getElementsByClassName("card");
  buttonFilter.disabled = true;
  state.filteredProjects = projectData
    paginationNav[0].style.visibility = "visible";
    state.paginate = paginate(state.filteredProjects, state.projectsListCurrentPage);
    TemplateCarouselItemProject(state.paginate.items)
  fillTypeOfProjectSelect();
  fillTechnologiesSelect();
  onClickFilterButtonEvent();
  templateNavigation(state.paginate);
}

initProjectData();
