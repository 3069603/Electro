const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtn.innerHTML = "&#10006;"; // HTML-символ закрытия
    } else {
        navBtn.innerHTML = "&#9776;"; // HTML-символ открытия
    }
};

// JavaScript to hide the menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('#nav');
        nav.classList.remove('open');
        const navBtn = document.querySelector('#nav-btn');
        navBtn.innerHTML = "&#9776;"; // Change back to hamburger icon
    });
});

// JavaScript to show the button after scrolling below the services section
window.onload = function() {
    var servicesSection = document.getElementById("services");
    var scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > servicesSection.offsetTop || document.documentElement.scrollTop > servicesSection.offsetTop) {
        scrollButton.style.display = "block";
    }
};
window.onscroll = function() {
    var servicesSection = document.getElementById("services");
    var scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > servicesSection.offsetTop || document.documentElement.scrollTop > servicesSection.offsetTop) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// подключение анимации
AOS.init();