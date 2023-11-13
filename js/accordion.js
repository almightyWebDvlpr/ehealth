import {
  misAccordion,
  dashboardsAccordion,
  firstCare,
  specialCare,
  pharmacyAccordion,
  declarationAccordion,
  ePrescriptionInstruction,
  babyServiceAccordion,
  developersServiceAccordion,
  digitalEducationAccordionContainer,
  pharmacyFaqAccordion,
} from "./data.js";

function createAccordion(header, content, subcontent, content2, subcontent2) {
  const accordionItem = document.createElement("div");
  accordionItem.className = "accordion-item";

  const accordionHeader = document.createElement("div");
  accordionHeader.className = "accordion-header";

  const headerText = document.createElement("h5");

  // Check if the header contains a link
  const linkRegex = /(https?:\/\/\S+)/;
  const linkMatch = header.match(linkRegex);
  const containsATags = /<a[^>]*>.*<\/a>/i.test(header);

  if (linkMatch) {
    const textBeforeLink = header.split(linkMatch[0])[0];
    const firstPart = document.createElement("span");
    firstPart.innerHTML = textBeforeLink;

    const secondPart = document.createElement("a");
    secondPart.href = linkMatch[0];
    secondPart.textContent = linkMatch[0];
    secondPart.className = "in-text-link";
    secondPart.style.pointerEvents = "all";

    // Add an event listener to the link to stop event propagation
    secondPart.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    headerText.appendChild(firstPart);
    headerText.appendChild(secondPart);
  } else {
    headerText.innerHTML = header;
  }

  if (containsATags) {
    // Create a regular expression to match <a> tags
    const regex = /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1[^>]*?>(.*?)<\/a>/gi;

    const extractedText = header.replace(
      regex,
      function (match, quote, url, linkText) {
        const link = document.createElement("a");
        link.href = url;
        link.textContent = linkText;
        link.classList.add("in-text-link"); // Add the class here
        link.style.pointerEvents = "all";

        return link.outerHTML;
      }
    );

    headerText.innerHTML = extractedText;
  }

  const icon = document.createElement("i");
  icon.className = "fa-sharp fa-solid fa-plus";

  accordionHeader.appendChild(headerText);

  // Append the icon only if there is content (string or array)
  if (
    (typeof content === "string" && content.trim() !== "") ||
    (Array.isArray(content) && content.length > 0)
  ) {
    accordionHeader.appendChild(icon);
  } else {
    // Disable the accordion (not clickable) when there's no content
    accordionHeader.style.pointerEvents = "none";
  }

  const accordionContent = document.createElement("div");
  accordionContent.className = "accordion-content";
  accordionContent.style.maxHeight = "0";

  const accordionContentInner = document.createElement("div");
  accordionContentInner.className = "accordion-content-inner";
  accordionContentInner.classList.add("flex-column", "gap-16");
  // Replace words with links in content
  if (typeof content === "string" && content.trim() !== "") {
    const contentDiv = document.createElement("p");
    contentDiv.innerHTML = content;
    accordionContentInner.appendChild(contentDiv);
  } else if (Array.isArray(content) && content.length > 0) {
    const subcontentList = document.createElement("ul");
    subcontentList.classList.add("flex-column", "gap-12");
    content.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<i class="${item.iconClass}"></i> <p> ${item.text}</p>`;
      subcontentList.appendChild(listItem);
    });
    accordionContentInner.appendChild(subcontentList);
  }

  // Replace words with links in subcontent
  if (subcontent && subcontent.length > 0) {
    const subcontentList = document.createElement("ul");
    subcontentList.classList.add("flex-column", "gap-12");
    subcontent.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<i class="${item.iconClass}"></i> <p> ${item.text}</p>`;
      subcontentList.appendChild(listItem);
    });
    accordionContentInner.appendChild(subcontentList);
  }

  // Replace words with links in content2
  if (content2 && content2.length > 0) {
    const content2List = document.createElement("ul");
    content2List.classList.add("flex-column", "gap-12");
    content2.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<i class="${item.iconClass}"></i> <p> ${item.text}</p>`;
      content2List.appendChild(listItem);
    });
    accordionContentInner.appendChild(content2List);
  }

  // Replace words with links in subcontent2
  if (subcontent2 && subcontent2.length > 0) {
    const subcontent2List = document.createElement("ul");
    subcontent2List.classList.add("flex-column", "gap-12");
    subcontent2.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<i class="${item.iconClass}"></i> <p> ${item.text}</p>`;
      subcontent2List.appendChild(listItem);
    });
    accordionContentInner.appendChild(subcontent2List);
  }

  accordionContent.appendChild(accordionContentInner);
  accordionItem.appendChild(accordionHeader);
  accordionItem.appendChild(accordionContent);

  accordionHeader.addEventListener("click", function () {
    const isOpen = accordionContent.style.maxHeight !== "0px";
    closeAllAccordions();

    if (!isOpen) {
      accordionContent.style.maxHeight =
        accordionContentInner.scrollHeight + "px";
      icon.style.transform = "rotate(45deg)";
    } else {
      accordionContent.style.maxHeight = "0";
      icon.style.transform = "rotate(0deg)";
    }
  });

  return accordionItem;
}

function closeAllAccordions() {
  const allContents = document.querySelectorAll(".accordion-content");
  allContents.forEach((content) => {
    content.style.maxHeight = "0";
  });

  const allIcons = document.querySelectorAll(".accordion-header i");
  allIcons.forEach((icon) => {
    icon.style.transform = "rotate(0deg)";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll("[data-accordion-type]");

  containers.forEach((container) => {
    const accordionType = container.getAttribute("data-accordion-type");
    let accordion = null;

    switch (accordionType) {
      case "misAccordion":
        accordion = misAccordion;
        break;
      case "dashboardsAccordion":
        accordion = dashboardsAccordion;
        break;
      case "firstCareAccordion":
        accordion = firstCare;
        break;
      case "specialCareAccordion":
        accordion = specialCare;
        break;
      case "pharmacyAccordion":
        accordion = pharmacyAccordion;
        break;
      case "makeDeclarationAccordion":
        accordion = declarationAccordion;
        break;
      case "ePrescriptionInstruction":
        accordion = ePrescriptionInstruction;
        break;
      case "babyServiceAccordion":
        accordion = babyServiceAccordion;
        break;
      case "developersServiceAccordion":
        accordion = developersServiceAccordion;
        break;
      case "digitalEducationAccordionContainer":
        accordion = digitalEducationAccordionContainer;
        break;
      case "pharmacyFaqAccordion":
        accordion = pharmacyFaqAccordion;
        break;
      // Add more cases as needed

      default:
        // Handle the default case, if necessary
        break;
    }

    if (accordion) {
      createAccordionForContainer(container.id, accordion);
    }
  });
});

function createAccordionForContainer(containerId, dataArray) {
  const accordionContainer = document.getElementById(containerId);

  if (dataArray && dataArray.length > 0) {
    dataArray.forEach((item) => {
      const section = createAccordion(
        item.header,
        item.content,
        item.subcontent,
        item.content2,
        item.subcontent2
      );
      if (section) {
        accordionContainer.appendChild(section);
      }
    });
  }
}
