import { showLoader, hideLoader } from './loader.js';


// Define a function to fetch data from a specific sheet and create a table
export function fetchDataAndCreateTable(sheetId, gid, callback) {
    showLoader(gid); // Show the loader while fetching data

    const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
    const query = encodeURIComponent("Select *"); // Modify your query here
    const url = `${base}gid=${gid}&tq=${query}`;

    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        // Remove additional text and extract only JSON:
        const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

        const colz = [];

        // Extract column labels
        jsonData.table.cols.forEach((heading) => {
          if (heading.label) {
            let column = heading.label;
            colz.push(column);
          }
        });

        const data = [];

        // Extract row data:
        jsonData.table.rows.forEach((rowData) => {
          const row = {};
          colz.forEach((ele, ind) => {
            row[ele] = rowData.c[ind] != null ? rowData.c[ind].v : "";
          });
          data.push(row);
        });

        // Process and display rows (customize this function as needed)
        if (typeof callback === "function") {
          callback(data, gid);
        }

        hideLoader(gid); // Hide the loader after data processing
      });
  }
