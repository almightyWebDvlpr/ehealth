function updateYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    // Set the current year
    document.getElementById("currentYear").textContent = currentYear;

    // Calculate the date for the end of the current year (December 31 at 23:59:59)
    const endOfYearDate = new Date(currentYear + 1, 0, 0, 23, 59, 59, 999);

    // Calculate the time remaining until the end of the year
    const timeRemaining = endOfYearDate - currentDate;

    // If the current date is past the end of the year, update the year to the next year
    if (timeRemaining <= 0) {
        const nextYear = currentYear + 1;
        document.getElementById("currentYear").textContent = nextYear;
    }
}

updateYear(); // Initial call to set the current year

// To continuously check and update the year, use setInterval
setInterval(updateYear, 1000); // Check every second




