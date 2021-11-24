// To find and replace:
// document.body.innerHTML = document.body.innerHTML.replace(/Original/g, "New")

var msgObj = "Clicked";

// This is executed when the hack button is clicked
document.getElementById("censorButton").addEventListener("click", function () {
  // This sends a message to content.js from where it receives it
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, msgObj);
    });
  });
});

const test = "tst";
