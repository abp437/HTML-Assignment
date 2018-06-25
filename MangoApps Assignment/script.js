let toggleHeader = document.getElementsByClassName('right-section-collapsible-header');

function toggleRightSection(event) {
  event.target.classList.toggle('open');
  event.target.nextElementSibling.classList.toggle('hide');
};

for (let i = 0; i < toggleHeader.length; i++) {
  toggleHeader[i].addEventListener('click', toggleRightSection);
}

function switchTabs(event, tabId) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('content-switch-tabs-list-item');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabId).style.display = 'block';
  event.currentTarget.className += ' active';
}

function searcIconDisplay(event) {
  if (event.target.value != '') {
    event.target.nextElementSibling.style.display = 'none';
  } else {
    event.target.nextElementSibling.style.display = 'block';
  }
}

function dropdownToggler() {
  document.getElementById('opportunity-tools-dropdown').classList.toggle('show');
}

window.onclick = function (event) {
  if (!event.target.matches('.opportunity-tools-button')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function switchInputs(event) {
  let tablinks, i;
  tablinks = document.getElementsByClassName('sharing-options-list-item');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  event.currentTarget.className += ' active';
}
