export { fillTechnologiesSelect };
import state from "/data/applicationState.js";

const fillTechnologiesSelect = () => {
  const select = document.getElementById("multiple-select");
  const { technologiesUsed } = state;
  const optionDefault = document.createElement("option");
  technologiesUsed.map((item) => {
    const option = document.createElement("option");
    option.value = item;
    option.text = item;
    select.add(option);
  });
};
