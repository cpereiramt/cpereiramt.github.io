export { fillTypeOfProjectSelect };
import state from "/data/applicationState.js";
import { onChangeProjectType } from "/events/projectTypeSelectOnChange.js";

const fillTypeOfProjectSelect = () => {
  const select = document.getElementById("project-type-select");
  select.addEventListener(
    "change",
    function (e) {
      state.typeOfProjectSelected = e.target.value;
      onChangeProjectType();
    },
    true
  );
  const { projectsType } = state;
  const optionDefault = document.createElement("option");
  optionDefault.value = "DEFAULT";
  optionDefault.text = "Please choose a option";
  select.add(optionDefault);
  projectsType.map((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    select.add(option);
  });
};
