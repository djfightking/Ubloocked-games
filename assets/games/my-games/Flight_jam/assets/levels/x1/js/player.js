// player.js

// Get the player element
const player = document.getElementById('player');

// Flag to track if player is frozen
let isFrozen = false;

// Function to update player position based on mouse movement
function updatePlayerPosition(event) {
    // Check if player is frozen
    if (isFrozen) return;

    // Get the vertical position of the mouse cursor
    const mouseY = event.clientY;

    // Set the player's y-position to match the mouse y-position
    player.style.top = mouseY + 'px';
}

// Function to handle shooting with cooldown
function shoot(event) {
    // Check if the player can shoot
    if (!canShoot) return;

    // Create a new projectile
    // (Implementation of shoot function goes here...)
}

// Add event listener to track mouse movement
document.addEventListener('mousemove', updatePlayerPosition);

// Add event listener to handle shooting
document.addEventListener('click', shoot);

// Function to check collision between player and enemies
function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const enemies = document.querySelectorAll('.enemy');
    
    // Loop through each enemy
    enemies.forEach(enemy => {
        const enemyRect = enemy.getBoundingClientRect();
        
        // Check for collision
        if (
            playerRect.right >= enemyRect.left &&
            playerRect.left <= enemyRect.right &&
            playerRect.bottom >= enemyRect.top &&
            playerRect.top <= enemyRect.bottom
        ) {
            // If collision detected, remove player and enemy
            player.remove();
            enemy.remove();
            
            // Create "Game Over" text element
            const gameOverText = document.createElement('div');
            gameOverText.textContent = 'Game Over';
            gameOverText.classList.add('game-over-text');
            document.body.appendChild(gameOverText);
            
            // Create retry button
            const retryButton = document.createElement('button');
            retryButton.textContent = 'Retry';
            retryButton.classList.add('retry-button');
            retryButton.addEventListener('click', function() {
                window.location.reload(); // Reload the page to retry
            });
            document.body.appendChild(retryButton);
            
            // Create go back button
            const goBackButton = document.createElement('button');
            goBackButton.textContent = 'Go Back';
            goBackButton.classList.add('go-back-button');
            goBackButton.addEventListener('click', function() {
                window.history.back(); // Go back one page
            });
            document.body.appendChild(goBackButton);
        }
    });
}






// Check collision at regular intervals
setInterval(checkCollision, 100); // Adjust interval as needed
