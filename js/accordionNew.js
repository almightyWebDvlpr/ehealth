document.addEventListener("DOMContentLoaded", function () {

  const accordionHeaders = document.querySelectorAll(".accordion-header");

  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach((accordionHeader) => {
      accordionHeader.addEventListener("click", function () {
        handleAccordionClick(this);
      });
    });
  }

  function handleAccordionClick(clickedHeader) {
    const accordionContent = findAccordionContent(clickedHeader);

    if (accordionContent) {
      const accordionContentInner = accordionContent.querySelector(
        ".accordion-content-inner"
      );
      const icon = clickedHeader.querySelector(".fa-sharp");

      const isOpen = accordionContent.classList.contains("open");

      closeAllAccordions();

      if (!isOpen) {
        openAccordion(accordionContent, accordionContentInner, icon);
      }
    }
  }

  function findAccordionContent(header) {
    return header.nextElementSibling;
  }

  function openAccordion(content, innerContent, icon) {
    content.classList.add("open");
    content.style.maxHeight = innerContent.scrollHeight + "px";
    icon.style.transform = "rotate(45deg)";
  }

  function closeAccordion(content, icon) {
    content.classList.remove("open");
    content.style.maxHeight = "0";
    icon.style.transform = "rotate(0deg)";
  }

  function closeAllAccordions() {
    accordionHeaders.forEach((accordionHeader) => {
      const accordionContent = findAccordionContent(accordionHeader);

      if (accordionContent) {
        const icon = accordionHeader.querySelector(".fa-sharp");

        closeAccordion(accordionContent, icon);
      }
    });
  }
  
  

  const headerTitle = document.querySelector("h5 a");
  if (headerTitle) {
    headerTitle.addEventListener("click", function (event) {
      event.stopPropagation();
      // Your additional code here
    });
  }


});
