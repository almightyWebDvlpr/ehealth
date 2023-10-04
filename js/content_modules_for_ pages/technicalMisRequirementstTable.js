class DynamicTable {
    constructor(containerId, columnHeaders, data) {
      this.container = document.getElementById(containerId);
      this.columnHeaders = columnHeaders || [];
      this.data = data || [];
    }
  
    generateTable() {
      const table = document.createElement("table");
  
      // Create table header
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      this.columnHeaders.forEach(columnName => {
        const th = document.createElement("th");
        th.textContent = columnName;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      // Create table body
      const tbody = document.createElement("tbody");
      this.data.forEach(rowData => {
        const row = document.createElement("tr");
        this.columnHeaders.forEach(columnName => {
          const cell = document.createElement("td");
          cell.innerHTML = rowData[columnName] || "";
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
    "Вимоги/програма"
  ];
  
  const data = [
    {
      "Статус": "Approved",
      "Наказ №": "12345",
      "Дата затвердження НСЗУ": "2023-09-13",
      "Що затверджено": "Sample Item 1",
      "Наказ": "<a href='sample-order-1.pdf' target='_blank'>Order 1</a>",
      "Вимоги/програма": "Sample Requirements 1"
    },
    {
      "Статус": "Pending",
      "Наказ №": "54321",
      "Дата затвердження НСЗУ": "2023-09-14",
      "Що затверджено": "Sample Item 2",
      "Наказ": "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
      "Вимоги/програма": "Sample Requirements 2"
    },
    {
      "Статус": "Pending",
      "Наказ №": "54321",
      "Дата затвердження НСЗУ": "2023-09-14",
      "Що затверджено": "Sample Item 2",
      "Наказ": "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
      "Вимоги/програма": "Sample Requirements 2"
    },
    {
      "Статус": "Pending",
      "Наказ №": "54321",
      "Дата затвердження НСЗУ": "2023-09-14",
      "Що затверджено": "Sample Item 2",
      "Наказ": "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
      "Вимоги/програма": "Sample Requirements 2"
    },{
      "Статус": "Pending",
      "Наказ №": "54321",
      "Дата затвердження НСЗУ": "2023-09-14",
      "Що затверджено": "Sample Item 2",
      "Наказ": "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
      "Вимоги/програма": "Sample Requirements 2"
    },
    {
      "Статус": "Pending",
      "Наказ №": "54321",
      "Дата затвердження НСЗУ": "2023-09-14",
      "Що затверджено": "Sample Item 2",
      "Наказ": "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
      "Вимоги/програма": "Sample Requirements 2"
    },
    {
      "Статус": "Pending",
      "Наказ №": "54321",
      "Дата затвердження НСЗУ": "2023-09-14",
      "Що затверджено": "Sample Item 2",
      "Наказ": "<a href='sample-order-2.pdf' target='_blank'>Order 2</a>",
      "Вимоги/програма": "Sample Requirements 2"
    }
    // Add more data rows here as needed
  ];
  
  const dynamicTable = new DynamicTable("table-container", columnHeaders, data);
  dynamicTable.generateTable();
  