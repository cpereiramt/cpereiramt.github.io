import * as applicationPoint from "/utils/applicationPoint.js";
import projectData from "/data/projectsData.js";

const state = {
  projects: [],
  projectsType: [],
  technologiesUsed: [],
  typeOfProjectSelected: "default",
  view: applicationPoint.NOT_STARTED, // application actual point
};

// Add project info Here
state.projects = projectData;

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
