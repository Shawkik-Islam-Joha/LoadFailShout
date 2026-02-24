chrome.webNavigation.onErrorOccurred.addListener((details) => {
    console.log("Navigation error detected!");

    // Create audio object
    const audio = new Audio(chrome.runtime.getURL("sound.mp3"));

    // Play the sound
    audio.play();
});