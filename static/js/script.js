let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-form');
let loginBtnActivetor = document.querySelector('#login-btn');
let loginBtnDeactivetor = document.querySelector('#login-deactive-btn');
let loginContainer = document.querySelector('.login-container')
let menuBar = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-class');
let videoSrc = document.querySelector('#video-slider');

// functions

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navbar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});

loginBtnActivetor.addEventListener('click', () => {
    loginContainer.classList.add('active');
})
loginBtnDeactivetor.addEventListener('click', () => {
    loginContainer.classList.remove('active');
})
menuBar.addEventListener('click', () => {
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
})

videoBtn.forEach( (element) =>{
    element.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        element.classList.add('active');
        videoSrc.src = element.getAttribute('data-src');
    });
})