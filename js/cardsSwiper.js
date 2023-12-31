import {
  responsesSlides,
  goalsSlides,
  dashboardSlides,
  systemsSlides,
  developersSlides,
  newsSlides,
} from "./data.js";

function createSlideElement(slideContent, elementType, id) {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.classList.add("responses-swiper-slide");

  const card =
    elementType === "a"
      ? document.createElement("a")
      : document.createElement("div");

  // Set a class based on the container's ID
  card.className = `swiper-card ${id.slice(1)}__swiper-card`;

  if (slideContent.url) {
    card.href = slideContent.url;
  }

  const title = document.createElement("h5");
  title.className = "h-5-heading";
  title.textContent = slideContent.title;
  title.className = id === "#dashboardsSwiper" ? "mb" : "";

  const icon = document.createElement("i");
  icon.className = slideContent.iconClass;

  card.appendChild(title);
  card.appendChild(icon);
  // Check if there's paragraph content before creating the paragraph element
  if (slideContent.paragraph) {
    const paragraph = document.createElement("p");
    paragraph.textContent = slideContent.paragraph;
    card.appendChild(paragraph);
  }

  slide.appendChild(card);
  return slide;
}

function createReusableSwiper(id, slides, elementType, options) {
  const swiperContainer = document.querySelector(id);
  if (!swiperContainer) {
    return; // Exit if the container is not found
  }

  const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");
  if (!swiperWrapper) {
    return; // Exit if the wrapper is not found
  }

  slides.forEach((slideContent) => {
    const slide = createSlideElement(slideContent, elementType, id);
    swiperWrapper.appendChild(slide);
  });

  return new Swiper(id, options);
}

const swiperOptions = {
  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 4,
  grabCursor: true,
  // loop: true,
  loopFillGroupWithBlank: true,
  // autoplay: {
  //     delay: 5000,
  // },
  scrollbar: {
    el: `.swiper-scrollbar.responses-scrollbar`,
    hide: false,
    draggable: true,
    dragSize: 400,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      scrollbar: {
        el: ".swiper-scrollbar.responses-scrollbar",
        enabled: true,
        dragSize: 0,
      },
    },
    640: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
};

const responsesSwiperOptions = {
  ...swiperOptions,
  navigation: {
    nextEl: ".swiper-button-next.responses-button-next",
    prevEl: ".swiper-button-prev.responses-button-prev",
  },
};

const goalsSwiperOtions = {
  ...swiperOptions,
  scrollbar: {
    el: `.goals-scrollbar`,
    hide: false,
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.goals-button-next",
    prevEl: ".swiper-button-prev.goals-button-prev",
  },
};

const dasboardSwiperOptions = {
  ...swiperOptions,
  navigation: {
    nextEl: ".swiper-button-next.dasboard-button-next",
    prevEl: ".swiper-button-prev.dasboard-button-prev",
  },
};

// Initialize the reusable Swiper components with different element types
const responsesSwiper = createReusableSwiper(
  "#swiper1",
  responsesSlides,
  "a",
  responsesSwiperOptions
);

const goalsSwiper = createReusableSwiper(
  "#swiper2",
  goalsSlides,
  "div",
  goalsSwiperOtions
);

const dashboardsSwiper = createReusableSwiper(
  "#dashboardsSwiper",
  dashboardSlides,
  "div",
  dasboardSwiperOptions
);

const systemsSwiper = createReusableSwiper(
  "#systemsSwiper",
  systemsSlides,
  "a",
  responsesSwiperOptions
);

const developersSwiper = createReusableSwiper(
  "#developersSwiper",
  developersSlides,
  "a",
  responsesSwiperOptions
);


const newsSwiper = createReusableSwiper(
  "#newsSwiper",
  newsSlides,
  "a",
  responsesSwiperOptions
);
