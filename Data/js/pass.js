document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("categoryInput");
    let enteredDigits = '';

    input.addEventListener("keypress", function(event) {
        if (event.key === 'Enter') {
            performSearch();
        } else {
            enteredDigits += event.key;
        }
    });

    document.getElementById("searchButton").addEventListener("click", function() {
        performSearch();
    });

    function performSearch() {
        if (enteredDigits === "91121") {
            // Redirect to another HTML page
            window.location.href = "Main.html";
        } else {
            alert("Password wrong. Please try again.");
            enteredDigits = '';
        }
    }
});
