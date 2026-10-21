console.log("JavaScript connected");

const themeToggle = document.getElementById("themeToggle");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function updateThemeButton(isDark) {
  themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
  themeToggle.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
}

themeToggle.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark-mode");
  updateThemeButton(isDark);
});

updateThemeButton(false);

const cityInput = document.getElementById("cityInput");
const weatherButton = document.getElementById("weatherButton");
const weatherResult = document.getElementById("weatherResult");

async function getWeather() {
  const city = cityInput.value.trim();
  if (!city) {
    weatherResult.textContent = "Please enter a city name.";
    return;
  }
  if (!window.CONFIG || window.CONFIG.weatherApiKey === "PASTE_YOUR_OPENWEATHER_API_KEY_HERE") {
    weatherResult.textContent = "Add your OpenWeather API key in config.js first.";
    return;
  }
  weatherResult.textContent = "Loading weather...";
  weatherButton.disabled = true;
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${window.CONFIG.weatherApiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) {
      if (response.status === 404) throw new Error("City not found. Check the spelling.");
      if (response.status === 401) throw new Error("API key is invalid or not active yet.");
      if (response.status === 429) throw new Error("Too many requests. Please wait and retry.");
      throw new Error(`Weather service error (${response.status}).`);
    }
    weatherResult.textContent = `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}. Humidity: ${data.main.humidity}%.`;
  } catch (error) {
    weatherResult.textContent = error instanceof TypeError ? "Network error. Check your internet connection." : error.message;
  } finally {
    weatherButton.disabled = false;
  }
}

weatherButton.addEventListener("click", getWeather);
cityInput.addEventListener("keydown", (event) => { if (event.key === "Enter") getWeather(); });
