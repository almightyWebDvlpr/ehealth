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





// Function to create and append images to the container
function createImageList() {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.classList.add('grid-auto-fit', 'gap-32')
    // Loop through the image URLs
    for (const imageUrl of misImagesUrls) {
        // Create a <div> element for each image
        const imageDiv = document.createElement('div');
        imageDiv.style.padding = '24px 24px 24px 24px';
        imageDiv.style.background = '#fff';
        imageDiv.style.textAlign = 'center';
      
        // Create an <img> element
        const imgElement = document.createElement('img');
        imgElement.style.width = '200px';
        imgElement.style.height = '90px';
        imgElement.style.objectFit = 'contain';
        // Set the src attribute to the image URL
        imgElement.src = imageUrl;
  
        // Append the <img> element to the <div>
        imageDiv.appendChild(imgElement);
  
        // Append the <div> to the container
        imageContainer.appendChild(imageDiv);
    }
  }
  
  // Call the function to create the image list
  createImageList();