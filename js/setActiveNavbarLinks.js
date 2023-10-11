
const menuLinksToActive = document.querySelectorAll(".menu-item .menu-link");

function setActiveLink() {
  const currentPath = window.location.pathname;

  menuLinksToActive.forEach((link) => {
    const href = link.getAttribute("href");

    if (currentPath && href) {
      const currentPathLastPart = currentPath.split("/").pop();
      const hrefLastPart = href.split("/").pop();

      if (currentPathLastPart === hrefLastPart) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });

  // Add code to activate the parent menu link if a submenu link refers to the same page
  const submenuLinks = document.querySelectorAll(".submenu-link");
  submenuLinks.forEach((submenuLink) => {
    const submenuLinkHref = submenuLink.getAttribute("href");
    if (currentPath && submenuLinkHref) {
      const submenuLinkLastPart = submenuLinkHref.split("/").pop();
      if (currentPath.split('/').includes(submenuLinkLastPart)) { // Check if submenu link is in the current path
        // Find the parent menu link and activate it
        const parentMenuLink = submenuLink.closest(".menu-item").querySelector(".menu-link");
        if (parentMenuLink) {
          parentMenuLink.classList.add("active");
        }
      }
    }
  });
}

window.addEventListener("load", setActiveLink);


