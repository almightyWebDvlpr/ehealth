// const tabContents = document.querySelectorAll('.tab-content');

// // Display the first tab's content by default
// tabContents[0].style.display = 'block';

// function changeTab(tabIndex) {
//   tabContents.forEach(content => {
//     content.style.display = 'none';
//   });
//   tabContents[tabIndex].style.display = 'block';

//   const tabs = document.querySelectorAll('.tab');
//   tabs.forEach(tab => {
//     tab.classList.remove('active');
//   });
//   tabs[tabIndex].classList.add('active');
// }

// var waveBtn = (function () {
// var btn = document.querySelectorAll('.tab'),
//   tab = document.querySelector('.tab-container'),
//   indicator = document.querySelector('.indicator'),
//   indi = 0;
// indicator.style.marginLeft = indi + 'px';

// for(var i = 0; i < btn.length; i++) {
// btn[i].onmousedown = function (e) {

//   indicator.style.marginLeft = indi + (this.dataset.num-1) * 190 + 'px';
// };
// }
// }());

function changeTab(tabIndex, tabContainerId) {
  const tabContainer = document.getElementById(tabContainerId);

  if (!tabContainer) {
    console.error(`Container with ID "${tabContainerId}" not found.`);
    return;
  }

  const tabs = tabContainer.querySelectorAll(".tab");
  const indicator = tabContainer.querySelector(".indicator");

  if (!tabs || !tabs.length || !indicator) {
    console.error(`Missing elements within container "${tabContainerId}".`);
    return;
  }

  // tabs.forEach((tab, index) => {
  //   if (index === tabIndex) {
  //     tab.classList.add('active');
  //     tab.style.width = '150px'; // Adjust width as needed
  //   }
  // });
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    tab.style.margin = "0";

    if (tabContainerId === "containerLegislation") {
      tab.style.width = "fit-content";
      tab.style.padding = "20px";
    } else {
      tab.style.padding = "20px 0";
    }
  });
  tabs[tabIndex].classList.add("active");

  // Calculate the indicator width based on the selected tab's width
  const selectedTab = tabs[tabIndex];
  const tabWidth = selectedTab ? selectedTab.offsetWidth : 0;
  indicator.style.width = `${tabWidth}px`;

  // Calculate the indicator margin-left based on the selected tab's position
  let marginLeft = 0;
  for (let i = 0; i < tabIndex; i++) {
    const prevTab = tabs[i];
    marginLeft += prevTab ? prevTab.offsetWidth : 0;
  }
  indicator.style.marginLeft = `${marginLeft}px`;

  if (tabContainerId === "containerLegislation") {
    indicator.style.marginTop = "50px";
  }

  // You can update the tab content outside the container
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabContents && tabContents.length > 0) {
    tabContents.forEach((content, index) => {
      if (index === tabIndex) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  }
}

// Usage for containerLegislation:
const tabContainerIdLegislation = "containerLegislation";

if (document.getElementById(tabContainerIdLegislation)) {
  document.querySelectorAll(".tab").forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (tabContainerIdLegislation === "containerLegislation") {
        changeTab(index, tabContainerIdLegislation);
      }
    });
  });

  // Initialize with the first tab displayed for the 'containerLegislation'
  changeTab(0, tabContainerIdLegislation);
}

// Usage for containerIndexHtml:
const tabContainerId1 = "containerIndexHtml";

if (document.getElementById(tabContainerId1)) {
  document.querySelectorAll(".tab").forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (tabContainerId1 === "containerIndexHtml") {
        changeTab(index, tabContainerId1);
      }
    });
  });

  // Initialize with the first tab displayed for 'containerIndexHtml'
  changeTab(0, tabContainerId1);
}
