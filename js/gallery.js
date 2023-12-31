import { misImagesUrls, partnersImagesUrls } from "./data.js";
import { fetchDataAndCreateTable } from "./fetchCatalogData.js";

let getMisesData;

function createImageList(containerId, imageUrls, containerStyles, imageStyles) {
  const imageContainer = document.getElementById(containerId);

  if (!imageContainer) {
    return;
  }
  // console.log(imageContainer)
  imageContainer.classList.add("grid-auto-fit", "gap-32");
  // Apply container styles if provided
  if (containerStyles) {
    Object.assign(imageContainer.style, containerStyles);
  }

  if (containerId === "misImageContainer") {
    getMisesData = (data, gid) => {
      data.forEach((element) => {
        if (element["Посилання на веб-сайт МІС"] || element["Логотип (новий)"]) {
          const imageDiv = document.createElement("div");
          imageDiv.classList.add("grid-auto-fit", "gap-32");
          imageDiv.style.padding = "24px";
          imageDiv.style.background = "#fff";
          imageDiv.style.textAlign = "center";
          imageDiv.style.display = "flex";
          imageDiv.style.alignItems = "center";
          imageDiv.style.justifyContent = "center";
          if (containerStyles) {
            Object.assign(imageDiv.style, containerStyles);
          }
          const linkElement = document.createElement("a");
          linkElement.setAttribute("href", element["Посилання на веб-сайт МІС"]);
          linkElement.setAttribute("target", "_blank");
          const imgElement = document.createElement("img");
          imgElement.classList.add('galery-mis-img', 'galery-img')

          const idIndex = element["Логотип (новий)"].indexOf('id=');

          if (idIndex !== -1) {
            // Extract the substring starting from the index of 'id='
            var fileId = element["Логотип (новий)"].slice(idIndex + 3);
          
            imgElement.src = `https://drive.google.com/uc?id=${fileId}`
          }
        

          if (imageStyles) {
            Object.assign(imgElement.style, imageStyles);
          }

          linkElement.appendChild(imgElement);
          imageDiv.appendChild(linkElement);
          imageContainer.appendChild(imageDiv);
        }
      });
    };
  } else {
    // Loop through the image URLs
    for (const imageUrl of imageUrls) {
      // Create a <div> element for each image
      const imageDiv = document.createElement("div");
      imageDiv.classList.add("grid-auto-fit", "gap-32");
      // Apply default styles to the image container
      imageDiv.style.padding = "24px";
      imageDiv.style.background = "#fff";
      imageDiv.style.textAlign = "center";
      imageDiv.style.display = "flex";
      imageDiv.style.alignItems = "center";
      imageDiv.style.justifyContent = "center";

      // Apply custom image container styles if provided
      if (containerStyles) {
        Object.assign(imageDiv.style, containerStyles);
      }

      const imgElement = document.createElement("img");
      imgElement.classList.add('galery-img')
      

      if (imageStyles) {
        Object.assign(imgElement.style, imageStyles);
      }

      imgElement.src = imageUrl;

      imageDiv.appendChild(imgElement);

      imageContainer.appendChild(imageDiv);
    }
  }
}

createImageList("misImageContainer", misImagesUrls);

createImageList("partnersImageContainer", partnersImagesUrls);

async function initializeFetch() {
  try {
    await fetchDataAndCreateTable(
      "1hP1taKmO_sNOol52rPnB6QoYmFNVAlOfidu1bZPOMK4",
      "1138747254",
      getMisesData
    );
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initializeFetch();
});
