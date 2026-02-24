chrome.webNavigation.onErrorOccurred.addListener((details) => {

    // Only main page
    if (details.frameId !== 0) return;

    // Open our own fail page
    chrome.tabs.update(details.tabId, {
        url: chrome.runtime.getURL("fail.html")
    });

});