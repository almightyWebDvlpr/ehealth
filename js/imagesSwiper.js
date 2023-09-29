import {misImagesUrls, partnersImagesUrls} from './data.js'

 

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
