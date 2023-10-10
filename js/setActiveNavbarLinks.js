const menuLinksToActive = document.querySelectorAll(".menu-inner .menu-link");

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
}

window.addEventListener("load", setActiveLink);
