const SELECTED_REGION_FILL = "#5C4831";
const DEFAULT_REGION_FILL = "#DBD2C0";
const REGION_IDS = ["north", "northeast", "central", "west", "east", "south"];

const regionButtons = Array.from(document.querySelectorAll(".region-btn"));
const provinceInfoPanels = Array.from(document.querySelectorAll(".province-info"));

function setRegionFill(regionId, fill) {
  const regionElement = document.getElementById(regionId);

  if (!regionElement) {
    return;
  }

  const fillTargets = regionElement.tagName.toLowerCase() === "g" ? regionElement.querySelectorAll("path") : [regionElement];

  fillTargets.forEach((target) => {
    target.setAttribute("fill", fill);
  });
}

function updateProvinceSelection(selectedValue, selectedRegion) {
  REGION_IDS.forEach((regionId) => {
    setRegionFill(regionId, regionId === selectedRegion ? SELECTED_REGION_FILL : DEFAULT_REGION_FILL);
  });

  regionButtons.forEach((button) => {
    const isActive = button.dataset.value === selectedValue;

    button.classList.toggle("btn-cocoa", isActive);
    button.classList.toggle("btn-tan", !isActive);
  });

  provinceInfoPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.value === selectedValue);
  });
}

regionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateProvinceSelection(button.dataset.value, button.dataset.region);
  });
});

const initialSelectedButton = document.querySelector(".region-btn.btn-cocoa") || regionButtons[0];

if (initialSelectedButton) {
  updateProvinceSelection(initialSelectedButton.dataset.value, initialSelectedButton.dataset.region);
}
