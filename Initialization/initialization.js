import { loadJSON as InitJSONToObject } from './InitJSONToObject.js';
import {TemplateCarouselItemProject} from '/render/renderProjectData.js';

function initializeMaterializeCSS() {  
  document.addEventListener('load', function() {
    var elems = document.querySelectorAll('select');
    var options = document.querySelectorAll('option')
    var instances = M.FormSelect.init(elems, options);
    });
 
 
  document.addEventListener('load', function() {
    var carousel = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(carousel, {fullwidth: true});
  });
  
  }

  function initProjectData() {
    InitJSONToObject(function(response) {
     // Parse JSON string into object
       var actual_JSON = JSON.parse(response);
       // console.log(actual_JSON);
       TemplateCarouselItemProject(actual_JSON);
    });
   }

   
   initializeMaterializeCSS();
   initProjectData();       
