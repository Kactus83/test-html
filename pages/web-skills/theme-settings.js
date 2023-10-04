document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme]').forEach(button => {
        button.addEventListener('click', (e) => {
            const themeName = e.currentTarget.getAttribute('data-theme');
            changeTheme(themeName);
            localStorage.setItem('theme', themeName);
        });
    });
});

function changeTheme(themeName) {
    const root = document.documentElement;
    root.className = themeName;
}
