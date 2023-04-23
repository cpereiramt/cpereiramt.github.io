function renderTemplatePopup(element) {
  console.log(element, "-------------------> element");
 let containerPopup = document.querySelector(".jw-modal");
 let popupTemplate =  `
 <div class="jw-modal-body">
 <button onclick="closeModal()">Close</button>
 <h4 class="col s12">Vigilante 8 2 Offense Page Tribute Release notes</h4>
 <ul class="collapsible"> 
  <li>
     <div class="collapsible-header"> <i class="material-icons">add_box</i> Version 1.0 
     </div>
     <div class="collapsible-body"> 
         <p class="flow-text">This is the original web page version maked for web design course at Trybe as finish project
          of block 3
         </p>
     <h6>Technology used </h6>
     <p>HTML5, CSS3, JAVASCRIPT</p>
     <a class="flow-text" href="version-1.0/homePage.html">Acess Site <i class="small material-icons">open_in_new</i> </a>
     </div>        
   </li>
   <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li> 
</ul>

</div>`;
  
  containerPopup.innerHTML = popupTemplate ;

  }
  
