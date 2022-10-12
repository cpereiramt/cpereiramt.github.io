export { fillTypeOfProjectSelect };
import state from "/data/applicationState.js";

const fillTypeOfProjectSelect = () => {
  const select = document.getElementById("projetct-type-select");
  const { projectsType } = state;
  const optionDefault = document.createElement("option");
  optionDefault.value = "default";
  optionDefault.text = "Please choose a option";
  select.add(optionDefault);
  projectsType.map((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    select.add(option);
  });
};
