export { templateNavigation };
import {paginate} from "/utils/pagination.js"
import state from "/data/applicationState.js"

function templateNavigation() {
  let containerNavigation = document.querySelector(".navigation-container");
 const paginationData = paginate(state.projects,2);  
 const {totalPages} = paginationData;

 let pages = ".".repeat(totalPages);
 pages = pages.split("")
   const navigationTemplate = `
    <nav>
    <ul class="pagination pagination-lg">
      <li class="page-item">
        <a class="page-link">Previous</a>
      </li>
      ${pages.map((_ , index) => {
        return  `<li class="page-item ${state.projectsListCurrentPage === index +1 ? "active" : "disabled" }"><a class="page-link"  >${index + 1 }</a></li>`
       })}
      <li class="page-item">
        <a class="page-link" href="">Next</a>
      </li>
    </ul>
  </nav>
`

const sanitezedNavigationTemplate = navigationTemplate.split(",").join(" ");
containerNavigation.innerHTML += sanitezedNavigationTemplate;

}