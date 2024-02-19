let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

let darkBtn = document.querySelector('.dark');
let lightBtn = document.querySelector('.light');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    lightBtn.classList.remove('hidden');
    darkBtn.classList.add('hidden');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    lightBtn.classList.add('hidden');
    darkBtn.classList.remove('hidden');
};

if (darkMode === 'enabled') {
    enableDarkMode();
    lightBtn.classList.remove('hidden');
    darkBtn.classList.add('hidden');
} else {
    lightBtn.classList.add('hidden');
    darkBtn.classList.remove('hidden');
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});
