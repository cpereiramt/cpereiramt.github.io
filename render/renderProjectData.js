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
  <h3  class="fs-2">${element.projectTitle}</h3>
    <p class="card-text"> ${element.projectOverview} </p>
    <p class="fs-3"> Project Type: </p>
    <p class="fs-5 text-muted"> ${element.projectType} </p>
    <p class="fs-3"> Technologies Used: </p>
   <p class="fs-5 text-muted"> ${element.projectTechnologiesUsed} </p>
    <br />
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
      <button onclick="openModal('modal-1')" class="btn btn-sm btn-outline-secondary"
       >More info</button>
      </div>
    </div>
   </div>
 </div>
 </div>
`;

    containerProjects.innerHTML += carouselItemTemplate;
  });
}
