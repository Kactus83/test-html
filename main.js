document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'yellow-theme';
    applyTheme(savedTheme);
});

function applyTheme(themeName) {
    const root = document.documentElement;
    root.className = themeName;
}document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        console.log('Button hovered!');
        document.getElementById('cursor').classList.add('clickable-hover');
    });
    button.addEventListener('mouseleave', () => {
        console.log('Button unhovered!');
        document.getElementById('cursor').classList.remove('clickable-hover');
    });
});

