export {handlePaginationClick}
import state from '/data/applicationState.js';
import {templateNavigation} from '/render/renderPagination.js'
import {paginate} from '/utils/pagination.js'
import { TemplateCarouselItemProject } from '/render/renderProjectData.js'


const handlePaginationClick = () => {
    const navContainer = document.getElementsByClassName('pagination');
    const buttonsList = Array.from(navContainer[0].children)
    buttonsList.map(button => {
       button.addEventListener("click", (e) => {
        const buttonNumber = parseInt(e.target.outerText,10)
        if (!isNaN(buttonNumber)) {
          state.projectsListCurrentPage = buttonNumber
          const buttonPrevious = document.getElementById("previousButton")
          const buttonNext = document.getElementById("nextButton")
          state.paginate = paginate(state.filteredProjects, state.projectsListCurrentPage);
          templateNavigation(state.paginate);
          TemplateCarouselItemProject(state.paginate.items)          
        }
        else {
          const buttonPrevious = document.getElementById("previousButton")
          const buttonNext = document.getElementById("nextButton")
          const paginateObject = paginate(state.projects, state.projectsListCurrentPage);         
          templateNavigation();
          }
       })
    })
  }