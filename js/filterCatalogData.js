import { fetchDataAndCreateTable } from "./fetchCatalogData.js";

// Function to decode URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Retrieve search query and found elements from URL
const urlParam = getUrlParameter("q");
const passedFilterName =
  urlParam && urlParam.length > 0 ? decodeURIComponent(urlParam) : "";

const pageTitle = document.getElementById("pageTitle");

if (passedFilterName) {
  pageTitle.innerText = passedFilterName;
} else {
  pageTitle.innerText = "Каталог Міс";
}

// Define variables to store the selected options
let selectedOptions = {
  option1: passedFilterName || "",
  option2: "",
  option3: "",
  option4: "",
};



// Check if passedFilterName is valid before setting it as a selected option

export function filterData(data) {
  // Check if any options are selected
  const optionsSelected =
    selectedOptions.option1 ||
    selectedOptions.option2 ||
    selectedOptions.option3 ||
    selectedOptions.option4;

  const pageTitle = document.getElementById("pageTitle");

  if (!optionsSelected) {
    pageTitle.innerText = "Каталог Міс";
  }

  // If no options are selected and no passedFilterName, return all data
  if (!optionsSelected && !passedFilterName) {
    return data;
  }

  // Filter the data based on selected options
  return data.filter((item) => {
    const option1Value = Array.isArray(item["Рівні надання МД"])
      ? item["Рівні надання МД"]
      : [item["Рівні надання МД"]];

    const option1Match =
      !selectedOptions.option1 ||
      option1Value.some((option) => option.includes(selectedOptions.option1));

    const option2Match =
      !selectedOptions.option2 ||
      item["З технологією для зберігання та обробки даних"] ===
        selectedOptions.option2;

    const option3Match =
      !selectedOptions.option3 ||
      item["З закладами якого типу власності співпрацюють"] ===
        selectedOptions.option3;

    const option4Match =
      !selectedOptions.option4 ||
      item["За впровадженим функціоналом (або за РМК)"] ===
        selectedOptions.option4;

    return option1Match && option2Match && option3Match && option4Match;
  });
}

export function processRows(data, gid) {
  // Filter the data based on selected options
  const filteredData = filterData(data);

  const output = document.getElementById(`output-${gid}`);
  // Clear the previous results
  output.innerHTML = "";
  if (!output) {
    console.error("Output element not found for gid:", gid);
    return;
  }

  filteredData.forEach((item) => {
    // Create a new card container for each object
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("mis-card-conatiner", "grid-col-1");

    const leftSideCard = document.createElement("div");
    leftSideCard.classList.add("mis-card-left");

    const rightSideCard = document.createElement("div");
    rightSideCard.classList.add("mis-card-right");

    const misCardsControls = document.createElement("div");
    misCardsControls.classList.add("mis-card-controls");

    const buttonGoToSite = document.createElement("a");
    buttonGoToSite.setAttribute("target", "_blank");
    buttonGoToSite.classList.add("btn", "btn__dark", "mis__catalog-btn");
    buttonGoToSite.innerText = "Перейти на сайт";

    const btnIcon = document.createElement("i");
    btnIcon.classList.add("bx", "bx-right-arrow-alt");
    buttonGoToSite.appendChild(btnIcon);

    const buttonEducation = document.createElement("a");
    buttonEducation.setAttribute("target", "_blank");
    buttonEducation.classList.add("btn", "btn__white");
    buttonEducation.innerText = "Навчальні ресурси";

    for (const key in item) {
      if (key === "Лого МІС" && item[key] !== "") {
        // Create an <img> element for the logo
        const logoImage = document.createElement("img");
        logoImage.classList.add("catalog-logo-img");
        // logoImage.style.width = '100%'
        logoImage.src = item[key];
        const logoContainer = document.createElement("div");
        logoContainer.classList.add("logo-container"); // Add a class for styling
        logoContainer.appendChild(logoImage);
        leftSideCard.appendChild(logoContainer);
      } else if (key === "Назва МІС") {
        const heading = document.createElement("h2");
        heading.classList.add("h2-mb-m");

        heading.textContent = item[key];
        rightSideCard.appendChild(heading);
      } else if (key === "Посилання на навчальні ресурси МІС") {
        // Insert link into the buttonEducation href attribute
        buttonEducation.href = item[key];
      } else if (key === "Посилання на сайт МІС") {
        // Insert link into the buttonGoToSite href attribute
        buttonGoToSite.href = item[key];
      } else {
        const heading = document.createElement("p");
        heading.style.color = "#8091B0";
        heading.style.fontSize = "14px";
        heading.style.fontWeight = "300";
        heading.style.lineHeight = "19.6px";
        heading.textContent = key;

        const paragraph = document.createElement("p");
        paragraph.textContent = item[key];

        const pairDiv = document.createElement("div");
        pairDiv.classList.add("flex-column", "gap-6");

        if (key === "Рівні надання МД") {
          const parts = paragraph.textContent.split(",").map(function (part) {
            return part.trim();
          });

          const mdContainer = document.createElement("div");
          mdContainer.style.display = "flex";
          mdContainer.style.gap = "12px";
          mdContainer.style.flexWrap = "wrap";

          parts.forEach(function (partText) {
            if (partText) {
              const newP = document.createElement("p");
              newP.style.fontSize = "13px";
              newP.classList.add("chips");
              newP.textContent = partText;
              mdContainer.appendChild(newP);
            }
          });

          pairDiv.appendChild(heading);
          pairDiv.appendChild(mdContainer);
        } else {
          pairDiv.appendChild(heading);
          pairDiv.appendChild(paragraph);
        }

        if (key === "Контакти служби підтримки") {
          const contactsWrapper = document.createElement("div");
          contactsWrapper.classList.add("flex-column", "gap-6");

          const contactsDiv = document.createElement("div");
          contactsDiv.style.display = "flex";
          contactsDiv.style.gap = "12px";
          contactsDiv.style.flexWrap = "wrap";

          const contactsParts = paragraph.textContent
            .split(",")
            .map(function (part) {
              return part.trim();
            });

          contactsParts.forEach(function (partText) {
            const newP = document.createElement("a");
            newP.style.display = "flex";
            newP.style.flexDirection = "row-reverse";

            const iconTel = document.createElement("img");
            iconTel.style.width = "20px";
            iconTel.style.height = "20px";
            iconTel.style.marginRight = "5px";
            iconTel.classList.add("icon-tel");

            const iconHomeTel = document.createElement("span");
            iconHomeTel.style.marginRight = "5px";
            if (partText) {
              newP.setAttribute("href", `tel:${partText}`);
              newP.textContent = partText;
              contactsDiv.appendChild(newP);
            }
            switch (true) {
              case partText.includes("073"):
              case partText.includes("063"):
              case partText.includes("093"):
                iconTel.setAttribute("src", "./assets/images/icons/logo.svg");
                newP.appendChild(iconTel);
                break;

              case partText.includes("044"):
                iconHomeTel.innerHTML =
                  "<i class='bx bx-phone' style='color:#5454e9; font-size:1.4rem;'></i>";
                newP.appendChild(iconHomeTel);
                break;

              case partText.includes("066"):
              case partText.includes("050"):
              case partText.includes("095"):
                iconTel.setAttribute(
                  "src",
                  "./assets/images/icons/vodafone.png"
                );
                newP.appendChild(iconTel);
                break;

              case partText.includes("068"):
              case partText.includes("067"):
              case partText.includes("096"):
              case partText.includes("097"):
                iconTel.setAttribute(
                  "src",
                  "./assets/images/icons/kyivstar.png"
                );
                newP.appendChild(iconTel);
                break;

              default:
                iconHomeTel.innerHTML =
                  "<i class='bx bx-phone' style='color:#5454e9; font-size:1.4rem;'></i>";
                newP.appendChild(iconHomeTel);
            }
          });

          leftSideCard.appendChild(misCardsControls);
          contactsWrapper.appendChild(heading);
          contactsWrapper.appendChild(contactsDiv);

          leftSideCard.appendChild(contactsWrapper);
        } else {
          rightSideCard.appendChild(pairDiv);
        }
      }
    }

    misCardsControls.appendChild(buttonGoToSite);
    misCardsControls.appendChild(buttonEducation);
    cardContainer.appendChild(leftSideCard);
    cardContainer.appendChild(rightSideCard);
    output.appendChild(cardContainer);
  });
}

// Function to show or hide the "Reset Filters" button based on selected options
export function toggleResetButtonVisibility(index) {
  const resetFiltersBtn = document.querySelectorAll(".reset-button")[index];
  const hasSelectedOptions =
    selectedOptions.option1 ||
    selectedOptions.option2 ||
    selectedOptions.option3 ||
    selectedOptions.option4;

  // Toggle the "hidden" class based on whether there are selected options
  if (resetFiltersBtn) {
    if (hasSelectedOptions) {
      resetFiltersBtn.classList.remove("hidden");
    } else {
      resetFiltersBtn.classList.add("hidden");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  filterAndDisplayData();
  const selectHeaders = document.querySelectorAll(".select-header");
  const arrowIcons = document.querySelectorAll(".arrow-icon");
  const optionsLists = document.querySelectorAll(".options-list");
  const selectedOptionInputs = document.querySelectorAll(
    "input[type='hidden']"
  );

  // Add this line to define selectHeaderGroups
  const selectHeaderGroups = Array.from(
    document.querySelectorAll(".select-header-group")
  );

  // Get the default selected option based on passedFilterName
  const defaultSelectedOptionIndex = Array.from(optionsLists).findIndex(
    (optionsList) =>
      Array.from(optionsList.querySelectorAll("li")).some(
        (li) => li.getAttribute("data-value") === passedFilterName
      )
  );

  // Add this array to store the initial text of the <p> elements within select-header-group
  const selectHeaderInitialText = Array.from(selectHeaderGroups).map(
    (selectHeaderGroup) => {
      return selectHeaderGroup.querySelector("p").innerText;
    }
  );

  // Function to reset the selected options and trigger the filtering function
  function resetSelectedOptions(index) {
    selectedOptionInputs[index].value = "";
    selectHeaders[index].querySelector("p").innerText =
      selectHeaderInitialText[index];

    // Reset the corresponding selected option variable
    switch (index) {
      case 0:
        selectedOptions.option1 = "";
        break;
      case 1:
        selectedOptions.option2 = "";
        break;
      case 2:
        selectedOptions.option3 = "";
        break;
      case 3:
        selectedOptions.option4 = "";
        break;
    }

    // Trigger the filtering function
    filterAndDisplayData();

    // After resetting, hide the reset button
    toggleResetButtonVisibility(index);
  }

  filterAndDisplayData();
  // Update the event listener for the reset buttons to call the resetSelectedOptions function
  const resetFiltersBtns = document.querySelectorAll(".reset-button");
  // resetFiltersBtns.forEach((resetButton, index) => {
  //   resetButton.addEventListener("click", function (e) {
  //     e.stopPropagation();
  //     resetSelectedOptions(index);
  //     resetFilters(index);
  //   });
  //   // Initial data load when the page loads
  //   filterAndDisplayData();
  // });
  resetFiltersBtns.forEach((resetButton, index) => {
    resetButton.addEventListener("click", function (e) {
      e.stopPropagation();
      resetSelectedOptions(index);
      resetButton.classList.add("hidden");
    });
  });

  // Modify the filterAndDisplayData function
  function filterAndDisplayData() {
    // Check if passedFilterName is present in URL params
    const filterNamePresent = !!passedFilterName;

    if (filterNamePresent.length) {
      // resetFilters();
      resetSelectedOptions();
    }

    // Filter and display data based on selected options or passedFilterName
    fetchDataAndCreateTable(
      "1hP1taKmO_sNOol52rPnB6QoYmFNVAlOfidu1bZPOMK4",
      "1138747254",
      processRows
    );
  }

  selectHeaders.forEach((selectHeader, index) => {
    selectHeader.addEventListener("click", function (event) {
      event.stopPropagation();
      optionsLists[index].classList.toggle("show-options");
      arrowIcons[index].style.transform = optionsLists[
        index
      ].classList.contains("show-options")
        ? "rotate(180deg)"
        : "rotate(0deg)";
    });

    // Set the default selected option and trigger a click event
    if (index === defaultSelectedOptionIndex) {
      const defaultOption = optionsLists[index].querySelector(
        `li[data-value='${passedFilterName}']`
      );
      if (defaultOption) {
        const selectedValue = defaultOption.getAttribute("data-value");
        selectedOptionInputs[index].value = selectedValue;
        selectHeaders[index].querySelector("p").innerText =
          defaultOption.innerText;

        // Simulate a click event to trigger the filtering
        defaultOption.click();
      } else {
        // If the default option is not found, set selectedOptions.option1 to passedFilterName
        selectedOptions.option1 = passedFilterName;
      }
    } else {
      // For non-default options, set selectedOptions.option1 to passedFilterName
      selectedOptions.option1 = passedFilterName;
    }
  });

  document.addEventListener("click", function () {
    optionsLists.forEach((optionsList, index) => {
      optionsList.classList.remove("show-options");
      arrowIcons[index].style.transform = "rotate(0deg)";
    });
  });

  optionsLists.forEach((optionsList, index) => {
    optionsList.addEventListener("click", function (event) {
      if (event.target.tagName === "LI") {
        const selectedValue = event.target.getAttribute("data-value");
        selectedOptionInputs[index].value = selectedValue;
        selectHeaders[index].querySelector("p").innerText =
          event.target.innerText;
        // Set the text of the corresponding <p> element within the select-header-group
        selectHeaderGroups[index].querySelector("p").innerText =
          event.target.innerText;

        // Update the selected option variables
        switch (index) {
          case 0:
            selectedOptions.option1 = selectedValue;
            break;
          case 1:
            selectedOptions.option2 = selectedValue;
            break;
          case 2:
            selectedOptions.option3 = selectedValue;
            break;
          case 3:
            selectedOptions.option4 = selectedValue;
            break;
        }

        // Filter and display data
        filterAndDisplayData();
        toggleResetButtonVisibility(index);
      }
    });
  });

  // Add an event listener for each select option
  selectedOptionInputs.forEach((input, index) => {
    input.addEventListener("change", function () {
      toggleResetButtonVisibility(index);
    });
  });

  // function resetFilters(index) {
  //   // Clear the selected options and input values
  //   selectedOptions.option1 = "";
  //   selectedOptions.option2 = "";
  //   selectedOptions.option3 = "";
  //   selectedOptions.option4 = "";
  //   selectedOptionInputs.forEach((input) => {
  //     input.value = "";
  //   });

  //   // Reset the text of the <p> elements within select-header-group
  //   selectHeaderGroups[index].querySelector("p").innerText =
  //     selectHeaderInitialText[index];

  //   // Loop through all reset buttons and hide them
  //   resetFiltersBtns.forEach((resetButton) => {
  //     resetButton.classList.add("hidden");

  //   });

  //   // Fetch and display all data
  //   filterAndDisplayData();
  // }

  // Initial data load when the page loads
  filterAndDisplayData();
});
