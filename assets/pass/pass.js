document.addEventListener("DOMContentLoaded", function() {
    // Enable checking password when Enter key is pressed
    document.getElementById("passwordInput").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            checkPassword();
        }
    });
});

function checkPassword() {
    var enteredPassword = document.getElementById("passwordInput").value;
    var correctPassword = "91121";
    var altPassword = "dj";

    if (enteredPassword === correctPassword || enteredPassword === altPassword) {
        window.location.href = "assets/Main.html"; // Redirect to Main.html if password is correct
    } else {
        alert("Incorrect password. Please try again.");
    }
}
