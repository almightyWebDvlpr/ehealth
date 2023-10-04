import {
  iconBoxData,
  legislationReportingData,
  legislationRegulatoryAndLegalFrameworkData,
  legislationTestingAndConnectingMisData,
  legislationInternalDocumentsData,
  legislationArchiveData
} from "../data.js";

document.addEventListener("DOMContentLoaded", function () {
  class IconBoxList {
    constructor(containerSelector, items, itemsPerPage, mainContainer) {
      this.container = document.querySelector(containerSelector);
      this.generalContainer = document.querySelector(mainContainer);
      this.items = items || [];

      this.itemsPerPage = itemsPerPage || 12; // Default to 12 items per page
      this.currentPage = 1;
      this.hasMorePages = true; // Flag to track if there are more pages

      if (!this.container) {
        return; // Return early if container is not found
      }
      this.createHTML();
    }

    createHTML() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      const paginatedData = this.items.slice(startIndex, endIndex);
      console.log(paginatedData);

      const ul = document.createElement("ul");
      ul.classList.add("grid-col-1-1-1", "gap-32");

      for (const itemData of paginatedData) {
        const li = document.createElement("li");
        li.classList.add("icon-box", "box-hover" ,"amount-box");

        const a = document.createElement("a");
        a.classList.add("flex-column", "gap-24");
        a.href = itemData.link || "#";

        const imageBox = document.createElement("div");
        imageBox.classList.add("image__box", "image__box-hover");

        const img = document.createElement("img");
        img.src = "../assets/images/new_icons/file text.png"; // Static image URL
        img.alt = "file text";

        imageBox.appendChild(img);
        a.appendChild(imageBox);

        const flexContainer = document.createElement("div");
        flexContainer.classList.add("flex-center-s-b", "document-files");

        const h4 = document.createElement("h4");
        h4.textContent = itemData.year || "";

        const arrowIcon = document.createElement("i");
        arrowIcon.classList.add("bx", "bx-right-arrow-alt");

        flexContainer.appendChild(h4);
        flexContainer.appendChild(arrowIcon);

        a.appendChild(flexContainer);

        li.appendChild(a);
        ul.appendChild(li);
      }

      this.container.innerHTML = "";
      this.container.appendChild(ul);

      this.addLoadMoreButton();
      this.addPaginationControls();
    }

    addLoadMoreButton() {
      const loadMoreButton = document.createElement("span");
      const loadMoreButtonDiv = document.createElement("div");
      loadMoreButtonDiv.style.textAlign = "center";

      loadMoreButton.classList.add("btn", "btn__dark");

      loadMoreButton.textContent = "Більше новин";

      loadMoreButton.addEventListener("click", () => {
        this.currentPage++;
        this.createHTML();
      });

      loadMoreButtonDiv.appendChild(loadMoreButton);

      this.container.appendChild(loadMoreButtonDiv);

      // Disable the "Load More" button when there are no more pages
      if (this.currentPage * this.itemsPerPage >= this.items.length) {
        loadMoreButton.style.opacity = "0.6";
        loadMoreButton.style.pointerEvents = "none";
      }
    }

    addPaginationControls() {
      const totalPages = Math.ceil(this.items.length / this.itemsPerPage);
      const paginationContainer = document.createElement("div");
      paginationContainer.classList.add("pagination-container");

      const maxVisiblePages = 5;
      const currentPage = this.currentPage;
      let startPage = Math.max(
        currentPage - Math.floor(maxVisiblePages / 2),
        1
      );
      let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
      }

      // Add ellipsis if there are more pages before page 1
      if (startPage > 1) {
        const ellipsisStart = document.createElement("span");
        ellipsisStart.textContent = "...";
        paginationContainer.appendChild(ellipsisStart);
      }

      // Add "Previous" button
      if (currentPage > 1) {
        const prevButton = document.createElement("button");
        prevButton.classList.add("pagination-button", "pagination-button-prev");
        const prevIcon = document.createElement("i");
        prevIcon.classList.add("bx", "bx-chevron-left");
        prevButton.appendChild(prevIcon);

        prevButton.addEventListener("click", () => {
          this.currentPage--;
          this.createHTML();
        });
        paginationContainer.appendChild(prevButton);
      }

      for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement("button");
        pageButton.classList.add("pagination-button");
        const buttonContent = document.createElement("p");
        buttonContent.textContent = i;
        pageButton.appendChild(buttonContent);

        if (i === this.currentPage) {
          pageButton.classList.add("active-pagination-button");
        }

        pageButton.addEventListener("click", () => {
          this.currentPage = i;
          this.createHTML();
        });
        paginationContainer.appendChild(pageButton);
      }

      // Add ellipsis if there are more pages after page 7
      if (endPage < totalPages) {
        const ellipsis = document.createElement("span");
        ellipsis.textContent = "...";
        paginationContainer.appendChild(ellipsis);
      }

      // Add button for the last page
      if (endPage < totalPages) {
        const lastPageButton = document.createElement("button");
        lastPageButton.classList.add("pagination-button");
        const lastButtonContent = document.createElement("p");
        lastButtonContent.textContent = totalPages;
        lastPageButton.appendChild(lastButtonContent);
        lastPageButton.addEventListener("click", () => {
          this.currentPage = totalPages;
          this.createHTML();
        });
      }

      // Add "Next" button
      if (currentPage < totalPages) {
        const nextButton = document.createElement("button");
        nextButton.classList.add("pagination-button", "pagination-button-next");
        const nextIcon = document.createElement("i");
        nextIcon.classList.add("bx", "bx-chevron-right");
        nextButton.appendChild(nextIcon);

        nextButton.addEventListener("click", () => {
          this.currentPage++;
          this.createHTML();
        });
        paginationContainer.appendChild(nextButton);
      }

      this.container.appendChild(paginationContainer);
    }
  }

  // Create an instance of the IconBoxList class
  const iconBoxList = new IconBoxList(".icon-box-list-container", iconBoxData);

  const legislationList = new IconBoxList(
    ".legislation-reporting-list-container",
    legislationReportingData,
    6,
    "#tab1Content2"
  );

  const legislationRegulatoryAndLegalFrameworkList = new IconBoxList(
    ".legislation-regulatory-and-legal-framework-list-container",
    legislationRegulatoryAndLegalFrameworkData,
    6,
    ".tab-1-content-2"
  );

  const legislationTestingAndConnectingMisList = new IconBoxList(
    ".legislation-testing-and-connecting-mis-list-container",
    legislationTestingAndConnectingMisData,
    6
  );

  const legislationInternalDocumentsList = new IconBoxList(
    ".legislation-internal-documents-list-container",
    legislationInternalDocumentsData,
    6
  );

  const legislationarchiveList = new IconBoxList(
    ".legislation-archive-list-container",
    legislationArchiveData,
    6
  );

  // Select Filter Code

  function initializeCustomSelect(filterId) {
    const selectFilter = document.querySelector(`#${filterId}`);
    const optionsList = selectFilter.querySelector(".options-list");
    const hiddenInput = selectFilter.querySelector(
      `#${filterId}-selected-option`
    );

    selectFilter
      .querySelector(".select-header")
      .addEventListener("click", function () {
        optionsList.classList.toggle("show-options");
      });

    const optionItems = optionsList.querySelectorAll("li");
    optionItems.forEach(function (option) {
      option.addEventListener("click", function () {
        const selectedValue = option.getAttribute("data-value");
        hiddenInput.value = selectedValue;
        selectFilter.querySelector(".select-header p").textContent =
          option.textContent;
        optionsList.classList.remove("show-options");
      });
    });
  }

  // Initialize each custom select filter
  initializeCustomSelect("filter1");
  initializeCustomSelect("filter2");
  initializeCustomSelect("filter3");
  initializeCustomSelect("filter4");
  initializeCustomSelect("filter5");
  // Initialize more filters as needed
});
