function renderTemplatePopup(element) {
 let containerPopup = document.querySelector(".jw-modal");
 let popupTemplate =  `
 <div class="jw-modal-body">
 <button onclick="closeModal()">Close</button>
 <h4 class="col s12">${element.projectTitle} - release notes </h4>
 <p  class="flow-text">${element.projectCompleteDescription}</p>
 <ul class="collapsible">
 ${element.versions.length > 0 ? element.versions.map(data => {
 return `<li>
  <div class="collapsible-header"> <i class="material-icons">add_box</i> Version ${data.versionTitle} 
  </div>
  <div class="collapsible-body"> 
      <p class="flow-text">${data.versionOverview} </p>
  <h6>Technology used </h6>
  <p>${element.projectTechnologiesUsed}</p>
  <a class="flow-text" href="version-1.0/homePage.html">Acess Site <i class="small material-icons">open_in_new</i> </a>
  </div>        
</li>`}).join('') : `<h4>No Version Found</h4>`}  
</ul>

</div>`;
  
  containerPopup.innerHTML = popupTemplate ;

  }
  
