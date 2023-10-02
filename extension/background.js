// background.js
function toggleExtensionState(callback) {
  // Get the current state of the extension
  chrome.management.getSelf(function (info) {
    // Toggle the state of the extension
    chrome.management.setEnabled(info.id, !info.enabled, function () {
      // Call the callback function with the new state of the extension
      callback({ enabled: !info.enabled });
    });
  });
}

// Add a listener for the toggleExtensionState message
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'toggleExtensionState') {
    toggleExtensionState(sendResponse);
    return true;
  }
});