/*
* Listener to change theme and store it in local storage
*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-theme]').forEach(button => {
        button.addEventListener('click', (e) => {
            const themeName = e.currentTarget.getAttribute('data-theme');
            changeTheme(themeName);
            localStorage.setItem('theme', themeName);
        });
    });
});

/*
* Usefull change theme immediately (should be imported from main)
*/
function changeTheme(themeName) {
    const root = document.documentElement;
    root.className = themeName;
}
