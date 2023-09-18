const searchInput = document.getElementById('searchInput');
const clearButton = document.getElementById('icon-cross');
const searchResultsContainer = document.getElementById('searchResults');


// Function to perform the search
async function performSearch() {
        const searchQuery = searchInput.value.toLowerCase();


  // Create an array to store the found HTML elements
  const foundElements = [];

  // Clear previous results if the search query is empty
  if (searchQuery === "") {
    searchResultsContainer.innerHTML = '';
    return; // Exit the function early
  } 

  // Helper function to check if an ancestor is an <a> tag
  function isAncestorLink(node) {
    if (!node) return false;
    if (node.tagName.toLowerCase() === "a") return true;
    return isAncestorLink(node.parentNode);
  }

 // Recursive function to find text nodes with the search query
function findTextNodes(element, url) {
    if (!element) return; // Check if element is null or undefined
  
    const isTextNode = element.nodeType === Node.TEXT_NODE;
    const isNotAncestorLink = !isAncestorLink(element.parentNode);
  
    // Check if element.parentNode is null or undefined
    const isNotExcludedElement =
      element.parentNode &&
      !element.parentNode.classList.contains('vjs-no-js') &&
      element.parentNode.id !== 'breadcrumbs';
  
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
      !['script', 'footer', 'head', 'h1', 'header'].includes(element.tagName.toLowerCase())
    ) {
      for (const child of element.childNodes) {
        findTextNodes(child, url);
      }
    }
  }
  
  

  // Loop through all HTML pages (you'll need to have a list of URLs)
  const pageURLs = [
    "./electronic-healthcare/systems/central.html",
    "./electronic-healthcare/systems/ehcs.html",
    "./electronic-healthcare/systems/is-nhcs.html",
    "./electronic-healthcare/systems/mis.html",
    "",
    "./electronic-healthcare/data/dashboards.html",
    "",
    "",
    "",
    "",
    "",
    // Add all the HTML page URLs you want to search here
  ];

  for (const url of pageURLs) {
    try {
      const response = await fetch(url);
      const htmlContent = await response.text();

      // Create a temporary DOM element to parse the HTML
      const tempElement = document.createElement("div");
      tempElement.innerHTML = htmlContent;

      // Recursively search for text nodes containing the search query
      findTextNodes(tempElement, url, searchQuery, foundElements);
    } catch (error) {
      console.error(`Error fetching ${url}: ${error}`);
    }
  }


 // Display the found HTML elements if there are results
 searchResultsContainer.innerHTML = ''; // Clear previous results

 if (foundElements.length > 0) {
  // Display the found HTML elements
  foundElements.forEach((item) => {
   
    searchResultsContainer.classList.add('flex-column', 'gap-16', 'p-m')
    const resultItem = document.createElement("div");
   

    resultItem.innerHTML = `<a href='${item.url}'>${item.element}</a>`;
    resultItem.style.padding = '24px;'

    searchResultsContainer.appendChild(resultItem);
  });
}
 }

// Function to clear the input field and hide the clear button
function clearInput() {
    searchInput.value = '';
    clearButton.style.display = 'none';
    searchResultsContainer.innerHTML = '';
}

// Attach the search function to the input field's "input" event
searchInput.addEventListener('input', function () {
    performSearch();
    // Toggle clear button visibility based on input value
    clearButton.style.display = searchInput.value !== '' ? 'block' : 'none';
});

// Attach the clearInput function to the button's click event
document.getElementById("icon-cross").addEventListener("click", clearInput);
