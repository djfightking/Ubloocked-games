const output = document.getElementById('output');
const userInputNumber = document.getElementById('userInputNumber');
const guessButton = document.getElementById('guessButton');
let targetNumber;

function startGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    output.innerHTML = '<p>I\'m thinking of a number between 1 and 100...</p>';
}

function displayMessage(message) {
    output.innerHTML += `<p>${message}</p>`;
}

function processGuess(guess) {
    if (guess < targetNumber) {
        displayMessage(`${guess} is too low. Try a higher number.`);
    } else if (guess > targetNumber) {
        displayMessage(`${guess} is too high. Try a lower number.`);
    } else {
        displayMessage(`Congratulations! ${guess} is correct. You win!`);
        userInputNumber.disabled = true;
        guessButton.disabled = true;
    }
}

function handleGuess() {
    const guess = parseInt(userInputNumber.value);
    if (!isNaN(guess)) {
        processGuess(guess);
        userInputNumber.value = '';
    } else {
        displayMessage('Please enter a valid number.');
    }
}

guessButton.addEventListener('click', handleGuess);

startGame(); // Start the game when the page loads
