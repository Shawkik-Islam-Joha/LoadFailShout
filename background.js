let lastPlayed = 0;

chrome.webNavigation.onErrorOccurred.addListener((details) => {

    // Only trigger for main frame (not iframes)
    if (details.frameId !== 0) return;

    // Prevent spam (2 second cooldown)
    const now = Date.now();
    if (now - lastPlayed < 2000) return;
    lastPlayed = now;

    chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        func: playSound
    });
});

function playSound() {
    const audio = new Audio(chrome.runtime.getURL("sound.mp3"));
    audio.play();
}