const tabsBox = document.querySelector(".tabsBox");
const allTabs = document.querySelectorAll(".tab");
const arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;
let touchStartX = 0; // Store initial touch position

const handleIcons = (scrollVal) => {
  let maxScrollWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
  arrowIcons[1].parentElement.style.display =
    maxScrollWidth - scrollVal <= 1 ? "none" : "flex";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let scrollWidth = (tabsBox.scrollLeft += icon.id === "left" ? -100 : 100);
    handleIcons(scrollWidth);
  });
});

const dragging = (e) => {
  if (!isDragging) return;
  tabsBox.classList.add("dragging");
  tabsBox.scrollLeft -= e.movementX;
  handleIcons(tabsBox.scrollLeft);
};

const dragStop = () => {
  isDragging = false;
  tabsBox.classList.remove("dragging");
};

tabsBox.addEventListener("wheel", (e) => {
  tabsBox.scrollLeft += e.deltaY * 50;
  tabsBox.scrollLeft += e.deltaX * 50;
  handleIcons(tabsBox.scrollLeft);
});

tabsBox.addEventListener("mousedown", () => (isDragging = true));
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

// Add touch events for swipe
tabsBox.addEventListener("touchstart", (e) => {
  isDragging = true;
  touchStartX = e.touches[0].clientX;
});

tabsBox.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const touchEndX = e.touches[0].clientX;
  const deltaX = touchEndX - touchStartX;
  tabsBox.scrollLeft -= deltaX;
  handleIcons(tabsBox.scrollLeft);
  touchStartX = touchEndX; // Update the initial touch position
});

tabsBox.addEventListener("touchend", () => {
  isDragging = false;
});
