// JavaScript to toggle fullscreen mode
const gameFrame = document.getElementById('game-frame');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const altFullscreenBtn = document.createElement('button'); // Create a new button element
altFullscreenBtn.textContent = 'Alt Fullscreen'; // Set the text content of the button
altFullscreenBtn.classList.add('fullscreen-btn'); // Add a class to the button for styling
altFullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        gameFrame.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Append the altFullscreenBtn to the container
document.getElementById('container').appendChild(altFullscreenBtn);
