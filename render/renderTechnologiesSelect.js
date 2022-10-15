export { fillTechnologiesSelect };
import state from "/data/applicationState.js";

const clearSelectOptions = (selectElement) => {
  const options = selectElement.getElementsByTagName("option");
  for (var i = options.length; i--; ) {
    selectElement.removeChild(options[i]);
  }
};
const fillTechnologiesSelect = () => {
  const select = document.getElementById("multiple-select");
  if (state.typeOfProjectSelected === 'DEFAULT') {
   select.disabled = true;  
  }
  clearSelectOptions(select);
  const { technologiesUsed } = state;
  technologiesUsed.map((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    select.add(option);
  });
};
