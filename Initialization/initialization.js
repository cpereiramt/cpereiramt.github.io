import { loadJSON as InitJSONToObject } from './InitJSONToObject.js';
import {TemplateCarouselItemProject} from '/render/renderProjectData.js';



  function initProjectData() {
    InitJSONToObject(function(response) {
     // Parse JSON string into object
       var actual_JSON = JSON.parse(response);
       // console.log(actual_JSON);
       TemplateCarouselItemProject(actual_JSON);
    });
   }

   initProjectData();       
