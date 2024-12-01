const toggleButton = document.getElementById('mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? '🌙' : '🌞'; // Change button text based on mode
});
