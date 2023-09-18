function createSlideElement(slideContent, elementType, id) {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slide.classList.add("responses-swiper-slide");

  const card =
    elementType === "a"
      ? document.createElement("a")
      : document.createElement("div");
  card.className =
    elementType === "a"
      ? "responses__swiper-card"
      : id === "#dashboardsSwiper"
      ? "responses__swiper-card card-height p-m section-background"
      : "goals__swiper-card";
  if (slideContent.url) {
    card.href = slideContent.url;
  }

  const title = document.createElement("h5");
  title.textContent = slideContent.title;
  title.className = id === "#dashboardsSwiper" ? "mb" : "";
  const paragraph = document.createElement("p");
  paragraph.textContent = slideContent.paragraph;

  const icon = document.createElement("i");
  icon.className = slideContent.iconClass;

  card.appendChild(icon);
  card.appendChild(title);
  card.appendChild(paragraph);
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

const responsesSlides = [
  {
    title: "Моніторинг працездатності ЄСОЗ",
    iconClass: "bx bx-right-arrow-alt",
    url: "./service-providers/system-performance-monitoring.htmllink1.html",
  },
  {
    title: "Дашборди ЄСОЗ",
    iconClass: "bx bx-right-arrow-alt",
    url: "./electronic-healthcare/data/dashboards.html",
  },
  {
    title: "Каталог МІС",
    iconClass: "bx bx-right-arrow-alt",
    url: "./service-providers/mis-catalog.html",
  },
  {
    title: "Пошук медзакладу за направленням",
    iconClass: "bx bx-right-arrow-alt",
    url: "link4.html",
  },
];

const goalsSlides = [
  {
    title: "Забезпечити прозорість фінансування cистеми охорони здоров'я",
    iconClass: "bx bx-check",
  },
  {
    title:
      "Сформувати бізнес середовище для створення нових електронних сервісів",
    iconClass: "bx bx-check",
  },
  {
    title:
      "Надати можливість працювати без паперу поступовий перехід на електронний облік(е-рецепт, е-картка,е-направлення)",
    iconClass: "bx bx-check",
  },
  {
    title:
      "Створити простір для інновацій в медицині (machine learning, big data, blockchain, etc.)",
    iconClass: "bx bx-check",
  },
  {
    title: "Сприяти розвитку медичного ІТ-ринку",
    iconClass: "bx bx-check",
  },
];

const dashboardSlides = [
  {
    title:
      "Стан подання пропозицій закладами охорони здоров`я на укладення договорів з НСЗУ за програмою медичних гарантій",
    paragraph:
      "Інформація про подання пропозицій спеціалізованими закладами в системі “Смарттендер” на укладення договору з НСЗУ за кожним із медичних пакетів.",
    iconClass: "bx bx-right-arrow-alt",
  },

  {
    title:
      "Укладені договори про медичне обслуговування населення за програмою медичних гарантій",
    paragraph:
      "Інформація про заклади охорони здоров’я, які надають медичні послуги за тими з медичних пакетів, за якими уклали договір з НСЗУ.",
    iconClass: "bx bx-right-arrow-alt",
  },

  {
    title: "Оплати надавачам медичної допомоги за програмою медичних гарантій",
    paragraph:
      "Інформація щодо сум виплат закладам, які надають первинну, спеціалізовану та екстрену медичну допомогу за договором з НСЗУ.",
    iconClass: "bx bx-right-arrow-alt",
  },

  {
    title:
      "Звіт про доходи та витрати надавачів медичних послуг (окремі показники)",
    paragraph:
      "Інформація про забезпечення ресурсами та їх використання медичними закладами, що уклали договори з Національною службою здоров’я України.",
    iconClass: "bx bx-right-arrow-alt",
  },

  {
    title:
      "Звіт про доходи та витрати надавачів медичних послуг (окремі показники)",
    paragraph:
      "Інформація про забезпечення ресурсами та їх використання медичними закладами, що уклали договори з Національною службою здоров’я України.",
    iconClass: "bx bx-right-arrow-alt",
  },
];

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
      scrollbar: {
        el: ".swiper-scrollbar.responses-scrollbar",
        enabled: true,
        dragSize: 0,
      },
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
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
