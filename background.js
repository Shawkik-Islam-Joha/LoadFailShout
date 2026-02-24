chrome.webNavigation.onErrorOccurred.addListener((details) => {

    // Prevent infinite loop
    if (details.url.includes("fail.html")) {
        return;
    }

    chrome.tabs.update(details.tabId, {
        url: chrome.runtime.getURL("fail.html")
    });

});