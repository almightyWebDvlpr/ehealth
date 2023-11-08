import { showLoader, hideLoader } from "./loader.js";
import { setGlobalData } from './dataStorage.js';



// export function fetchDataAndCreateTable(sheetId, gid, callback) {
//   showLoader(gid); // Show the loader while fetching data
//   const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
//   const query = encodeURIComponent("Select *"); // Modify your query here
//   const url = `${base}gid=${gid}&tq=${query}`;

//   fetch(url)
//     .then((res) => res.text())
//     .then((rep) => {
//       const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

//       const colz = [];

//       // Extract column labels
//       jsonData.table.cols.forEach((heading) => {
//         if (heading.label) {
//           let column = heading.label;
//           colz.push(column);
//         }
//       });

//       const data = [];

//       // Extract row data:
//       jsonData.table.rows.forEach((rowData) => {
//         const row = {};
//         colz.forEach((ele, ind) => {
//           row[ele] = rowData.c[ind] != null ? rowData.c[ind].v : "";
//         });
//         data.push(row);
//       });

//       // Process and display rows (customize this function as needed)
//       if (typeof callback === "function") {
//         callback(data, gid);
//       }

//       hideLoader(gid);
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);

//       hideLoader(gid);
//     });
// }


// Fetch data from Google Sheets and execute the callback
export function fetchDataAndCreateTable(sheetId, gid, callback) {
  showLoader(gid); // Show the loader while fetching data
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const query = encodeURIComponent("Select *"); // Modify your query here
  const url = `${base}gid=${gid}&tq=${query}`;

  fetch(url)
    .then((res) => res.text())
    .then((rep) => {
      const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
      const data = parseData(jsonData);
      setGlobalData(data);

      // Execute the provided callback function
      if (typeof callback === "function") {
        callback(data, gid);
      }

      hideLoader(gid);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);

      hideLoader(gid);
    });
}

// Parse the JSON data and extract relevant information
function parseData(jsonData) {
  const colz = jsonData.table.cols
    .filter((heading) => heading.label)
    .map((heading) => heading.label);

  const data = jsonData.table.rows.map((rowData) => {
    const row = {};
    colz.forEach((ele, ind) => {
      row[ele] = rowData.c[ind] != null ? rowData.c[ind].v : "";
    });
    return row;
  });

  return data;
}


