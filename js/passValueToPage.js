document.addEventListener('click', (event) => {
  if (event.target.classList.contains('to-catalog')) {
    const clickedButton = event.target;
    const dataValue = clickedButton.getAttribute('data-value');
    console.log(dataValue)
    const buttonTextContent = clickedButton.textContent.trim();
    const encodedText = encodeURIComponent(dataValue); //or set  buttonTextContent
    window.open(`../../catalog.html?q=${encodedText}`, "_blank");
  }
});

