export {buttonSeeAllClicked}
import {paginate} from "/utils/pagination.js"
import state from "/data/applicationState.js"

const buttonSeeAllClicked = () => {
  const paginationNav = document.getElementsByClassName("navigation-container");
  const buttonSeeAll = document.getElementById("seeAllButton");
  const cardContainer = document.getElementsByClassName("card");
  

   buttonSeeAll.addEventListener('click', () => {
    if(cardContainer.length > 6 ) {
        paginationNav[0].style.visibility = "visible";
    }
    else {
        paginationNav[0].style.visibility = "hidden"; 
    }

   })
}