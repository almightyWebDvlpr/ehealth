const loader = document.getElementById("loader");

// Function to show the loader
export function showLoader(gid) {
  const output = document.getElementById(`output-${gid}`);
  if (!output) {
    return;
  }

  loader.style.display = "block";
  output.style.display = "none";
}

// Function to hide the loader and show the content
export function hideLoader(gid) {
  const output = document.getElementById(`output-${gid}`);
  if (!output) {
    return;
  }
  loader.style.display = "none";
  output.style.display = "flex";
}