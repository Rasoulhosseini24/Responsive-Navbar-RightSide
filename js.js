const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector('nav')


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('in-active')
    nav.classList.toggle('none')
})