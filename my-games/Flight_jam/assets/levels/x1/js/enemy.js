// enemy.js
// Flag to track if enemies should stop spawning
let stopSpawning = false;

// Function to create a new enemy
function createEnemy() {
    if (stopSpawning) return; // Check if spawning should be stopped
    
    // Create a new enemy element
    const enemy = document.createElement('div');
    enemy.classList.add('enemy');
    document.getElementById('enemies').appendChild(enemy);

    // Create a health bar for the enemy
    const healthBar = document.createElement('div');
    healthBar.classList.add('health-bar');
    enemy.appendChild(healthBar);

    // Set initial position of the enemy (adjust as needed)
    enemy.style.left = 'calc(100vw - 100px)'; // Starts from the right side of the screen
    enemy.style.top = Math.random() * (window.innerHeight - 50) + 'px'; // Random vertical position within the window height

    // Optionally, you can add animations or other styles for enemy movement or appearance

    // Animate the enemy to move across the screen
    const enemySpeed = 2; // Adjust the speed as needed
    const enemyInterval = setInterval(() => {
        const enemyRect = enemy.getBoundingClientRect();
        enemy.style.left = enemyRect.left - enemySpeed + 'px';

        // Check if the enemy is out of bounds
        if (enemyRect.right < 0) {
            clearInterval(enemyInterval); // Stop the enemy animation
            document.getElementById('enemies').removeChild(enemy); // Remove the enemy element from the DOM
        }
        
        // Check if the enemy collides with the player
        if (!isFrozen && !stopSpawning) {
            const playerRect = player.getBoundingClientRect();
            if (
                playerRect.right >= enemyRect.left &&
                playerRect.left <= enemyRect.right &&
                playerRect.bottom >= enemyRect.top &&
                playerRect.top <= enemyRect.bottom
            ) {
                // If collision detected, stop spawning enemies
                stopSpawning = true;
                clearInterval(enemyInterval); // Stop the enemy animation
                
                // Optionally, you can add other actions here
            }
        }
    }, 10);
}

// Function to generate enemies at regular intervals
function generateEnemies() {
    setInterval(() => {
        createEnemy();
    }, 2000); // Adjust the interval as needed (e.g., every 2 seconds)
}

// Start generating enemies
generateEnemies();
