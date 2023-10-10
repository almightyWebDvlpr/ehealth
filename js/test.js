document.addEventListener('click', (event) => {
  if (event.target.classList.contains('to-catalog')) {
    const clickedButton = event.target;
    const buttonTextContent = clickedButton.textContent.trim();
    const encodedText = encodeURIComponent(buttonTextContent);
    window.open(`../../catalog.html?q=${encodedText}`, "_blank");
  }
});
