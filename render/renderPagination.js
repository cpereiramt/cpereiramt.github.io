export { templateNavigation };
import {paginate} from "/utils/pagination.js"
import state from "/data/applicationState.js"
import {handlePaginationClick} from '/events/navigationButtonClicked.js'


const clearPagination = (paginationContainer) => {
 
  paginationContainer.innerHTML="";

};


function templateNavigation(paginationData = { previousPage: null,
  nextPage: null,
  total:1,
  totalPages: 1,
  items: 1}) {  
  let containerNavigation = document.querySelector(".navigation-container");
  clearPagination(containerNavigation)
 const {totalPages, previousPage, nextPage} = paginationData;

 let pages = ".".repeat(totalPages);
 pages = pages.split("")
   const navigationTemplate = `
    <nav>
    <ul class="pagination pagination-lg">
      <li class="page-item ${previousPage === null ? 'disabled' : ''}" id="previousButton" >
        <button class="page-link" >Previous</button>
      </li>
      ${pages.map((_ , index) => {
        return  `<li class="page-item ${state.projectsListCurrentPage === index +1 ? "active" : "disabled" }"><button class="page-link"  >${index + 1 }</button></li>`
       })}
      <li class="page-item ${nextPage === null ? 'disabled' : ''}" id="nextButton" >
        <button class="page-link" >Next</button>
      </li>
    </ul>
  </nav>
`

const sanitezedNavigationTemplate = navigationTemplate.split(",").join(" ")
containerNavigation.innerHTML += sanitezedNavigationTemplate;
handlePaginationClick()
}