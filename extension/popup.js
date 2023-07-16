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

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl();
});