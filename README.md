# 🔊 LoadFailShout

A simple Chrome/Edge extension that plays a dramatic "FAAAAHH" sound whenever a webpage fails to load due to connection errors.

## 🚀 Features
- Detects navigation errors
- Replaces failed page
- Plays custom sound effect
- Works on Chrome and Microsoft Edge

## 📦 Installation (Developer Mode)

1. Go to `chrome://extensions/` or `edge://extensions/`
2. Enable Developer Mode
3. Click "Load unpacked"
4. Select the extension folder

## 🧠 How It Works
Uses `chrome.webNavigation.onErrorOccurred` to detect connection failures and redirects to a custom fail page.

## 📜 Version
v1.0 – Initial Release