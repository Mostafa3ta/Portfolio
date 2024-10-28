const body = document.querySelector('body')
const nav = document.querySelector('.navbar')
const navList = document.querySelectorAll(".navbar .navbar-nav li");
const Theme = document.querySelector('.theme')
const toggleItems = document.querySelector(".navbar .container-fluid #collapsibleNavId");
const toggle = document.querySelector(".navbar-toggler");
const toggleBtn = document.querySelector(".toggle-btn");
const profileImg = document.querySelector('.profile')
const profileText = document.querySelector('.title')
const section = document.querySelectorAll(".section");
const image = document.querySelector(".profile-project");

$(document).ready(function () {
    $('#loading').fadeOut(1000);
});

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('hide-nav')
        if (toggleItems.classList.contains('show')) {
            toggleItems.classList.remove('show')
            toggleBtn.firstElementChild.classList.remove('visually-hidden')
            toggleBtn.lastElementChild.classList.add('visually-hidden')
        }
    } else {
        nav.classList.remove('hide-nav')
    }
    lastScrollY = window.scrollY;
});

Theme.addEventListener('click', function (e) {
    body.classList.toggle('light')
    Theme.firstElementChild.classList.toggle('visually-hidden')
    Theme.lastElementChild.classList.toggle('visually-hidden')

    // if (body.classList.contains('light')) {
    //     image.src = "images/profile.png"
    // } else {
    //     image.src = "images/profile-light.png"
    // }
})

toggle.addEventListener('click', function (e) {
    if (toggle.classList.contains('collapsed')) {
        toggleBtn.firstElementChild.classList.remove('visually-hidden')
        toggleBtn.lastElementChild.classList.add('visually-hidden')
    } else {
        toggleBtn.firstElementChild.classList.add('visually-hidden')
        toggleBtn.lastElementChild.classList.remove('visually-hidden')
    }
})


navList.forEach((el) => {
    el.firstElementChild.addEventListener("click", (e) => {
        navList.forEach((els) => {
            els.firstElementChild.classList.remove("active");
        });
        el.firstElementChild.classList.add("active");
    });
});


let typesBtn = document.querySelectorAll(".project-types button"),
    portfolioItems = document.querySelectorAll(".projects > div");
typesBtn.forEach((el) => {
    el.addEventListener("click", () => {
        typesBtn.forEach((ele) => {
            ele.classList.remove("active");
        });
        portfolioItems.forEach((pi) => {
            pi.style.display = "none";
            pi.classList.remove("show-project");
        });
        el.classList.add("active");
        portfolioItems.forEach((pi) => {
            if (
                el.textContent === pi.dataset.text ||
                el.textContent === "All"
            ) {
                pi.style.display = "block";
                setTimeout(() => {
                    pi.classList.add("show-project");
                }, 200);
            } else {
                pi.style.display = "none";
            }
        });
    });
});


