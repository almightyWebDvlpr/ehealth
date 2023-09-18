document.addEventListener("DOMContentLoaded", function () {
    const contentElement = document.getElementById("content");
    const doctorsLink = document.getElementById("doctors-link");
    const pharmacyLink = document.getElementById("pharmacy-link");

    // Function to load content into the main section
    function loadContent(contentFile) {
        fetch(contentFile)
            .then(response => response.text())
            .then(data => {
                contentElement.innerHTML = data;
            })
            .catch(error => {
                console.error(`Error loading content: ${error}`);
            });
    }

    // Event listeners for links
    doctorsLink.addEventListener("click", function (e) {
        e.preventDefault();
        loadContent("./service-providers/mis-catalog.html");
    });

    pharmacyLink.addEventListener("click", function (e) {
        e.preventDefault();
        loadContent("pharmacy-content.html");
    });
});