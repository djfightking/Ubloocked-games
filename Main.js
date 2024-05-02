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

        // Function to generate a random number between min and max
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Function to create a new circle
        function createCircle() {
            var circle = document.createElement('div');
            circle.className = 'circle';
            circle.style.top = getRandomNumber(0, window.innerHeight - 20) + 'px';
            circle.style.left = getRandomNumber(0, window.innerWidth - 20) + 'px';
            document.getElementById('circle-container').appendChild(circle);

            setTimeout(function() {
                circle.style.opacity = '0'; // Make circle disappear after a delay
                setTimeout(function() {
                    circle.remove(); // Remove circle element from DOM
                }, 1000);
            }, 5000);
        }

        // Function to create circles at random intervals
        function createRandomCircles() {
            setInterval(createCircle, 200); // Create a new circle every 0.2 seconds
        }

        // Start creating circles
        createRandomCircles();