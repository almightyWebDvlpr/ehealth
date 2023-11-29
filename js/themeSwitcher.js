// const onDarkColorToggleButton = document.getElementById('onDarkColorToggleButton');
// const offDarkColorToggleButton = document.getElementById('offDarkColorToggleButton');
// const body = document.body;
// // const header = document.querySelector('.header');

// onDarkColorToggleButton.addEventListener('click', () => {
//     body.classList.add('dark-mode');
//     onDarkColorToggleButton.disabled = true;
//     offDarkColorToggleButton.disabled = false;
// });

// offDarkColorToggleButton.addEventListener('click', () => {
//     body.classList.remove('dark-mode');
//     onDarkColorToggleButton.disabled = false;
//     offDarkColorToggleButton.disabled = true;
// });







const onDarkColorToggleButton = document.getElementById('onDarkColorToggleButton');
const offDarkColorToggleButton = document.getElementById('offDarkColorToggleButton');
const body = document.body;

// Check local storage for dark mode preference on page load
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Set initial state based on local storage
if (isDarkMode) {
    body.classList.add('dark-mode');
    onDarkColorToggleButton.disabled = true;
    offDarkColorToggleButton.disabled = false;
}

onDarkColorToggleButton.addEventListener('click', () => {
    body.classList.add('dark-mode');
    onDarkColorToggleButton.disabled = true;
    offDarkColorToggleButton.disabled = false;

    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', 'true');
});

offDarkColorToggleButton.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    onDarkColorToggleButton.disabled = false;
    offDarkColorToggleButton.disabled = true;

    // Save dark mode preference to local storage
    localStorage.setItem('darkMode', 'false');
});

