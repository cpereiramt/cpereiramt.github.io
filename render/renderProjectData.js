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
  <div class="card shadow-sm card text-center"  onclick="openModal('modal-1', ${JSON.stringify(element).replace(/"/g, "'")})">
  <img
  class="bd-placeholder-img card-img-top"
  src="${element.projectFeaturedImage}"
      />
  <div class="card-img-overlay">

  <div class="badge text-wrap card-title">
 <p class="fs-3">${element.projectTitle}</p> 
</div>

  </div>
  <div class="card-body">
    <p class="card-text"> ${element.projectShortDescription} </p>
    <p class="fs-3"> Project Type: </p>
    <p class="fs-5 text-muted"> ${element.projectType} </p>
    <div class="d-flex justify-content-between align-items-center">
    </div>
   </div>
 </div>
 </div>
`;

    containerProjects.innerHTML += carouselItemTemplate;
  });
}
