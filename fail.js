document.addEventListener("DOMContentLoaded", () => {

    const audio = new Audio(chrome.runtime.getURL("sound.mp3"));

    audio.volume = 1.0;

    // Try playing automatically
    audio.play().catch(() => {
        console.log("Autoplay blocked. Waiting for click...");

        // If blocked, play on first click
        document.body.addEventListener("click", () => {
            audio.play();
        }, { once: true });
    });

});