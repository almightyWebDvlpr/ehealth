const toggleButton = document.getElementById('darkColorToggleButton');
const body = document.body;
const header = document.querySelector('.header');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
