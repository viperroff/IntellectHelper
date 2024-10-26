document.addEventListener("DOMContentLoaded", function() {
    const inputElement = document.querySelector('.input-container .input-input textarea');
    const sendButton = document.querySelector('.input-container .send-button');
    const chatContainer = document.querySelector('.chat-container');

    function sendMessage(isUserMessage, text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add(isUserMessage ? 'user-message' : 'bot-message', 'message');

        const messageParagraph = document.createElement('p');
        messageParagraph.textContent = text;
        messageElement.appendChild(messageParagraph);

        const tailClass = isUserMessage ? 'tail' : 'tail-left';
        const tailElement = document.createElement('div');
        tailElement.classList.add(tailClass);
        messageElement.appendChild(tailElement);

        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function sendUserMessage() {
        const message = inputElement.value.trim();
        if (message === "") return;

        sendMessage(true, message);
        inputElement.focus();
        inputElement.value = '';
    }

    sendButton.addEventListener('click', sendUserMessage);

    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendUserMessage();
        }
    });

    const botButton = document.getElementById('bot_button');
    botButton.addEventListener('click', function() {
        sendMessage(false, 'hello');
    });
});