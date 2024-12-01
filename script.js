const modeToggle = document.getElementById("mode-toggle");

// Check for saved theme in localStorage
const currentTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", currentTheme);

// Update mode-toggle icon based on current theme
modeToggle.textContent = currentTheme === "dark" ? "🌙" : "☀️";

// Toggle between Light and Dark Mode
modeToggle.addEventListener("click", () => {
    let newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    
    // Save the current theme to localStorage
    localStorage.setItem("theme", newTheme);

    // Update icon based on theme
    modeToggle.textContent = newTheme === "dark" ? "🌙" : "☀️";
});