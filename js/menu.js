
// Add a click event listener to the document body
document.body.addEventListener('click', function(event) {
    // Get all open dropdowns
    let allDropdowns = document.querySelectorAll(".dropdown.open");
  
    // Check if the clicked element is inside any open dropdown
    let isInsideDropdown = false;
    for (var i = 0; i < allDropdowns.length; i++) {
      if (allDropdowns[i].contains(event.target)) {
        isInsideDropdown = true;
        break;
      }
    }
  
    // If the click is outside any open dropdown, close all dropdowns
    if (!isInsideDropdown) {
      for (var i = 0; i < allDropdowns.length; i++) {
        allDropdowns[i].classList.remove('open');
      }
  
    }
  });
  
  // Your existing toggleDropdown() function with event.stopPropagation()
  function toggleDropdown(dropdownId) {
    let dropdownContent = document.getElementById(dropdownId);
    let allDropdowns = document.querySelectorAll(".dropdown");
  
    // Close all other dropdowns
    for (var i = 0; i < allDropdowns.length; i++) {
      if (allDropdowns[i].id !== dropdownId && allDropdowns[i].classList.contains('open')) {
        allDropdowns[i].classList.remove('open');
      }
    }
  
    // Toggle the 'open' class on the clicked dropdown
    dropdownContent.classList.toggle('open');

    // Prevent event propagation to the document body
    event.stopPropagation();
  }
  


//   -------------------------------------------------------

let nav_toggle = document.querySelector('.nav_toggle');
let nav_toggle_icon = document.querySelector('.nav_toggle .bx');
let nav_menu = document.querySelector('.navigation__list');

nav_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  
  if (nav_menu.classList.contains('active')) {
    // Replace 'menu' and 'close' with the appropriate class names for your icon library
    nav_toggle_icon.classList.remove('bx-menu');
    nav_toggle_icon.classList.add('bx-x');
  } else {
    // Replace 'menu' and 'close' with the appropriate class names for your icon library
    nav_toggle_icon.classList.remove('bx-x');
    nav_toggle_icon.classList.add('bx-menu');
  }
});

  