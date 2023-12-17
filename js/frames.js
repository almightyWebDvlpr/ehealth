 // Get a reference to the container element
//  const container = document.getElementById("externalContentContainer");

 // Create an iframe element
//  const iframe = document.createElement("iframe");

//  if (iframe) {
//    iframe.src = "https://status.ehealth.gov.ua/";
//    iframe.height = "3000px";
//    iframe.width = "100%"; // Set the width of the iframe
//    iframe.style.border = "none"; // Remove the iframe border
//    iframe.setAttribute("scrolling", "no"); // Set the scrolling attribute

//    // Append the iframe to the container
//    container.appendChild(iframe);
//  }
//  console.log(iframe.contentWindow.document.body.scrollHeight);


const iframe = document.querySelector('.supprort-iframe')

 // Wait for the iframe to load its content
 iframe.onload = function () {
   document.querySelector(".loader-container").style.display = "none";
   iframe.style.display = "block";
 };


