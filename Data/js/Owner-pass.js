// Data/js/Owner-pass.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    submitForm();
});

document.getElementById('password').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        submitForm();
    }
});

document.getElementById('loginButton').addEventListener('click', function(event) {
    submitForm();
});

function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorElement = document.getElementById('error');
    
    // Check if the username is correct
    if (username.toLowerCase() === 'durronjae') {
        // Check if the password is correct
        if (password === 'ownerpass') {
            console.log('Login successful');
            // Redirect to another page upon successful login
            window.location.href = 'Owner.html'; // Replace 'success.html' with the URL of your desired page
        } else {
            errorElement.textContent = 'Incorrect password'; // Display error message
        }
    } else {
        errorElement.textContent = 'Incorrect username'; // Display error message
    }
}
