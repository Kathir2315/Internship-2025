    const chatContainer = document.getElementById("chat-container");
    const userInput = document.getElementById("user-input");

    let qaData = [];

    fetch("https://raw.githubusercontent.com/Kathir2315/Internship-2025/refs/heads/chatbot/18-07-2025/question.json")
      .then(res => res.json())
      .then(data => {
        qaData = data;
      })
      .catch(err => {
        console.error("Failed to load questions:", err);
      });

    function sendMessage() {
      const message = userInput.value.trim();
      if (message === "") return;

      addMessage(message, "user");

      setTimeout(() => {
        const reply = getBotReply(message);
        addMessage(reply, "bot");
      }, 500);

      userInput.value = "";
    }

    function addMessage(text, sender) {
      const msgDiv = document.createElement("div");
      msgDiv.classList.add("message", sender === "user" ? "user-msg" : "bot-msg");
      msgDiv.textContent = text;
      chatContainer.appendChild(msgDiv);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function getBotReply(message) {
      const lower = message.trim().toLowerCase();

      for (const pair of qaData) {
        if (pair.question.toLowerCase() === lower) {
          return pair.answer;
        }
      }

      return "Sorry, the question is not available.";
    }