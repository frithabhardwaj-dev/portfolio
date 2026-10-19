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
