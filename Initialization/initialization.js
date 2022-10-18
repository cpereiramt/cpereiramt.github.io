import { TemplateCarouselItemProject } from "/render/renderProjectData.js";
import { fillTypeOfProjectSelect } from "/render/renderTypeOfProjectSelect.js";
import { fillTechnologiesSelect } from "/render/renderTechnologiesSelect.js";
import { onClickFilterButtonEvent } from "/events/projectListOnfilterButtonClicked.js";
import {templateNavigation} from '/render/renderPagination.js'
import state from "/data/applicationState.js";
import {paginate} from '/utils/pagination.js'

function initProjectData() {
  const buttonFilter = document.getElementById("filterButton");
  const paginationNav = document.getElementsByClassName("navigation-container");
  const cardContainer = document.getElementsByClassName("card");
  buttonFilter.disabled = true;

  TemplateCarouselItemProject(state.projects);
  if(cardContainer.length > 6 ) {
    paginationNav[0].style.visibility = "visible";
    const paginateObject = paginate(state.projects, state.projectsListCurrentPage);
    TemplateCarouselItemProject(paginateObject.items)

}
else {
     paginationNav[0].style.visibility = "hidden";  
}
  fillTypeOfProjectSelect();
  fillTechnologiesSelect();
  onClickFilterButtonEvent();
  templateNavigation();
}

initProjectData();
