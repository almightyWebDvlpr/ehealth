class IconBoxList {
    constructor(containerSelector, items) {
      this.container = document.querySelector(containerSelector);
      this.items = items || [];
  
      this.createHTML();
    }
  
    createHTML() {
      const ul = document.createElement("ul");
      ul.classList.add("grid-col-1-1-1", "gap-32");
  
      for (const itemData of this.items) {
        const li = document.createElement("li");
        li.classList.add("icon-box", "amount-box");
  
        const a = document.createElement("a");
        a.classList.add("flex-column", "gap-24");
        a.href = itemData.link || "#";
  
        const imageBox = document.createElement("div");
        imageBox.classList.add("image__box");
  
        const img = document.createElement("img");
        img.src = "../../assets/images/new_icons/file text.png"; // Static image URL
        img.alt = "file text";
  
        imageBox.appendChild(img);
        a.appendChild(imageBox);
  
        const flexContainer = document.createElement("div");
        flexContainer.classList.add("flex-center-s-b", "document-files");
      
  
        const h4 = document.createElement("h4");
        h4.textContent = itemData.year || "";
  
        const arrowIcon = document.createElement("i");
        arrowIcon.classList.add("bx", "bx-right-arrow-alt");
  
        flexContainer.appendChild(h4);
        flexContainer.appendChild(arrowIcon);
  
        a.appendChild(flexContainer);
  
        li.appendChild(a);
        ul.appendChild(li);
      }
  
      this.container.innerHTML = "";
      this.container.appendChild(ul);
    }
  }
  
  // Example data for your items
  const iconBoxData = [
    {
      year: "2018",
      link: "sample-order-1.pdf", // Link to the document on the backend
    },
    {
      year: "2019",
      link: "sample-order-2.pdf", // Link to another document on the backend
    },
    {
      year: "2010",
      link: "sample-order-3.pdf", // Link to another document on the backend
    },
    {
        year: "2021",
        link: "sample-order-1.pdf", // Link to the document on the backend
      },
      {
        year: "2022",
        link: "sample-order-2.pdf", // Link to another document on the backend
      },
      {
        year: "2023",
        link: "sample-order-3.pdf", // Link to another document on the backend
      },
  ];
  
  // Create an instance of the IconBoxList class
  const iconBoxList = new IconBoxList(".icon-box-list-container", iconBoxData);
  