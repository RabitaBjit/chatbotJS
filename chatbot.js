// chatbot.js
(function () {
  // Create a chatbot container
  const chatbotContainer = document.createElement("div");
  chatbotContainer.id = "chatbot-container";
  chatbotContainer.style.position = "fixed";
  chatbotContainer.style.bottom = "20px";
  chatbotContainer.style.right = "20px";
  chatbotContainer.style.width = "300px";
  chatbotContainer.style.height = "400px";
  chatbotContainer.style.border = "1px solid #ccc";
  chatbotContainer.style.backgroundColor = "#fff";
  chatbotContainer.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
  chatbotContainer.style.zIndex = "1000";
  document.body.appendChild(chatbotContainer);

  // Add a header
  const header = document.createElement("div");
  header.style.backgroundColor = "#007bff";
  header.style.color = "#fff";
  header.style.padding = "10px";
  header.style.textAlign = "center";
  header.innerText = "Chatbot";
  chatbotContainer.appendChild(header);

  // Add a message area
  const messageArea = document.createElement("div");
  messageArea.style.flex = "1";
  messageArea.style.padding = "10px";
  messageArea.style.overflowY = "auto";
  chatbotContainer.appendChild(messageArea);

  // Add an input area
  const inputArea = document.createElement("div");
  inputArea.style.display = "flex";
  inputArea.style.padding = "10px";
  chatbotContainer.appendChild(inputArea);

  const input = document.createElement("input");
  input.type = "text";
  input.style.flex = "1";
  input.style.padding = "10px";
  input.style.border = "1px solid #ccc";
  inputArea.appendChild(input);

  const sendButton = document.createElement("button");
  sendButton.innerText = "Send";
  sendButton.style.padding = "10px";
  sendButton.style.border = "none";
  sendButton.style.backgroundColor = "#007bff";
  sendButton.style.color = "#fff";
  inputArea.appendChild(sendButton);

  // Handle sending messages
  sendButton.addEventListener("click", () => {
    const message = input.value;
    if (message) {
      const userMessage = document.createElement("div");
      userMessage.style.margin = "10px 0";
      userMessage.style.padding = "10px";
      userMessage.style.backgroundColor = "#f1f1f1";
      userMessage.innerText = message;
      messageArea.appendChild(userMessage);
      input.value = "";

      // Simulate a bot response
      setTimeout(() => {
        const botMessage = document.createElement("div");
        botMessage.style.margin = "10px 0";
        botMessage.style.padding = "10px";
        botMessage.style.backgroundColor = "#e1f5fe";
        botMessage.innerText = "This is a bot response.";
        messageArea.appendChild(botMessage);
      }, 1000);
    }
  });
})();
