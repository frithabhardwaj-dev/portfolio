const form = document.getElementById("chatForm");
const input = document.getElementById("chatInput");
const messages = document.getElementById("chatMessages");
const statusText = document.getElementById("chatStatus");
const sendButton = document.getElementById("chatSend");

function showMessage(text, kind) {
  const p = document.createElement("p");
  p.className = kind === "user" ? "user-message" : "bot-message";
  p.textContent = text;
  messages.appendChild(p);
  messages.scrollTop = messages.scrollHeight;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const question = input.value.trim();
  if (!question) { statusText.textContent = "Please type a question."; return; }
  if (!window.CONFIG || window.CONFIG.apiKey === "PASTE_YOUR_GROQ_API_KEY_HERE") {
    statusText.textContent = "Add your Groq API key in config.js first.";
    return;
  }
  showMessage(question, "user");
  input.value = "";
  sendButton.disabled = true;
  statusText.textContent = "Thinking...";
  try {
    const response = await fetch(`${window.CONFIG.baseUrl}/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${window.CONFIG.apiKey}` },
      body: JSON.stringify({ model: window.CONFIG.model, temperature: 0.7, max_completion_tokens: 240, messages: [
        { role: "system", content: "You are the friendly portfolio chatbot for Fritha Sharma, a second-year Computer Science and Engineering student at JECRC. Her skills are HTML, CSS, JavaScript and Python. Her projects include this HTML/CSS/JavaScript portfolio, a five-question Code With AI Quiz, a Book Reading List app, beginner Python programs, code-improvement exercises and debugging with Cursor AI. Keep replies under 60 words. If a detail is not in this context, say you do not know rather than inventing it." },
        { role: "user", content: question }
      ] })
    });
    if (!response.ok) {
      if (response.status === 401) throw new Error("Check your API key.");
      if (response.status === 429) throw new Error("Too many requests. Wait and try again.");
      throw new Error(`API request failed (HTTP ${response.status}).`);
    }
    const data = await response.json();
    showMessage(data.choices?.[0]?.message?.content || "No reply received.", "bot");
    statusText.textContent = "";
  } catch (error) {
    statusText.textContent = "Chat unavailable. " + error.message;
  } finally {
    sendButton.disabled = false;
  }
});
