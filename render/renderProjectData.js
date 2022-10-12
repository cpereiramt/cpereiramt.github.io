export { TemplateCarouselItemProject };
let containerProjects = document.querySelector(".card-container");
function TemplateCarouselItemProject(JsonProjectData) {
  let carouselItemTemplate;
  JsonProjectData.forEach((element) => {
    carouselItemTemplate = `
  <div class="col">
  <div class="card shadow-sm">
  <img
  class="bd-placeholder-img card-img-top"
  src="${element.projectFeaturedImage}"
      />
  <div class="card-body">
  <h3  class="card-tittle">${element.projectTitle}</h3>
    <p class="card-text"> ${element.projectOverview} </p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
      <a class="btn btn-sm btn-outline-secondary"
      href="${element.projectURL}" target="blank" >More info</a>
      </div>
    </div>
   </div>
 </div>
 </div>
`;

    containerProjects.innerHTML += carouselItemTemplate;
  });
}
