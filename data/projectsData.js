import * as projectType from "/utils/projectsTypes.js";
import * as technologiesTypes from "/utils/technologiesTypes.js";

const projectData = [
  {
    projectID: 1,
    projectTitle: "Vigilante 8 2 Page tribute",
    projectURL: "https://claytonpereira.com/Proj_bloco3_vigilante_page/",
    projectShortDescription: "Vigilante 8 2 Page tribute",
    projectCompleteDescription:" Vigilante 8: 2nd Offense is a vehicular combat game developed by Luxoflux and published by Activision, it was first released in 1999",
    projectFeaturedImage: "images/projects/Vigilante_Page_img.png",
    projectType: projectType.FRONT_END,
    projectTechnologiesUsed: [
      technologiesTypes.JAVASCRIPT,
      technologiesTypes.HTML,
      technologiesTypes.CSS,],
    versions: [
      {
        versionID: 1,
        versionTitle: "1.0.0",
        versionURL: "https://claytonpereira.com/Proj_bloco3_vigilante_page/",
        versionOverview: "First version of the project developed for the web design course at Trybe as a final project of block 3",
        versionFeaturedImage: "images/projects/Vigilante_Page_img.png"
      },
      {
        versionID: 2,
        versionTitle: "1.0.1",
        versionURL: "https://claytonpereira.com/Proj_bloco3_vigilante_page/",
        versionOverview: "minor release of project with some improvements in performance",
        versionFeaturedImage: "images/projects/Vigilante_Page_img.png"
      }
    ]
  },
  {
    projectID: 2,
    projectTitle: "Hub da web Blog",
    projectURL: "https://blog.hubdaweb.com.br",
    projectShortDescription: "Hub da web Blog",
    projectCompleteDescription:
      "Brazilian blog about web development, with articles about HTML, CSS, JavaScript, React, Vue, Node, and more.",
    projectFeaturedImage: "images/projects/blog_hubdaweb_img.png",
    projectType: projectType.FRONT_END,
    projectTechnologiesUsed: [
      technologiesTypes.NEXT_JS,
    technologiesTypes.AWS_CLOUDFRONT,
    technologiesTypes.AWS_S3,],
    versions: []
  }
];

export default projectData;
