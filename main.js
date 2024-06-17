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
    const cursorSize = cursor.offsetWidth / 2;
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    let x = e.pageX;
    let y = e.pageY;

    if (x < cursorSize) {
        x = cursorSize;
    } else if (x > pageWidth - cursorSize) {
        x = pageWidth - cursorSize;
    }

    if (y < cursorSize) {
        y = cursorSize;
    } else if (y > pageHeight - cursorSize) {
        y = pageHeight - cursorSize;
    }

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});


// Custom cursor changes on specific hovers
document.querySelectorAll('.column-child-block, .skill-card, .animation-box, .primary-color-filled, .secondary-color-filled').forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.getElementById('cursor').classList.add('clickable-hover');
    });
    element.addEventListener('mouseleave', () => {
        document.getElementById('cursor').classList.remove('clickable-hover');
    });
});
document.querySelectorAll('button, .header-logo').forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.getElementById('cursor').classList.add('mini-clickable-hover');
    });
    element.addEventListener('mouseleave', () => {
        document.getElementById('cursor').classList.remove('mini-clickable-hover');
    });
});
document.querySelectorAll('.landing-area-text').forEach(element => {
    element.addEventListener('mouseenter', () => {
        document.getElementById('cursor').classList.add('hidden');
    });
    element.addEventListener('mouseleave', () => {
        document.getElementById('cursor').classList.remove('hidden');
    });
});


