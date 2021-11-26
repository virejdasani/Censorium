var censorMessage = "censor";
var uncensorMessage = "uncensor";

var censored = false;

const censorButton = document.getElementById("censorButton");
const censorStatus = document.getElementById("status");

// This is executed when button is clicked
censorButton.addEventListener("click", function () {
  if (censored) {
    censored = false;
    censorButton.innerText = "Censor Profanity";
    censorStatus.innerHTML = `
    This page <span class="bold">may contain profane language </span><span
    class="red bold">✕</span>
  `;
    // This sends a message to content.js
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, uncensorMessage);
      });
    });
  } else {
    censored = true;
    censorButton.innerText = "Uncensor Profanity";
    censorStatus.innerHTML = `
    <span class="bold">Profanity </span> on this page has been <span class="bold">censored</span> <span
    class="green bold">✓</span>
  `;
    // This sends a message to content.js
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, censorMessage);
      });
    });
  }
});
