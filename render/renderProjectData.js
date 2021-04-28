export { TemplateCarouselItemProject };
let containerProjects = document.querySelector('.card-container');
// let cardProjectsItem = document.createElement('div');
// cardProjectsItem.setAttribute('class','carousel-item');

function TemplateCarouselItemProject(JsonProjectData) {
let carouselItemTemplate;
JsonProjectData.forEach(element => {
  /*   
  <div class="col">
                  <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        
                    <div class="card-body">
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>  
  */


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

/*         <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img
              class="bd-placeholder-img card-img-top"
              src="${element.projectFeaturedImage}"
            />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-6"
              >${element.projectTitle}<i class="material-icons right"
                >more</i
              ></span
            >
            <p>
              <a
                href="${element.projectURL}"
                target="blank"
                >Live Project Demo</a
              >
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4"
              >Project Overview<i class="material-icons right">close</i></span
            >
            <p>
             ${element.projectOverview}
            </p>
          </div>
     </div>  */    
     
     console.log(carouselItemTemplate);
     
     containerProjects.innerHTML +=carouselItemTemplate;


});
console.log(containerProjects);
}