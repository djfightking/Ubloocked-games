document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("message-form");
    const userInput = document.getElementById("user-input");
    const chatContainer = document.getElementById("chat-container");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const message = userInput.value.trim();
        if (message !== "") {
            sendMessage(message);
            userInput.value = "";
        }
    });

    function sendMessage(message) {
        const messageElement = createMessageElement(message, "user-message");
        chatContainer.appendChild(messageElement);
        saveMessage(message, "user");
        scrollToBottom();
    }

    function createMessageElement(message, className) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add(className);
        messageDiv.textContent = message;
        messageContainer.appendChild(messageDiv);
        return messageContainer;
    }

    function scrollToBottom() {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function saveMessage(message, sender) {
        // Here you can implement saving the message to a database or any storage mechanism
        // For now, let's just log it to the console
        console.log("Message from " + sender + ": " + message);
    }
});
