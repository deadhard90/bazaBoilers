let lastKnownScrollPosition = 0;
let ticking = false;
const headerFinderEl = document.querySelector('[data-header-finder]');

function resizeMenu() {
    if (window.pageYOffset > 300) {
        headerFinderEl.classList.add('header-finder-fixed');
    } else if (window.pageYOffset < 300) {
        headerFinderEl.classList.remove('header-finder-fixed');
    }
}

window.addEventListener('load', () => {
    resizeMenu();
});

window.addEventListener('scroll', () => {
    lastKnownScrollPosition = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            resizeMenu(lastKnownScrollPosition);
            ticking = false;
        });
        ticking = true;
    }
});
