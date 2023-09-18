const btnModalOpen = document.getElementById('toggleModalButton');
const controlsModal = document.querySelector('.controls-modal');
const buttonText = document.querySelector('.header-control-light-text');
const toggleFontSize = document.getElementById('toggleFontSize');
const toggleTheme = document.getElementById('toggleTheme');
const iconClose = document.querySelector('.icon-modal-close');
const iconShow = document.querySelector('.icon-show');

let isControlsModalVisible = false;

btnModalOpen.addEventListener('click', () => {
  if (isControlsModalVisible) {
    buttonText.classList.remove('hide-text');
    controlsModal.style.display = 'none';
    iconClose.style.display = 'none';
    iconShow.style.display = 'block';
  } else {
    buttonText.classList.add('hide-text');
    controlsModal.style.display = 'block';
    iconClose.style.display = 'block';
    iconShow.style.display = 'none';
  }

  isControlsModalVisible = !isControlsModalVisible;
});

// Add an event listener to the controlsModal to prevent propagation
controlsModal.addEventListener('click', (e) => {
  e.stopPropagation();
});

toggleFontSize.addEventListener('click', ()=>{
    console.log('clicked')
});

toggleTheme.addEventListener('click', ()=>{
    console.log('clicked')
});