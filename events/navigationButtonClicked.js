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
          state.paginate = paginate(state.filteredProjects, state.projectsListCurrentPage);
          templateNavigation(state.paginate);
          TemplateCarouselItemProject(state.paginate.items)          
        }
       // check if button is next or previous and if page is not first or last and change page number accordingly
        if (e.target.outerText === 'Next') {
          if (state.projectsListCurrentPage !== state.paginate.totalPages) {
            state.projectsListCurrentPage += 1
            state.paginate = paginate(state.filteredProjects, state.projectsListCurrentPage);
            templateNavigation(state.paginate);
            TemplateCarouselItemProject(state.paginate.items)
          }
        } 
        if (e.target.outerText === 'Previous') {
          if (state.projectsListCurrentPage !== 1) {
            state.projectsListCurrentPage -= 1
            state.paginate = paginate(state.filteredProjects, state.projectsListCurrentPage);
            templateNavigation(state.paginate);
            TemplateCarouselItemProject(state.paginate.items)
          }
        }       
       })
    })
  }