const misImagesUrls = [
    "../../assets/images/mis/3i.jpg",
    "../../assets/images/mis/Clinica Web.PNG",
    "../../assets/images/mis/DocDream.png",
    "../../assets/images/mis/eApteka.png",
    "../../assets/images/mis/EvoMIS.png",
    "../../assets/images/mis/Health24.jpg",
    "../../assets/images/mis/HealthTech.png",
    "../../assets/images/mis/Helsi.jpg",
    "../../assets/images/mis/iClinic.jpg",
    "../../assets/images/mis/Lakmus.png",
    "../../assets/images/mis/logo.svg",
    "../../assets/images/mis/nHealth.jpg",
    "../../assets/images/mis/PharmaSpace.png",
    "../../assets/images/mis/SimplexMed.png",
    "../../assets/images/mis/SimplexMis.png",
    "../../assets/images/mis/TerraLab.PNG",
    "../../assets/images/mis/АПТЕКА 911.PNG",
    "../../assets/images/mis/Аскеп.jpg",
    "../../assets/images/mis/ВІСА.jpg",
    "../../assets/images/mis/Дніпро-МТ.png",
    "../../assets/images/mis/Доктор Елекс.png",
    "../../assets/images/mis/Дорадо.png",
    "../../assets/images/mis/Електронна лікарня 2.0.png",
    "../../assets/images/mis/Емсімед.PNG",
    "../../assets/images/mis/Каштан.png",
    "../../assets/images/mis/МедЕйр.PNG",
    "../../assets/images/mis/Медстар.png",
    "../../assets/images/mis/Медікс.jpg",
    "../../assets/images/mis/Медікіт.png",
    "../../assets/images/mis/Медінфосервіс.PNG",
    "../../assets/images/mis/МІА_здоров_я.PNG",
    "../../assets/images/mis/Подорожник.png",
    "../../assets/images/mis/Скарб.PNG",
    "../../assets/images/mis/Таблеткі.png",
    "../../assets/images/mis/Укрмедсофт.png",
    "../../assets/images/mis/ІС СЗХ.ico"
  ];


  const partnersImagesUrls = [
    "../../assets/images/partners/2560px-USAID-Identity.png",
    "../../assets/images/partners/flag-evrosoyuza-max-990.png",
    "../../assets/images/partners/Logo-World-Bank-IBRD-IDA.png",
    "../../assets/images/partners/350px-Alinea-Web-logo.png",
    "../../assets/images/partners/26-abt-associates.png",
    "../../assets/images/partners/1200px-UNDP_logo.png",
    "../../assets/images/partners/1280px-Deloitte.png",
    "../../assets/images/partners/CRDFGLOBAL.png",
    "../../assets/images/partners/edge-canada.png",
    "../../assets/images/partners/EGAP1024.png",
    "../../assets/images/partners/logo_cgz.png",
    "../../assets/images/partners/ukaid-logo-6FCE8595F5-seeklogo.png",
    "../../assets/images/partners/Logo_Krasn.png",
    "../../assets/images/partners/MSH-logo.png",
  ]

function createImageList(containerId, imageUrls, containerStyles, imageStyles) {
  const imageContainer = document.getElementById(containerId);
  imageContainer.classList.add('grid-auto-fit', 'gap-32')
  // Apply container styles if provided
  if (containerStyles) {
    Object.assign(imageContainer.style, containerStyles);
  }

  // Loop through the image URLs
  for (const imageUrl of imageUrls) {
    // Create a <div> element for each image
    const imageDiv = document.createElement("div");
    imageDiv.classList.add('grid-auto-fit', 'gap-32')
    // Apply default styles to the image container
    imageDiv.style.padding = "24px";
    imageDiv.style.background = "#fff";
    imageDiv.style.textAlign = "center";
    imageDiv.style.display = "block";

    // Apply custom image container styles if provided
    if (containerStyles) {
      Object.assign(imageDiv.style, containerStyles);
    }

    // Create an <img> element
    const imgElement = document.createElement("img");

    // Apply default styles to the image
    // imgElement.style.width = "200px";
    // imgElement.style.height = "90px";
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



// createImageList(
//   "misImageContainer",
//   misImagesUrls,
//   { padding: "24px", background: "#fff", textAlign: "center" },
//   { width: "200px", height: "90px", objectFit: "contain" }
// );


createImageList(
    "partnersImageContainer",
    partnersImagesUrls,
    // { padding: "24px", background: "#fff", textAlign: "center" },
    // { width: "200px", height: "90px", objectFit: "contain" }
  );
