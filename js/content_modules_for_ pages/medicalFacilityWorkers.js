class ArticleWrapper {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  createListItem(text, backgroundClass) {
    const listItem = document.createElement("li");
    listItem.appendChild(this.createParagraph(text));

    // Add the specified background class to the <li> element
    listItem.classList.add(backgroundClass);

    return listItem;
  }

  generateArticle() {
    const article = document.createElement("article");
    article.className = "mis__article";

    const container = document.createElement("div");
    container.className = "container";

    const articleHeading = document.createElement("div");
    articleHeading.className = "mis__article-heading";
    articleHeading.appendChild(document.createElement("h2")).textContent =
      "Можливості працівників медзакладу завдяки МІС";
    articleHeading.className = "h2-mb-l";

    const adminHeading = document.createElement("h3");
    adminHeading.textContent =
      "Адміністративний персонал медичного закладу може:";

    const adminContent = document.createElement("div");
    adminContent.className = "mis__article-content";
    const adminList1 = document.createElement("ul");
    adminList1.appendChild(
      this.createListItem(
        "Автоматизувати роботу реєстратури медичного закладу, упорядкувати та спростити процедуру запису пацієнтів на прийом.",
        "box-bg-light-blue"
      )
    );
    adminList1.appendChild(
      this.createListItem(
        "Автоматизувати клінічний маршрут пацієнта та надати інструменти для запису на прийом до лікаря, відстежувати наявність та рух медикаментів в медзакладі, залишків на складі тощо.",
        "bg-gray-purple"
      )
    );
    const adminList2 = document.createElement("ul");
    adminList2.appendChild(
      this.createListItem(
        "Систематизувати інформацію про пацієнтів медичної установи, послуги, співробітників.",
        "bg-light-gray"
      )
    );
    adminList2.appendChild(
      this.createListItem("Формувати звіти, статистику аналітику.",
      "bg-light-turquoise"
      )
    );
    adminContent.appendChild(adminList1);
    adminContent.appendChild(adminList2);

    const medicalHeading = document.createElement("h3");
    medicalHeading.textContent = "Медичні працівники можуть:";

    const medicalContent = document.createElement("div");
    medicalContent.className = "mis__article-content";
    const medicalList1 = document.createElement("ul");
    medicalList1.appendChild(
      this.createListItem(
        "Фіксувати в електронному вигляді надані медичні послуги, результати діагностики і лабораторних досліджень, формувати направлення до лікарів та на дослідження. Це забезпечує збереження повної історії хвороб пацієнта, результатів його обстежень та допомагає лікарю краще проаналізувати стан пацієнта під час його звернення, формує передумови для підтримки клінічного рішення цифровими інструментами.",
        "box-bg-light-blue"
      )
    );
    medicalList1.appendChild(
      this.createListItem(
        "Вносити інформацію до Центральної бази даних, що допомагає зберігати найважливіші дані про пацієнтів та надану йому медичну допомогу, випадки захворювань, формувати відповідну медичну звітність та статистику.",
        "bg-gray-purple"
      )
    );
    const medicalList2 = document.createElement("ul");
    medicalList2.appendChild(
      this.createListItem(
        "Отримувати доступ до актуальних словників, класифікаторів Центральної бази даних, що допоможуть медичному працівнику вносити до Центральної бази даних коректні та уніфіковані дані, у відповідності до актуальних класифікаторів, підвищити кваліфікацію, бути у курсі змін та оновлень.",
        "bg-light-gray"
      )
    );
    medicalList2.appendChild(
      this.createListItem(
        "Додавати засвідчені дані, за допомогою кваліфікованого електронного підпису (КЕП). Це дозволить уникати появи у системі незасвідчених відповідною повноважною особою даних, дасть верифікованим користувачам – бачити який медпрацівник додав певні дані.",
        "bg-light-turquoise"
      )
    );
    medicalContent.appendChild(medicalList1);
    medicalContent.appendChild(medicalList2);

    container.appendChild(articleHeading);
    container.appendChild(adminHeading);
    container.appendChild(adminContent);
    container.appendChild(medicalHeading);
    container.appendChild(medicalContent);

    article.appendChild(container);
    this.container.appendChild(article);
  }
}

// Usage
const articleWrapper = new ArticleWrapper("medical-facility-workers");
articleWrapper.generateArticle();
