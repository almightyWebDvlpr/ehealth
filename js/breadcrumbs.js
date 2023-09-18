// Translation mapping for Ukrainian
const translationMap = {
  "electronic-healthcare": "Електронна охорона здоров'я",
  systems: "Системи",
  "ehcs.html": "ЕСОЗ",
  "central.html": "Централь",
  "mis.html": "МІСи",
  "is-nhcs.html": "ІС НСЗУ",
  registers: "Реєстри",
  "country-basic-registers-and-healthcare.html":
    "Базові реєстри країни та сфери охорони здоров’я",
  data: "Дані",
  "dashboards.html": "Дашборди ЕСОЗ",
  "service-providers": "Надавачам послуг",
  "heads-of-health-care-institutions": "Керівникам ЗОЗ",
  "how-connect-institution-to-esoz.html": "Як підключити заклад до ЕСОЗ",
  "how-choose-mis.html": "Як обрати МІС",
  "mis-catalog.html": "Каталог МІС",
  doctors: "Лікарям",
  "to-doctors.html": "Лікарям",
  education: "Навчання",
  "digital-educational-resources.html": "Цифрові освітні ресурси",
  "nhcs-academy.html": "Академія НСЗУ",
  pharmacies: "Аптечним закладам",
  "how-to-connect-pharmacy-to-the-nhcs.html": "Як підключити аптеку до ЕСОЗ",
  "pharmacy-how-to-choose-mis.html": "Як обрати МІС",
  "system-performance-monitoring.html": "Моніторинг працездатності системи",
  "faq.html": "FAQ",
  patients: "Пацієнтам",
  "to-patients.html": "Пацієнтам",
  "how-to-make-a-declaration-with-a-family-doctor.html":
    "Як укласти декларацію із сімейним лікарем?",
  "how-to-get-an-e-prescription.html": "Як отримати е-рецепт?",
  "medical-conclusions-about-temporary-disability.html":
    "Медичні висновки про тимчасову непрацездатність",
    "how-to-use-e-malyatko-services.html":"Як скористатися послугами е-Малятко?",
    "how-to-get-e-referral-to-a-specialist.html":"Як отримати е-направлення до спеціаліста?",
    partners:"Партнерам",
    "to-state-authorities.html":"Органам державної влади",
    "to-software-developers.html":"Розробникам ПЗ",
    developers:"Розробникам інформаційних систем",
    "how-to-connect-mis-to-esoz.html":"Як підключити МІС до ЕСОЗ?",
    "technical-requirements-and-test-program-for-mis.html":"Технічні вимоги та тестова програма до МІС",
  news: "Новини",
  "blog.html":"Блог",
  "contacts.html": "Контакти",
  "partners.html":"Партнери",
  support:"Підтримка",
};

// Function to translate a breadcrumb segment (if applicable)
function translateBreadcrumbSegment(segment) {
  const referringPage = document.referrer;

  if (referringPage) {
    console.log(`You came from: ${referringPage}`);
  } else {
    console.log(`You did not come from a referring page.`);
  }
  return translationMap[segment] || segment;
}

// Function to create the breadcrumbs dynamically
function createBreadcrumbs() {
  const breadcrumbsContainer = document.getElementById("breadcrumbs");
  const pathSegments = window.location.pathname
    .split("/")
    .filter((segment) => segment.trim() !== "");

  // Clear existing breadcrumbs
  breadcrumbsContainer.innerHTML = "";

  // Create the "Home" breadcrumb as a link
  const homeBreadcrumb = createBreadcrumbItem("Головна", "/");
  breadcrumbsContainer.appendChild(homeBreadcrumb);

  // Generate dynamic breadcrumbs based on the current page's location
  let currentPath = "/";
  pathSegments.forEach((segment, index) => {
    if (segment === "to-doctors.html") {
      return; // Skip adding the breadcrumb for "to-doctors.html"
    } else if (segment === "to-patients.html") {
      return;
    }
    currentPath += segment + "/";
    const translatedSegment = translateBreadcrumbSegment(segment, pathSegments);
    const breadcrumbItem = createBreadcrumbItem(
      translatedSegment,
      index === 0 ? currentPath : null,
      index === 0 // Check if it's the "Home" segment
    );
    breadcrumbsContainer.appendChild(breadcrumbItem);
  });
}

// Function to create a single breadcrumb item
function createBreadcrumbItem(label, link, isHomeSegment) {
  const breadcrumbItem = document.createElement("li");

  if (link && !isHomeSegment) {
    const breadcrumbLink = document.createElement("a");
    breadcrumbLink.href = link;
    breadcrumbLink.textContent = label;
    breadcrumbItem.appendChild(breadcrumbLink);
  } else {
    breadcrumbItem.textContent = label;
  }

  return breadcrumbItem;
}

// Call the function to populate the breadcrumbs when the page loads
window.onload = createBreadcrumbs;
