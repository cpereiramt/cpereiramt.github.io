export { TemplateCarouselItemProject };

const clearCardProjects = (cardContainer) => {
  const options = cardContainer.getElementsByClassName("col");
  for (var i = options.length; i--; ) {
    cardContainer.removeChild(options[i]);
  }
};

function TemplateCarouselItemProject(JsonProjectData) {
  let containerProjects = document.querySelector(".card-container");
  let carouselItemTemplate;

  clearCardProjects(containerProjects);
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
