const coociesBox = document.querySelector(".cookies-popup-wrapper");

const buttons = document.querySelectorAll(".cookies-popup-btn");

const GA_MEASUREMENT_ID = "G-0FCM7ML7LK"; // Replace with your Google Analytics Measurement ID

function initializeGoogleAnalytics() {
  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-SXYG678JTB");

}

const excuteCodes = () => {
  if (document.cookie.includes("accepted")) return;

  coociesBox.classList.add("show-coocies-box");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      coociesBox.classList.remove("show-coocies-box");

      if (button.id == "acceptBtn") {
        acceptCookies();
        const currentTime = new Date();
        
        // gtag("set", {
        //   "Last Visit Time": currentTime.toISOString(),
        // });
        // Track "time on page" event when the button is clicked
        const pageLoadTime = new Date();
  
        // gtag("event", "Time on Page", {
        //   event_category: "User Interaction",
        //   event_label: "Button Clicked",
        //   value: (new Date() - pageLoadTime) / 1000, // Time in seconds
        // });


        // Track page change when the button is clicked
        window.addEventListener("beforeunload", function () {
          const destinationURL = window.location.href;
          // gtag("event", "Page Change", {
          //   event_category: "Page Navigation",
          //   event_label: "Destination Page",
          //   value: destinationURL,
          // });
        });
      } else {
      }
    });
  });

  function acceptCookies() {
    // Enable Google Analytics tracking
    initializeGoogleAnalytics();
    document.cookie = "cookieBy= accepted; max-age=" + 60 * 60 * 24 * 30;
  }
};

window.addEventListener("load", excuteCodes);

// Track searches
const searchFromInput = document.getElementById("search-input");
const searchButton = document.querySelector(".search__icon");

if(document.cookie.includes("accepted")){
  searchButton.addEventListener("click", () => {
    const searchQuery = searchFromInput.value;

    if (searchQuery) {
      // gtag("event", "Search", {
      //   event_category: "User Interaction",
      //   event_label: "Search Input",
      //   value: searchQuery,
      // });
    }
  });
}






