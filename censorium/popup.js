var msgObj = "Clicked";

var censored;

const censorButton = document.getElementById("censorButton");
const censorStatus = document.getElementById("status");

// This is executed when button is clicked
censorButton.addEventListener("click", function () {
  if (censored) {
    censorButton.innerText = "Uncensor Profanity";
    censorStatus.innerHTML = `
      <span class="bold">Profanity </span> on this page has been <span class="bold">censored</span> <span
      class="green bold">✓</span>
    `;
    censored = false;
  } else {
    censorButton.innerText = "Censor Profanity";
    censorStatus.innerHTML = `
    <span class="bold">Profanity </span> on this page is <span class="bold">not censored</span> <span
    class="red bold">✕</span>
  `;
    censored = true;
  }

  // This sends a message to content.js from where it receives it
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, msgObj);
    });
  });
});
