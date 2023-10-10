// Function to decode URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Retrieve search query and found elements from URL
const searchQuery = decodeURIComponent(getUrlParameter("q"));
const foundElements = JSON.parse(
  decodeURIComponent(getUrlParameter("elements"))
);
const searchResultsFormWrapper = document.querySelector(
  ".search-results-form-wrapper"
);
const searchInput = document.getElementById("search-input");
searchInput.value = foundElements.length > 0 ? searchQuery : "";

const foundElementsLength = document.createElement("p");
foundElementsLength.textContent =
  foundElements.length > 0
    ? `За вашим запитом знайдено результатів:${foundElements.length}`
    : "За вашим запитом нічого не знайдено";
searchResultsFormWrapper.appendChild(foundElementsLength);

const resultsContainer = document.getElementById("results-container");

if (searchQuery && foundElements.length > 0) {
  // Display the found elements
  foundElements.forEach((item) => {
    const resultItem = document.createElement("div");
    resultItem.innerHTML = `<a href='${item.url}'>${item.element}</a>`;
    resultItem.style.padding = "24px;";
    resultsContainer.appendChild(resultItem);
  });
} else {
  resultsContainer.innerHTML = `<p>На жаль, ми нічого не знайшли за запитом, " ${
    searchQuery === null ? "" : searchQuery
  } "</p>`;
}
