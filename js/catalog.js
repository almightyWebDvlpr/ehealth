import { fetchDataAndCreateTable } from "../js/fetchCatalogData.js";
import { processRows } from "./filterCatalogData.js";

// Example of how to use the fetchDataAndCreateTable function for both sheets
document.addEventListener("DOMContentLoaded", () => {
  fetchDataAndCreateTable(
    "1hP1taKmO_sNOol52rPnB6QoYmFNVAlOfidu1bZPOMK4",
    "1138747254",
    processRows
  );
  fetchDataAndCreateTable(
    "1hP1taKmO_sNOol52rPnB6QoYmFNVAlOfidu1bZPOMK4",
    "0",
    processRows2
  );
});

function processRows2(data, gid) {
  const output = document.getElementById(`output-${gid}`);
  if (!output) {
    console.error("Output element not found for gid:", gid);
    return;
  }

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create table headers based on the column names
  const headerRow = document.createElement("tr"); // Define headerRow here
  Object.keys(data[0]).forEach((columnName) => {
    const th = document.createElement("th");
    th.textContent = columnName;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table rows with the data
  data.forEach((rowData) => {
    const row = document.createElement("tr");
    Object.values(rowData).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  output.appendChild(table);
}
