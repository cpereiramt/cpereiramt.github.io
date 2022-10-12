import * as projectType from "/utils/projectsTypes.js";
import * as technologiesTypes from "/utils/technologiesTypes.js";
import * as applicationPoint from "/utils/applicationPoint.js";
const state = {
  projects: [],
  projectsType: [],
  technologiesUsed: [],
  view: applicationPoint.NOT_STARTED, // application actual point
};

// Add project info Here
state.projects = [
  {
    projectID: 1,
    projectTitle: "Vigilante 8 2 Page tribute",
    projectURL: "https://claytonpereira.com/Proj_bloco3_vigilante_page/",
    projectOverview:
      " Vigilante 8: 2nd Offense is a vehicular combat game developed by Luxoflux and published by Activision, it was first released in 1999",
    projectFeaturedImage: "images/projects/Vigilante_Page_img.png",
    projectType: projectType.FRONT_END,
    projectTechnologiesUsed: [
      technologiesTypes.JAVASCRIPT,
      technologiesTypes.HTML,
      technologiesTypes.CSS,
    ],
  },
  {
    projectID: 1,
    projectTitle: "Vigilante 8 2 Page tribute",
    projectURL: "https://claytonpereira.com/Proj_bloco3_vigilante_page/",
    projectOverview:
      " Vigilante 8: 2nd Offense is a vehicular combat game developed by Luxoflux and published by Activision, it was first released in 1999",
    projectFeaturedImage: "images/projects/Vigilante_Page_img.png",
    projectType: projectType.FRONT_END,
    projectTechnologiesUsed: [
      technologiesTypes.JAVASCRIPT,
      technologiesTypes.HTML,
      technologiesTypes.CSS,
    ],
  },
  {
    projectID: 1,
    projectTitle: "Vigilante 8 2 Page tribute",
    projectURL: "https://claytonpereira.com/Proj_bloco3_vigilante_page/",
    projectOverview:
      " Vigilante 8: 2nd Offense is a vehicular combat game developed by Luxoflux and published by Activision, it was first released in 1999",
    projectFeaturedImage: "images/projects/Vigilante_Page_img.png",
    projectType: projectType.FRONT_END,
    projectTechnologiesUsed: [
      technologiesTypes.JAVASCRIPT,
      technologiesTypes.HTML,
      technologiesTypes.CSS,
    ],
  },
  {
    projectID: 1,
    projectTitle: "Vigilante 8 2 Page tribute",
    projectURL: "https://claytonpereira.com/Proj_bloco3_vigilante_page/",
    projectOverview:
      " Vigilante 8: 2nd Offense is a vehicular combat game developed by Luxoflux and published by Activision, it was first released in 1999",
    projectFeaturedImage: "images/projects/Vigilante_Page_img.png",
    projectType: projectType.FRONT_END,
    projectTechnologiesUsed: [
      technologiesTypes.JAVASCRIPT,
      technologiesTypes.HTML,
      technologiesTypes.CSS,
    ],
  },
];

/* Mutating projectsType from state */

const uniqueProjectTypes = new Set(
  Array.from(state.projects, (item) => item.projectType)
);
state.projectsType = [...uniqueProjectTypes];

/* Mutating technologiesUsed from state */
const uniqueTechnologiesUsedSet = new Set();

state.projects.map((item) =>
  item.projectTechnologiesUsed.map((subItem) =>
    uniqueTechnologiesUsedSet.add(subItem)
  )
);
state.technologiesUsed = [...uniqueTechnologiesUsedSet];

export default state;
