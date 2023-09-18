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
    "../../assets/images/partners/Logo_Krasn.png",
    "../../assets/images/partners/MSH-logo.png",
    "../../assets/images/partners/ukaid-logo-6FCE8595F5-seeklogo.png",
    "../../assets/images/partners/Logo_Krasn.png",
    "../../assets/images/partners/MSH-logo.png",
  ]

 

  function createSlideElement(imageUrl) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide card";
  
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";
  
    const imageDiv = document.createElement("div");
    imageDiv.className = "image";
  
    const image = document.createElement("img");
    image.className = "swiper-image";
    image.src = imageUrl;
  
    imageDiv.appendChild(image);
    cardContent.appendChild(imageDiv);
    slide.appendChild(cardContent);
  
    return slide;
  }
  
  function createImageSwiper(containerId, slides, options) {
    
    const swiperContainer = document.querySelector(containerId);
    if (!swiperContainer) {
      return; // Exit if the container is not found
    }
  
    const swiperWrapper = swiperContainer.querySelector(".content");
    if (!swiperWrapper) {
      return; // Exit if the wrapper is not found
    }
  
    slides.forEach((imageUrl) => {
      const slide = createSlideElement(imageUrl);
      swiperWrapper.appendChild(slide);
    });

    
  
    return new Swiper(containerId, options);
  }
  
  const imagesSwiperOptions = {
    mousewheel: true,
    keyboard: true,
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      640: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 3, spaceBetween: 40 },
      1024: { slidesPerView: 4, spaceBetween: 50 },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };


  const partnersImagesSwiperOptions = {
    ...imagesSwiperOptions,
    pagination:{
      el: '.swiper-pagination.partners-swiper-pagination',
    },
    navigation: {
      nextEl: ".swiper-button-next.partners-button-next",
      prevEl: ".swiper-button-prev.partners-button-prev",
    },
  }
  
  const misSwiper = createImageSwiper("#mis-swiper-container", misImagesUrls, imagesSwiperOptions);
  const partnersSwiper = createImageSwiper("#partners-swiper-container", partnersImagesUrls, partnersImagesSwiperOptions);
