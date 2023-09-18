class MedicalPractice {
  constructor(containerSelector, data) {
    this.container = document.querySelector(containerSelector);
    this.data = data;
  }

  createHTML() {
    const ul = document.createElement("ul");
    ul.classList.add("grid-col-1-1-1", "gap-32");

    for (let i = 0; i < this.data.length; i++) {
      const li = document.createElement("li");
      li.classList.add("icon-box", "amount-box");

      const span = document.createElement("span");
      span.classList.add("in-text-link");
      span.textContent = this.data[i];

      const p = document.createElement("p");
      switch (i) {
        case 0:
          p.textContent = "Осіб на одного сімейного лікаря";
          break;
        case 1:
          p.textContent = "Осіб на одного терапевта";
          break;
        case 2:
          p.textContent = "Осіб на одного педіатра";
          break;
        default:
          p.textContent = "Unknown Category";
      }

      li.appendChild(span);
      li.appendChild(p);
      ul.appendChild(li);
    }

    this.container.appendChild(ul);
  }
}

// Example data received from the backend (you can replace this with actual data)
const backendData = [18000, 18545, 900];

document.addEventListener("DOMContentLoaded", function () {
  const medicalPractice = new MedicalPractice(
    "#amountMedicalPractice",
    backendData
  );
  medicalPractice.createHTML();
});
