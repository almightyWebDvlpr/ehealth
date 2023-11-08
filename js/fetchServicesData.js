import { fetchDataAndCreateTable } from "./fetchCatalogData.js";
import { showLoader, hideLoader } from "./loader.js";
import { getGlobalData } from "./dataStorage.js";
import { updateMarkers, clearMarkers } from "./markers.js";

let markers = [];
let filteredData = [];

function getDivisionsData(data, gid) {
  showLoader(gid);

  markers = data.map(function (obj) {
    return {
      name: obj.division_name,
      latlng: [obj.lat, obj.lng],
      info: obj.residence_addresses,
      division_id: obj.division_id,
      division_type: obj.division_type,
      area: obj.residence_area,
    };
  });

  hideLoader(gid);
}

function getServicesData(data, gid) {
  const output = document.getElementById(`output-${gid}`);

  if (!output) {
    // console.error("Output element not found for gid:", gid);
    return;
  }

  const uniqueServices = [];

  data.forEach((item) => {
    const updatedServices = item["division_services "].replace(
      /, (?![ТТГ])(?=[a-zа-яё])/g,
      " "
    );
    const servicesArray = updatedServices.split(", ");
    uniqueServices.push(...servicesArray);
  });

  const input = document.getElementById("autocompleteInput");
  const autocompleteList = document.getElementById("autocompleteList");
  const autocompleteIconClear = document.getElementById(
    "autocompleteIconClear"
  );

  // Create a data structure for faster searching
  const serviceSet = new Set(uniqueServices);

  // -------------By Area Select Filter----------------------------------------------------------------------------------------------

  fetchDataAndCreateTable(
    "1yGN0JyRwy8iWgGk6SLN6MyhWXpn-mS_JCHXwdft1rvs",
    "1755385483",
    () => {
      showLoader("1755385483");
      const globalData = getGlobalData();

      const noResulAreastDiv = document.getElementById("noResulAreast");
      const filterAreas = document.querySelector(`#filter-areas`);
      const areasSelctUl = filterAreas.querySelector(".options-list");
      const arrowIcon = document.querySelector(".arrow-icon");
      const areaSelectOption = filterAreas.querySelector(
        "#areas-selected-option"
      );

      const areaSelectIconClear = document.getElementById(
        "areaSelectIconClear"
      );

      filterAreas
        .querySelector(".select-header")
        .addEventListener("click", function () {
          arrowIcon.classList.toggle("rotate-icon");
          areasSelctUl.classList.toggle("show-options");
        });

      if (globalData) {
        const uniqueResidenceAreas = new Set(
          globalData.map((item) => item.residence_area)
        );

        // Convert the Set back to an array if needed
        const uniqueResidenceAreasArray = Array.from(uniqueResidenceAreas);

        uniqueResidenceAreasArray.forEach((residenceArea) => {
          if (residenceArea) {
            const areasSelctLi = document.createElement("li");
            areasSelctLi.setAttribute("data-value", residenceArea);
            areasSelctLi.textContent = residenceArea;
            areasSelctUl.appendChild(areasSelctLi);

            areasSelctLi.addEventListener("click", function () {
              const selectedValue = areasSelctLi.getAttribute("data-value");
              areaSelectOption.value = selectedValue;

              filterAreas.querySelector(".select-header p").textContent =
                areasSelctLi.textContent;
              areasSelctUl.classList.remove("show-options");
              arrowIcon.classList.remove("rotate-icon");

              const byAreaFilterdData = filteredData.filter(
                (item) => item.area === selectedValue
              );
              areaSelectIconClear.style.display = "block"; // Hide the clear icon
              if (byAreaFilterdData.length <= 0) {
                noResulAreastDiv.style.display = "block";
              } else {
                noResulAreastDiv.style.display = "none";
              }

              updateMarkers(byAreaFilterdData);
            });
          }
        });

        // Add an event listener to clear the areaSelectOption.value
        areaSelectIconClear.addEventListener("click", function (e) {
          e.stopPropagation();

          areaSelectOption.value = ""; // Clear the value
          filterAreas.querySelector(".select-header p").textContent =
            "Оберіть область";

          updateMarkers(filteredData); // Update markers with the filteredData
          document.getElementById("noResulAreast").style.display = "none";
          areaSelectIconClear.style.display = "none";
        });
      }
      hideLoader("1755385483");
    }
  );
  const noResultDiv = document.getElementById("noResult");
  input.addEventListener("input", function () {
    const areaSelectIconClear = document.getElementById("areaSelectIconClear");
    const value = this.value;
    closeAllLists();

    if (!value) {
      hideAndClearSelect();
      clearMarkers(); // Clear markers when input is empty
      return;
    }

    const matchingItems = Array.from(serviceSet).filter((service) =>
      service.toLowerCase().includes(value.toLowerCase())
    );

    if (matchingItems.length === 0) return;

    matchingItems.forEach((item) => {
      const option = document.createElement("div");
      option.className = "autocomplete-item";
      option.textContent = item;

      option.addEventListener("click", function () {
        input.value = item;

        closeAllLists();
        areaSelectIconClear.style.display = "none";
        hideAndClearSelect();
        const matchingIDs = [];
        data.filter((item) => {
          if (
            item["division_services "]
              .toLowerCase()
              .includes(input.value.toLowerCase())
          ) {
            matchingIDs.push(item["division_id "]);
          }
        });
        filteredData = markers.filter((item) =>
          matchingIDs.includes(item.division_id)
        );

        updateMarkers(filteredData);

        const autocompleteSelectHeader = document.querySelector(
          ".select-header.autocomplete-select-header"
        );

        if (filteredData.length > 0) {
          noResultDiv.style.display = "none";
          autocompleteSelectHeader.style.display = "flex";
        } else {
          autocompleteSelectHeader.style.display = "none"; // Hide the select if no elements in filteredData
          noResultDiv.style.display = "block";
        }
      });
      autocompleteList.appendChild(option);
    });
  });
  // Function to toggle the visibility of the clear icon
  function toggleClearIcon() {
    autocompleteIconClear.style.display = input.value ? "block" : "none";
  }

  // Event listener for input changes
  input.addEventListener("input", toggleClearIcon);

  // Function to clear the input, close the list, and remove markers
  function clearInputAndMarkers() {
    input.value = "";
    closeAllLists();
    clearMarkers();
    toggleClearIcon(); // Hide the clear icon
    hideAndClearSelect();
    noResultDiv.style.display = "none";
  }

  function hideAndClearSelect() {
    const autocompleteSelectHeader = document.querySelector(
      ".select-header.autocomplete-select-header"
    );
    autocompleteSelectHeader.style.display = "none";

    const areaSelectOption = document.querySelector("#areas-selected-option");
    areaSelectOption.value = "";

    document.querySelector(".select-header p").textContent = "Оберіть область";
    updateMarkers((filteredData = []));
  }

  // Initially, hide the clear icon
  toggleClearIcon();

  // Event listener for the clear icon
  autocompleteIconClear.addEventListener("click", clearInputAndMarkers);

  document.addEventListener("click", function (e) {
    if (e.target !== input) {
      closeAllLists();
    }
  });

  function closeAllLists() {
    while (autocompleteList.firstChild) {
      autocompleteList.removeChild(autocompleteList.firstChild);
    }
  }
}

async function initializeMap() {
  try {
    await fetchDataAndCreateTable(
      "1LcCqXXa1b3eIDx4duNhJ4j7iNyVkEVauE9w71D5fwY4",
      "0",
      getServicesData
    );

    await fetchDataAndCreateTable(
      "1yGN0JyRwy8iWgGk6SLN6MyhWXpn-mS_JCHXwdft1rvs",
      "1755385483",
      getDivisionsData
    );
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initializeMap();
});
