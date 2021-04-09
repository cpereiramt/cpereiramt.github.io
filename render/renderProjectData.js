export { TemplateCarouselItemProject };
let carouselProjects = document.querySelector('.carousel');
let carouselProjectsItem = document.createElement('div');
carouselProjectsItem.setAttribute('class','carousel-item');

function TemplateCarouselItemProject(JsonProjectData) {
let carouselItemTemplate
JsonProjectData.forEach(element => {
carouselItemTemplate = `
         <div class="card">
           <div class="card-image waves-effect waves-block waves-light">
             <img
               class="activator"
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
      </div>     
`;
carouselProjectsItem.innerHTML = carouselItemTemplate;
carouselProjects.appendChild(carouselProjectsItem);
});
}