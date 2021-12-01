const bar = document.querySelector('.progress div');
window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - window.innerHeight;
    const percent = (window.pageYOffset / max) * 100;
    bar.style.width = `${percent}%`;
});
