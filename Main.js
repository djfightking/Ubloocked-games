// Get reference to the message box and close button
var messageBox = document.getElementById("message-box");
var closeButton = document.getElementById("close-btn");

// Show the message box
messageBox.classList.remove("hidden");

// Add click event listener to the close button
closeButton.addEventListener("click", function() {
    // Hide the message box when the close button is clicked
    messageBox.classList.add("hidden");
});
