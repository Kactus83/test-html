document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'yellow-theme';
    applyTheme(savedTheme);
});

function applyTheme(themeName) {
    const root = document.documentElement;
    root.className = themeName;
    console.log("theme updated");
}
