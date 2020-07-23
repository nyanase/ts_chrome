// run on install

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
    console.log("YElllop")
  });
});

// chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
//   chrome.tabs.executeScript(null,{file:"contentscript.js"});
// });

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tabId == tab.id) {
    if (tab.url.match(/https:\/\/www.reddit.com\/r\/\w+\/comments\/[\w\/]+/)){
      console.log("matched")
      chrome.tabs.executeScript({
        file: 'contentScript.js'
      });
    } 
  }
})
