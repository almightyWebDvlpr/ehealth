const searchInput = document.getElementById("search-input");
const submitBtn = document.querySelector(".search__icon");
const clearButton = document.getElementById("icon-cross");
// const searchResultsContainer = document.getElementById('searchResults');

// Function to perform the search
async function performSearch(searchQuery) {
  // Create an array to store the found HTML elements
  const foundElements = [];

  // Loop through all HTML pages (you'll need to have a list of URLs)
  const pageURLs = [
    "./electronic-healthcare/systems/central.html",
    "./electronic-healthcare/systems/ehcs.html",
    "./electronic-healthcare/systems/is-nhcs.html",
    "./electronic-healthcare/systems/mis.html",
    "./electronic-healthcare/data/dashboards.html",
    "./electronic-healthcare/registers/country-basic-registers-and-healthcare.html",
    "./electronic-healthcare/electronic-healthcare.html",
    "./electronic-healthcare/legislation.html",
    "./service-providers/to-service-providers.html",
    "./service-providers/system-performance-monitoring.html",
    "/service-providers/heads-of-health-care-institutions/heads-of-health-care-institutions.html",
    // "/service-providers/heads-of-health-care-institutions/how-choose-mis.html",
    // "./service-providers/heads-of-health-care-institutions/how-connect-institution-to-esoz.html",
    // "./service-providers/heads-of-health-care-institutions/mis-catalog.html",
    // "./service-providers/doctors/to-doctors.html",
    // "./service-providers/doctors/education/digital-education.html",
    // "./service-providers/doctors/education/digital-educational-resources.html",
    // "./service-providers/doctors/education/nhcs-academy.html",
    // "./service-providers/pharmacies/to-pharmacy.html",
    // "./service-providers/pharmacies/pharmacy-how-to-choose-mis.html",
    // "./service-providers/pharmacies/mis-catalog.html",
    // "./service-providers/pharmacies/how-to-connect-pharmacy-to-the-nhcs.html",
    // "./service-providers/pharmacies/faq.html",
    // "./service-providers/pharmacies/contracting-with-nhsc.html",
    // "./patients/to-patients.html",
    // "./patients/medical-conclusions-about-temporary-disability.html",
    // "./patients/how-to-use-e-malyatko-services.html",
    // "./patients/how-to-make-a-declaration-with-a-family-doctor.html",
    // "./patients/how-to-get-e-referral-to-a-specialist.html",
    // "./patients/how-to-get-an-e-prescription.html",
    // "./partners/to-partners.html",
    // "./partners/to-software-developers.html",
    "./partners/to-state-authorities.html",
    // "./",
    // "./",
    // "./",
    // "./",
    // "./",
    // "./",
    // "./",
    // "./",
    // "./",
    // "./",
    // "./",
    // Add all the HTML page URLs you want to search here
  ];

  // for (const url of pageURLs) {
  //   try {
  //     const response = await fetch(url);
  //     const htmlContent = await response.text();

  //     // Create a temporary DOM element to parse the HTML
  //     const tempElement = document.createElement("div");
  //     tempElement.innerHTML = htmlContent;

  //     // Recursively search for text nodes containing the search query
  //     findTextNodes(tempElement, url, searchQuery, foundElements);
  //   } catch (error) {
  //     console.error(`Error fetching ${url}: ${error}`);
  //   }
  // }


  for (const url of pageURLs) {
    try {
      const response = await fetch(url);
      const htmlContent = await response.text();
  
      // Create a temporary DOM element to parse the HTML
      const tempElement = document.createElement("div");
      tempElement.innerHTML = htmlContent;
  
      // Check if the current page contains the 'top__section' class
      const topSection = tempElement.querySelector('.top__section');
  
      // If the page contains the 'top__section', remove it
      if (topSection) {
        topSection.remove();
      }
  
      // Recursively search for text nodes containing the search query
      findTextNodes(tempElement, url, searchQuery, foundElements);
    } catch (error) {
      console.error(`Error fetching ${url}: ${error}`);
    }
  }
  

  window.open(
    `search-results.html?q=${encodeURIComponent(
      searchQuery
    )}&elements=${encodeURIComponent(JSON.stringify(foundElements))}`,
    "_blank"
  );
}

// Helper function to check if an ancestor is an <a> tag
function isAncestorLink(node) {
  if (!node) return false;
  if (node.tagName.toLowerCase() === "a") return true;
  return isAncestorLink(node.parentNode);
}

// Recursive function to find text nodes with the search query
function findTextNodes(element, url, searchQuery, foundElements) {
  if (!element) return; // Check if element is null or undefined

  const isTextNode = element.nodeType === Node.TEXT_NODE;
  const isNotAncestorLink = !isAncestorLink(element.parentNode);

  // Check if element.parentNode is null or undefined
  const isNotExcludedElement =
    element.parentNode &&
    !element.parentNode.classList.contains("vjs-no-js") &&
    element.parentNode.id !== "breadcrumbs"


  if (isTextNode && isNotAncestorLink && isNotExcludedElement) {
    const textContent = element.textContent;
    const lowercaseContent = textContent.toLowerCase();

    if (textContent && lowercaseContent.includes(searchQuery)) {
      const foundItem = {
        url: url,
        element: textContent,
      };
      foundElements.push(foundItem);
    }
  } else if (
    element.tagName &&
    !["script", "footer", "head", "h1", "header"].includes(
      element.tagName.toLowerCase()
    )
  ) {
    for (const child of element.childNodes) {
      findTextNodes(child, url, searchQuery, foundElements);
    }
  }
}

// Function to update the search button and clear button state
function updateButtonStates() {
  const searchQuery = searchInput.value.trim(); // Remove leading/trailing spaces
  submitBtn.disabled = searchQuery === "";
  clearButton.style.display = searchQuery !== "" ? "block" : "none";
}

// Function to clear the input field and hide the clear button
function clearInput() {
  searchInput.value = "";

  // After clearing the input, update the search button and clear button states
  updateButtonStates();
}

searchInput.addEventListener("input", updateButtonStates);

// Attach the clearInput function to the button's click event
document.getElementById("icon-cross").addEventListener("click", clearInput);

// Function to handle the form submission
document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  const searchQuery = searchInput.value.toLowerCase();

  // Perform the search when the form is submitted
  performSearch(searchQuery);
});

// Initial update of the search button and clear button states
updateButtonStates();
