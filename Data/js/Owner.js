document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("button");
    if(button) {
        button.addEventListener("click", function() {
            window.location.href = "Data/code-space.html"; // Updated URL to navigate to Data/code-space.html
        });
    }
});
