import { fetchDataAndCreateTable } from "./fetchCatalogData.js";

// Define variables to store the selected options
let selectedOption1 = "";
let selectedOption2 = "";
let selectedOption3 = "";
let selectedOption4 = "";

export function filterData(data) {
  return data.filter((item) => {
    // Check if the selected options match the item's data
    const option1Value = Array.isArray(item["Рівні надання МД"])
      ? item["Рівні надання МД"]
      : [item["Рівні надання МД"]];

    const option1Match =
      !selectedOption1 ||
      option1Value.some((option) => option.includes(selectedOption1));

    const option2Match =
      !selectedOption2 ||
      item["З технологією для зберігання та обробки даних"] === selectedOption2;

    const option3Match =
      !selectedOption3 ||
      item["З закладами якого типу власності співпрацюють"] === selectedOption3;

    const option4Match =
      !selectedOption4 ||
      item["За впровадженим функціоналом (або за РМК)"] === selectedOption4;

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
    cardContainer.classList.add("mis-card-conatiner");

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
    selectedOption1 || selectedOption2 || selectedOption3 || selectedOption4;

  // Toggle the "hidden" class based on whether there are selected options
  if (resetFiltersBtn) {
    if (hasSelectedOptions) {
      resetFiltersBtn.classList.remove("hidden");
    } else {
      resetFiltersBtn.classList.add("hidden");
    }
  }
}

// filter code

document.addEventListener("DOMContentLoaded", function () {
  const selectHeaders = document.querySelectorAll(".select-header");
  const arrowIcons = document.querySelectorAll(".arrow-icon");
  const optionsLists = document.querySelectorAll(".options-list");
  const selectedOptionInputs = document.querySelectorAll(
    "input[type='hidden']"
  );

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
            selectedOption1 = selectedValue;
            break;
          case 1:
            selectedOption2 = selectedValue;
            break;
          case 2:
            selectedOption3 = selectedValue;
            break;
          case 3:
            selectedOption4 = selectedValue;
            break;
        }

        // Filter and display data
        fetchDataAndCreateTable(
          "1hP1taKmO_sNOol52rPnB6QoYmFNVAlOfidu1bZPOMK4",
          "1138747254",
          processRows
        );
        toggleResetButtonVisibility(index);
      }
    });
  });

  // Initial data load when the page loads
  fetchDataAndCreateTable(
    "1hP1taKmO_sNOol52rPnB6QoYmFNVAlOfidu1bZPOMK4",
    "1138747254",
    processRows
  );

  const selectHeaderGroups = Array.from(
    document.querySelectorAll(".select-header-group")
  );

  // Add an array to store the initial text of the <p> elements within select-header-group
  const selectHeaderInitialText = Array.from(selectHeaderGroups).map(
    (selectHeaderGroup) => {
      return selectHeaderGroup.querySelector("p").innerText;
    }
  );

  // Add an event listener for each select option
  selectedOptionInputs.forEach((input, index) => {
    input.addEventListener("change", toggleResetButtonVisibility);
  });

  const resetFiltersBtns = document.querySelectorAll(".reset-button");

  resetFiltersBtns.forEach((resetButton, index) => {
    resetButton.addEventListener("click", function (e) {
      e.stopPropagation();
      resetFilters(index); // Pass the index as an argument
    });
  });

  function resetFilters(index) {
    // Clear the selected options and input values
    selectedOption1 = "";
    selectedOption2 = "";
    selectedOption3 = "";
    selectedOption4 = "";
    selectedOptionInputs.forEach((input) => {
      input.value = "";
    });

    // Reset the text of the <p> elements within select-header-group
    selectHeaderGroups[index].querySelector("p").innerText =
      selectHeaderInitialText[index];

    // Loop through all reset buttons and hide them
    resetFiltersBtns.forEach((resetButton) => {
      resetButton.classList.add("hidden");
    });

    // Fetch and display all data
    fetchDataAndCreateTable(
      "1hP1taKmO_sNOol52rPnB6QoYmFNVAlOfidu1bZPOMK4",
      "1138747254",
      processRows
    );
  }
});
