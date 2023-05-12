let calculate = document.querySelector("#calc-button");
let currentDpi = document.querySelector("#current-dpi");
let ingameSens = document.querySelector("#ingame-sens");
let newDpi = document.querySelector("#new-dpi");
let sensText = document.querySelector("#new-sens");

calculate.addEventListener("click", (event) => {
  event.preventDefault();
  let eDpi = currentDpi.value * ingameSens.value;
  let newSens = eDpi / newDpi.value;

  sensText.innerText = `New Sensitivity: ${newSens}`;
});
