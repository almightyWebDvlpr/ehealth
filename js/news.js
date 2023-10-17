
import {newsData} from './data.js'

class NewsFeed {
  constructor(containerSelector, data, itemsPerPage) {
    this.container = document.querySelector(containerSelector);
    this.data = data;
    this.itemsPerPage = itemsPerPage || 12; // Default to 12 items per page
    this.currentPage = 1;
    this.hasMorePages = true; // Flag to track if there are more pages
  }

  createHTML() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const paginatedData = this.data.slice(startIndex, endIndex);

    const ul = document.createElement("ul");
    ul.classList.add("grid-col-1-1-1","grid-col-1", "gap-32");

    for (const item of paginatedData) {
      const li = document.createElement("li");

      if (item.date && item.title) {
        const a = document.createElement("a");
        a.classList.add('flex-column', "gap-12")
        a.href = item.link || "#";

        const dateP = document.createElement("p");
        dateP.style.color = '#8091B0'
        dateP.textContent = item.date;

        const titleH4 = document.createElement("h4");
        titleH4.textContent = item.title;

        a.appendChild(dateP);
        a.appendChild(titleH4);

        li.appendChild(a);
      } else if (item.text) {
        const textP = document.createElement("p");
        textP.textContent = item.text;
        li.appendChild(textP);
      }

      ul.appendChild(li);
    }

    this.container.innerHTML = ""; // Clear the container
    this.container.appendChild(ul);

    this.addLoadMoreButton();
    this.addPaginationControls();
  }



  addLoadMoreButton() {
    const loadMoreButton = document.createElement("span");
    const loadMoreButtonDiv = document.createElement("div");
    loadMoreButtonDiv.style.textAlign = 'center'

    loadMoreButton.classList.add("btn", "btn__dark");

    loadMoreButton.textContent = "Більше новин";

    loadMoreButton.addEventListener("click", () => {
      this.currentPage++;
      this.createHTML();
    });

    loadMoreButtonDiv.appendChild(loadMoreButton);

    this.container.appendChild(loadMoreButtonDiv);

    // Disable the "Load More" button when there are no more pages
    if (this.currentPage * this.itemsPerPage >= this.data.length) {
      loadMoreButton.style.opacity = "0.6";
      loadMoreButton.style.pointerEvents = "none";
    }
  }

  addPaginationControls() {
    const totalPages = Math.ceil(this.data.length / this.itemsPerPage);
    const paginationContainer = document.createElement("div");
    paginationContainer.classList.add("pagination-container");
  
  
    const maxVisiblePages = 5;
    const currentPage = this.currentPage;
    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
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
      prevIcon.classList.add('bx', 'bx-chevron-left');
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
    });}
  
    // Add "Next" button
    if (currentPage < totalPages) {
      const nextButton = document.createElement("button");
      nextButton.classList.add("pagination-button", "pagination-button-next");
      const nextIcon = document.createElement("i");
      nextIcon.classList.add('bx', 'bx-chevron-right');
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


document.addEventListener("DOMContentLoaded", function () {
  const newsFeed = new NewsFeed(".news-container", newsData, 12);
  newsFeed.createHTML();
});
