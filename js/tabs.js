const tabContents = document.querySelectorAll('.tab-content');
    
// Display the first tab's content by default
tabContents[0].style.display = 'block';

function changeTab(tabIndex) {
  tabContents.forEach(content => {
    content.style.display = 'none';
  });
  tabContents[tabIndex].style.display = 'block';

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  tabs[tabIndex].classList.add('active');
}


var waveBtn = (function () {
var btn = document.querySelectorAll('.tab'),
  tab = document.querySelector('.tab-container'),
  indicator = document.querySelector('.indicator'),
  indi = 0;
indicator.style.marginLeft = indi + 'px';

for(var i = 0; i < btn.length; i++) {
btn[i].onmousedown = function (e) {
  

  indicator.style.marginLeft = indi + (this.dataset.num-1) * 190 + 'px';
};
}
}());