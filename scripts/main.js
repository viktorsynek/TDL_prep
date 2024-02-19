topnavToggle = document.getElementById('topnav-btn');
navbar = document.querySelector('.navbar');
let open = false;
topnavToggle.addEventListener('click', () => {
    if (!open) {
        navbar.classList.remove('fade-out');
        navbar.classList.remove('hidden');
        navbar.classList.add('fade-in');
        open = true;
    } else {
        navbar.classList.remove('fade-in');
        navbar.classList.add('fade-out');
        setTimeout(() => {
            navbar.classList.add('hidden');
            open = false;
        }, 1000);
    }
});
