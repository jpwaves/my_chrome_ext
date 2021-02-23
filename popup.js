document.addEventListener('DOMContentLoaded', function() {
  let checkPageButton = document.getElementById('clickIt');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      alert("Hello! this is a test to see if alert works");
    });
  }, false);
}, false);