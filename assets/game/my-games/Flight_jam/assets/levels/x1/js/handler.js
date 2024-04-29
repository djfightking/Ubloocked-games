// handler.js

// Function to handle keydown events
function handleKeyDown(event) {
    // Prevent default behavior of arrow keys
    if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
    }
}

// Add event listener for keydown events
document.addEventListener("keydown", handleKeyDown);
