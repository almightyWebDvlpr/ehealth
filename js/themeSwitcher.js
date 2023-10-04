const onDarkColorToggleButton = document.getElementById('onDarkColorToggleButton');
const offDarkColorToggleButton = document.getElementById('offDarkColorToggleButton');
const body = document.body;
// const header = document.querySelector('.header');

onDarkColorToggleButton.addEventListener('click', () => {
    body.classList.add('dark-mode');
    onDarkColorToggleButton.disabled = true;
    offDarkColorToggleButton.disabled = false;
});

offDarkColorToggleButton.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    onDarkColorToggleButton.disabled = false;
    offDarkColorToggleButton.disabled = true;
});