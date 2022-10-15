import { TemplateCarouselItemProject } from "/render/renderProjectData.js";
import { fillTypeOfProjectSelect } from "/render/renderTypeOfProjectSelect.js";
import { fillTechnologiesSelect } from "/render/renderTechnologiesSelect.js";
import { onClickFilterButtonEvent } from "/events/projectListOnfilterButtonClicked.js";
import {buttonSeeAllClicked} from "/events/seeAllButtonClicked.js"
import {templateNavigation} from '/render/renderPagination.js'
import state from "/data/applicationState.js";

function initProjectData() {
  const buttonFilter = document.getElementById("filterButton");
  const paginationNav = document.getElementsByClassName("navigation-container");
  const cardContainer = document.getElementsByClassName("card");
  buttonFilter.disabled = true;

  TemplateCarouselItemProject(state.projects);
  if(cardContainer.length > 6 ) {
    paginationNav[0].style.visibility = "visible";  
}
else {
   
  paginationNav[0].style.visibility = "hidden";  
}
  fillTypeOfProjectSelect();
  fillTechnologiesSelect();
  onClickFilterButtonEvent();
  templateNavigation();
  buttonSeeAllClicked();
}

initProjectData();
