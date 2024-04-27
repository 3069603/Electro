const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtn.innerHTML = "&#10006;"; // HTML-символ закрытия
    } else {
        navBtn.innerHTML = "&#9776;"; // HTML-символ открытия
    }
};
// подключение анимации
AOS.init();