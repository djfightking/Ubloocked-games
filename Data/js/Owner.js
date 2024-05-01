// Owner.js

// Function to execute the code in the code editor
function executeCode() {
    // Get the code editor content
    var code = document.getElementById('code-editor').textContent;
    
    // Create a new script element
    var script = document.createElement('script');
    
    // Set the code editor content as the script content
    script.textContent = code;
    
    // Append the script element to the body to execute the code
    document.body.appendChild(script);
}

// Event listener for the Execute button
document.getElementById('execute-button').addEventListener('click', function() {
    executeCode();
});

// Event listener for file creation form submission
document.getElementById('file-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get the values from the form
    var fileName = document.getElementById('file-name').value;
    var fileType = document.getElementById('file-type').value;
    
    // Create a new file link
    var link = document.createElement('a');
    link.href = 'Data/' + fileType + '/' + fileName + '.' + fileType;
    link.download = fileName + '.' + fileType;
    link.innerHTML = fileName + '.' + fileType;
    
    // Append the link to the side section
    document.getElementById('side-section').appendChild(link);
    
    // Reset the form
    document.getElementById('file-form').reset();
});
