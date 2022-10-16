export {handlePaginationClick}
import state from '/data/applicationState.js';
import {templateNavigation} from '/render/renderPagination.js'

const handlePaginationClick = () => {
    const navContainer = document.getElementsByClassName('pagination');
    const buttonsList = Array.from(navContainer[0].children)
    buttonsList.map(button => {
       button.addEventListener("click", (e) => {
        const buttonNumber = parseInt(e.target.outerText,10)
        if (!isNaN(buttonNumber)) {
          state.projectsListCurrentPage = buttonNumber
          templateNavigation();
        }
        else {

        }
       })
    })
  }