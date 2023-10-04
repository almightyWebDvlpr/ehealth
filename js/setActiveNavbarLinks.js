const menuLinks = document.querySelectorAll(".menu-inner .menu-link");

function setActiveLink() {
  const currentPath = window.location.pathname; // Get the current path

  menuLinks.forEach((link) => {
    const href = link.getAttribute("href"); // Get the link's href attribute

    if (currentPath && href) {
      const currentPathLastPart = currentPath.split("/").pop(); // Extract the last part of the current path
      const hrefLastPart = href.split("/").pop(); // Extract the last part of the link's href

      if (currentPathLastPart === hrefLastPart) {
        link.classList.add("active"); // Apply 'active' class if the last parts match
      } else {
        link.classList.remove("active"); // Remove 'active' class from other links
      }
    }
  });
}

// Call the function when the page loads or when the route changes in your SPA framework
window.addEventListener("load", setActiveLink);
// If using a client-side routing library, listen for route changes and call setActiveLink() accordingly
