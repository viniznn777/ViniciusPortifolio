let button = document.getElementById('DarkMode');
let icon = document.getElementById('icon');

let particles = document.getElementById('particles-js');
let main = document.querySelector('main');
let header = document.querySelector('header');
let footer = document.querySelector('footer');


function LightMode() {
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        particles.classList.add('LightMode');
        main.classList.add('LightMode');
        header.classList.add('LightMode');
        footer.classList.add('LightMode');
        
    }
    else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        particles.classList.remove('LightMode');
        main.classList.remove('LightMode');
        header.classList.remove('LightMode');
        footer.classList.remove('LightMode');
    };
};

function loadTheme() {
    const darkMode = localStorage.getItem('Light');

    if (darkMode) {
        LightMode();
    }
};

loadTheme();

button.addEventListener('click', function() {
    LightMode();
    window.navigator.vibrate(400);
    localStorage.removeItem('Light');

    if (icon.classList.contains('fa-sun')) {
        localStorage.setItem('Light', 1);
    };
});
