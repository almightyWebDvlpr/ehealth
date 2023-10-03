const increaseButton = document.getElementById("increaseFontSizeBtn");
const decreaseButton = document.getElementById("decreaseFontSizeBtn");
const elements = [
  ...document.getElementsByTagName("a"),
  ...document.getElementsByTagName("h1"),
  ...document.getElementsByClassName("paragraph"),
];
const maxIncrease = 3;
let currentIncrease = 0;

// Store initial font sizes
const initialFontSizes = elements.map((element) =>
  parseFloat(getComputedStyle(element).fontSize)
);

// Helper function to update font sizes
function updateFontSizes(change) {
  elements.forEach((element, index) => {
    const currentSize = parseFloat(getComputedStyle(element).fontSize);
    const newSize = currentSize + change;
    if (
      newSize >= initialFontSizes[index] &&
      newSize <= initialFontSizes[index] * maxIncrease
    ) {
      element.style.fontSize = newSize + "px";
    }
  });
}

// Add click event listener to increase font size button
increaseButton.addEventListener("click", function () {
  if (currentIncrease < maxIncrease) {
    updateFontSizes(3);
    currentIncrease++;
    decreaseButton.disabled = false;
  }
  if (currentIncrease === maxIncrease) {
    increaseButton.disabled = true;
  }
});

// Add click event listener to decrease font size button
decreaseButton.addEventListener("click", function () {
  if (currentIncrease > 0) {
    updateFontSizes(-3);
    currentIncrease--;
    increaseButton.disabled = false;
  }
  if (currentIncrease === 0) {
    decreaseButton.disabled = true;
  }
});

// Disable the decrease button initially
decreaseButton.disabled = true;







// manipualtion with letter spacing


document.addEventListener("DOMContentLoaded", function () {

const elementsLetterSpacing = [
  ...document.getElementsByTagName("a"),
  ...document.getElementsByTagName("h1"),
  ...document.getElementsByTagName("h2"),
  ...document.getElementsByTagName("h3"),
  ...document.getElementsByTagName("h4"),
  ...document.getElementsByClassName("h-5-heading"),
  ...document.getElementsByTagName("p"),
];


const maxIncreaseClicks = 5; // Maximum allowed increase clicks
let currentIncreaseClicks = 0;

// Helper function to update letter spacings
function updateLetterSpacing(change) {
    elementsLetterSpacing.forEach(element => {
      const currentSpacing = parseFloat(getComputedStyle(element).letterSpacing);
      const newSpacing = currentSpacing + change;
  
      // Ensure that the new letter spacing is non-negative
      if (newSpacing >= 0) {
        element.style.letterSpacing = newSpacing + 'px';
      }
    });
  }
  
  // Add click event listener to increase letter spacing button
  increaseLetterSpacingBtn.addEventListener('click', function () {
    if (currentIncreaseClicks < maxIncreaseClicks) {
      updateLetterSpacing(1); // Increase letter spacing by 1px
      currentIncreaseClicks++;
      decreaseLetterSpacingBtn.disabled = false;
    }
    if (currentIncreaseClicks >= maxIncreaseClicks) {
      increaseLetterSpacingBtn.disabled = true;
    }
  });
  
  // Add click event listener to decrease letter spacing button
  decreaseLetterSpacingBtn.addEventListener('click', function () {
    if (currentIncreaseClicks > 0) {
      updateLetterSpacing(-1); // Decrease letter spacing by 1px
      currentIncreaseClicks--;
  
      // Check if it's the last click to set letter spacing to 0.1px
      if (currentIncreaseClicks === 0) {
        elementsLetterSpacing.forEach(element => {
          element.style.letterSpacing = '0.1px';
        });
      }
  
      increaseLetterSpacingBtn.disabled = false;
    }
    if (currentIncreaseClicks <= 0) {
      decreaseLetterSpacingBtn.disabled = true;
    }
  });
  
  // Disable the decrease button initially
  decreaseLetterSpacingBtn.disabled = true;
});



// toggle read line 
const cursorLine = document.querySelector(".cursor-line");
const readLineBtn = document.getElementById('readLineBtn');

readLineBtn.addEventListener('click', ()=>{
  cursorLine.classList.toggle('hide');
})


document.addEventListener("mousemove", (e) => {
 
  const scrollY = window.scrollY || window.pageYOffset;
  cursorLine.style.top = e.clientY + scrollY + "px";
});




//   toggle underline


document.addEventListener("DOMContentLoaded", function () {
    const toggleUnderlineBtn = document.getElementById("toggleUnderlineBtn");
    const links = document.querySelectorAll("a");

    let isUnderline = true;

    toggleUnderlineBtn.addEventListener("click", function () {
      // Toggle the 'underline' class on all <a> tags
      links.forEach(link => {
        if (isUnderline) {
          link.classList.add("underline");
        } else {
          link.classList.remove("underline");
        }
      });

      // Update the underline state
      isUnderline = !isUnderline;
    });
  });