const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu-inner");
const menuArrow = menu.querySelector(".menu-arrow");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const closeMenu = document.querySelector(".close-menu");

// Navbar Menu Toggle Function
function toggleMenu() {
  menu.classList.toggle("is-active");
  overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
  subMenu = children.querySelector(".submenu");
  subMenu.classList.add("is-active");
  subMenu.style.animation = "slideLeft 0.35s ease forwards";
  const menuTitle = children.querySelector(".menu-link").textContent;
  menu.querySelector(".menu-title").textContent = menuTitle;
  menu.querySelector(".menu-header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.35s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("is-active");
  }, 300);

  menu.querySelector(".menu-title").textContent = "";
  menu.querySelector(".menu-header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
  if (!menu.classList.contains("is-active")) {
    return;
  }
  if (e.target.closest(".menu-dropdown")) {
    const children = e.target.closest(".menu-dropdown");
    showSubMenu(children);
  }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    if (menu.classList.contains("is-active")) {
      toggleMenu();
    }
  }
});

// Initialize All Event Listeners
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);

//   // JavaScript code to check if the URL is not found and redirect to 404 page
//   window.addEventListener('DOMContentLoaded', () => {
//     const pageNotFound = true; // You should determine if the page is not found

//     if (pageNotFound) {
//         window.location.href = '404-not-found.html';
//     }
// });