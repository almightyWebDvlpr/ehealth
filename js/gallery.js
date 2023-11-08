import { misImagesUrls, partnersImagesUrls } from "./data.js";

function createImageList(containerId, imageUrls, containerStyles, imageStyles) {
  const imageContainer = document.getElementById(containerId);

  if(!imageContainer){
    return
  }
// console.log(imageContainer)
  imageContainer.classList.add("grid-auto-fit", "gap-32");
  // Apply container styles if provided
  if (containerStyles) {
    Object.assign(imageContainer.style, containerStyles);
  }

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
    imageDiv.style.alignItems = 'center';
    imageDiv.style.justifyContent = 'center';

    // Apply custom image container styles if provided
    if (containerStyles) {
      Object.assign(imageDiv.style, containerStyles);
    }

    // Create an <img> element
    const imgElement = document.createElement("img");
    imgElement.style.maxWidth = "100%";
    imgElement.style.display = 'inline-block'

    // Apply default styles to the image
    // imgElement.style.width = "200px";
    // imgElement.style.height = "90px";
    imgElement.style.aspectRatio = "3/2";
    imgElement.style.objectFit = "contain";

    // Apply custom image styles if provided
    if (imageStyles) {
      Object.assign(imgElement.style, imageStyles);
    }

    // Set the src attribute to the image URL
    imgElement.src = imageUrl;

    // Append the <img> element to the <div>
    imageDiv.appendChild(imgElement);

    // Append the <div> to the container
    imageContainer.appendChild(imageDiv);
  }
}

createImageList(
  "misImageContainer",
  misImagesUrls
);

createImageList(
  "partnersImageContainer",
  partnersImagesUrls
  // { padding: "24px", background: "#fff", textAlign: "center" },
  // { width: "200px", height: "90px", objectFit: "contain" }
);
