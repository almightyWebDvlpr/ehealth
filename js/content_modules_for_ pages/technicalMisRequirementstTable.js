class DynamicTable {
  constructor(containerId, columnHeaders, data) {
    this.container = document.getElementById(containerId);
    this.columnHeaders = columnHeaders || [];
    this.data = data || [];
  }

  generateTable() {
    const table = document.createElement("table");
    table.setAttribute("class", "rwd-table");

    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    this.columnHeaders.forEach((columnName) => {
      const th = document.createElement("th");
      th.textContent = columnName;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create table body and populate it with data
    const tbody = document.createElement("tbody");
    this.data.forEach((rowData) => {
      const row = document.createElement("tr");
      this.columnHeaders.forEach((columnName) => {
        const cell = document.createElement("td");
        const cellSpan = document.createElement('span')
        cell.setAttribute("data-th", columnName);

        // Check if the data is a link (e.g., contains <a> tags)
        if (/<a\s+href=/.test(rowData[columnName])) {
          const link = document.createElement("a");
          link.href = rowData[columnName];
          link.target = "_blank";
          link.innerHTML = rowData[columnName];
          cellSpan.appendChild(link)
          cell.appendChild(cellSpan);
        } else {
          cellSpan.textContent =  rowData[columnName];
          cell.appendChild(cellSpan)
        }

        row.appendChild(cell);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Append the table to the container
    this.container.innerHTML = "";
    this.container.appendChild(table);
  }
}

// Example usage:
const columnHeaders = [
  "Статус",
  "Наказ №",
  "Дата затвердження НСЗУ",
  "Що затверджено",
  "Наказ",
  "Вимоги/програма",
];
const data = [
  {
    Статус: "Approved",
    "Наказ №": "12345",
    "Дата затвердження НСЗУ": "2023-09-13",
    "Що затверджено": "Sample Item 1",
    Наказ: "<a href='sample-order-1.pdf' target='_blank'>Order 1</a>",
    "Вимоги/програма": "Sample Requirements 1",
  },
  {
    Статус: "Pending",
    "Наказ №": "54321",
    "Дата затвердження НСЗУ": "2023-09-14",
    "Що затверджено": "Sample Item 2",
    Наказ: "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
    "Вимоги/програма": "Sample Requirements 2",
  },
  {
    Статус: "Pending",
    "Наказ №": "54321",
    "Дата затвердження НСЗУ": "2023-09-14",
    "Що затверджено": "Sample Item 2",
    Наказ: "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
    "Вимоги/програма": "Sample Requirements 2",
  },
  {
    Статус: "Pending",
    "Наказ №": "54321",
    "Дата затвердження НСЗУ": "2023-09-14",
    "Що затверджено": "Sample Item 2",
    Наказ: "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
    "Вимоги/програма": "Sample Requirements 2",
  },
  {
    Статус: "Pending",
    "Наказ №": "54321",
    "Дата затвердження НСЗУ": "2023-09-14",
    "Що затверджено": "Sample Item 2",
    Наказ: "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
    "Вимоги/програма": "Sample Requirements 2",
  },
  {
    Статус: "Pending",
    "Наказ №": "54321",
    "Дата затвердження НСЗУ": "2023-09-14",
    "Що затверджено": "Sample Item 2",
    Наказ: "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
    "Вимоги/програма": "Sample Requirements 2",
  },
  {
    Статус: "Pending",
    "Наказ №": "54321",
    "Дата затвердження НСЗУ": "2023-09-14",
    "Що затверджено": "Sample Item 2",
    Наказ: "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
    "Вимоги/програма": "Sample Requirements 2",
  },
  // Add more data rows here as needed
];

const dynamicTable = new DynamicTable("table-container", columnHeaders, data);
dynamicTable.generateTable();
