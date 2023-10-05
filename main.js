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

document.querySelectorAll('button, .column-child-block, .skill-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        console.log('Element hovered!');
        document.getElementById('cursor').classList.add('clickable-hover');
    });
    element.addEventListener('mouseleave', () => {
        console.log('Element unhovered!');
        document.getElementById('cursor').classList.remove('clickable-hover');
    });
});


