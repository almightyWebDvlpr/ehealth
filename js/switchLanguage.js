function initializeCustomSelect(filterId) {
    const selectFilter = document.querySelector(`#${filterId}`);
    const optionsList = selectFilter.querySelector(".options-list");
    const hiddenInput = selectFilter.querySelector(`#${filterId}-selected-option`);

    selectFilter.querySelector(".select-header").addEventListener("click", function () {
        optionsList.classList.toggle("show-options");
    });

    const optionItems = optionsList.querySelectorAll("li");
    optionItems.forEach(function (option) {
        option.addEventListener("click", function () {
            const selectedValue = option.getAttribute("data-value");
            hiddenInput.value = selectedValue;
            selectFilter.querySelector(".select-header p").textContent = option.textContent;
            optionsList.classList.remove("show-options");
        });
    });

    // Set the initial language based on the browser's language preference
    const browserLanguage = window.navigator.language;
    // console.log(browserLanguage)
    if (browserLanguage.startsWith('ru')) {
        hiddenInput.value = 'UA';
    } else if (browserLanguage.startsWith('pl')) {
        hiddenInput.value = 'PL';
    } else {
        hiddenInput.value = 'EN';
    }

    // Update the selected language display
    const initialSelectedLanguage = hiddenInput.value;
    selectFilter.querySelector(".select-header p").textContent = initialSelectedLanguage;
}

// Initialize each custom select filter
initializeCustomSelect("switchLanguageSelect");
