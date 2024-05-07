// JavaScript code for handling fullscreen functionality

// Function to request fullscreen for the game frame
function requestFullscreen() {
    const gameFrame = document.getElementById('game-frame');
    if (gameFrame.requestFullscreen) {
        gameFrame.requestFullscreen();
    } else if (gameFrame.mozRequestFullScreen) { /* Firefox */
        gameFrame.mozRequestFullScreen();
    } else if (gameFrame.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        gameFrame.webkitRequestFullscreen();
    } else if (gameFrame.msRequestFullscreen) { /* IE/Edge */
        gameFrame.msRequestFullscreen();
    }
}

// Function to toggle fullscreen when the original fullscreen button is clicked
document.getElementById('fullscreen-btn').addEventListener('click', function() {
    requestFullscreen();
});

// Function to toggle fullscreen when the alternative fullscreen button is clicked
document.getElementById('alt-fullscreen-btn').addEventListener('click', function() {
    requestFullscreen();
});
