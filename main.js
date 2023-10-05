/*
* Check for stored theme & Update CSS
*/

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'yellow-theme';
    applyTheme(savedTheme);
});

// Update CSS variables
function applyTheme(themeName) {
    const root = document.documentElement;
    root.className = themeName;
}

/*
* Custom cursor
*/
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Custom cursor changes on specific hovers
document.querySelectorAll('button, .column-child-block, .skill-card, .animation-box').forEach(element => {
    element.addEventListener('mouseenter', () => {
        console.log('Element hovered!');
        document.getElementById('cursor').classList.add('clickable-hover');
    });
    element.addEventListener('mouseleave', () => {
        console.log('Element unhovered!');
        document.getElementById('cursor').classList.remove('clickable-hover');
    });
});


