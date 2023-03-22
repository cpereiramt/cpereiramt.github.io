import * as projectType from "/utils/projectsTypes.js";
import * as technologiesTypes from "/utils/technologiesTypes.js";

const projectData = [
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
      technologiesTypes.CSS,],
  },
  {
    projectID: 1,
    projectTitle: "Hub da web Blog",
    projectURL: "https://blog.hubdaweb.com.br",
    projectOverview:
      "Brazilian blog about web development, with articles about HTML, CSS, JavaScript, React, Vue, Node, and more.",
    projectFeaturedImage: "images/projects/blog_hubdaweb_img.png",
    projectType: projectType.FRONT_END,
    projectTechnologiesUsed: [
      technologiesTypes.NEXT_JS,
    technologiesTypes.AWS_CLOUDFRONT,
    technologiesTypes.AWS_S3,],
  }
];

export default projectData;
