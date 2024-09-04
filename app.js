// Function to change the default message
function changeMessage() {
    const messages = [
        'Wishing you a year full of happiness and success!',
        'May your day be filled with joy and laughter!',
        'Here’s to another year of amazing adventures!',
        'May your birthday be as wonderful as you are!'
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById('message');
    messageElement.textContent = messages[randomIndex];
}

// Function to update the message with user input
function updateMessage() {
    const userInput = document.getElementById('userMessage').value;
    const messageElement = document.getElementById('message');
    
    if (userInput.trim()) {
        messageElement.textContent = userInput;
        document.getElementById('userMessage').value = ''; // Clear input field
    } else {
        alert('Please enter a message!');
    }
}
