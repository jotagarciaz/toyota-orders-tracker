function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.scripting.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    var tabId = tab.id;

    console.assert(typeof url == 'string', 'tab.url should be a string');


  chrome.scripting.executeScript({
    target: {tabId: tabId},
    code: `window.addData()`
  }, function (result) {
      console.log(result);
  });


  });

}
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}



// popup.js
// popup.js

// popup.js
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleExtension');

  // Check the current state of the extension
  chrome.management.getSelf(function (info) {
    if (info.enabled) {
      toggleButton.textContent = 'Disable Extension';
    } else {
      toggleButton.textContent = 'Enable Extension';
    }
  });

  // Handle the button click
  toggleButton.addEventListener('click', function () {
    // Send a message to the background script to toggle the extension state
    chrome.runtime.sendMessage({ action: 'toggleExtensionState' }, function (response) {
      // Update the text of the toggle button based on the new state of the extension
      if (response.enabled) {
        toggleButton.textContent = 'Disable Extension';
      } else {
        toggleButton.textContent = 'Enable Extension';
      }
    });
  });
});