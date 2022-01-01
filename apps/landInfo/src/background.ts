chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(activeInfo.tabId, {
      message: 'update',
      url: tabs[0].url
    })
  })
})
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it
  // like send the new url to contentscripts.js
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      message: 'update',
      url: changeInfo.url
    })
  }
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'airQualityUpdate') {
    chrome.action.setBadgeText({ text: request.airQuality.toString() })
    // depending on the air quality, set the badge color
    let color = '#00FF00'
    if (request.airQuality <= 30) {
      color = '#00b908e0'
    } else if (request.airQuality <= 60) {
      color = '#fffb3de0'
    } else if (request.airQuality <= 90) {
      color = '#ffb300e0'
    } else if (request.airQuality <= 120) {
      color = '#ff0000e0'
    }
    chrome.action.setBadgeBackgroundColor({ color: color })
    sendResponse({ status: true })
  }
  return
})
