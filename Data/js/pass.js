document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("categoryInput");
    let enteredDigits = '';

    input.addEventListener("input", function() {
        enteredDigits += input.value.charAt(input.value.length - 1);

        if (enteredDigits.length === 5) {
            if (enteredDigits === "91121") {
                // Redirect to another HTML page
                window.location.href = "Main.html";
            } else {
                alert("Password wrong. Please try again.");
                enteredDigits = '';
            }
        } else if (enteredDigits.length > 5) {
            alert("Password must be exactly 5 characters long.");
            enteredDigits = '';
        }
    });
});
