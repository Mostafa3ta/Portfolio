const profileImg = document.querySelector('.profile')
const profileText = document.querySelector('.title')
const body = document.querySelector('body')
const Sections = document.querySelectorAll(".sections .section");
const navList = document.querySelectorAll(".side-nav .menu ul li");
const Theme = document.querySelector('.theme')
const nav = document.querySelector('.navbar')


let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('hide-nav')
    } else {
        nav.classList.remove('hide-nav')
    }
    lastScrollY = window.scrollY;
});

// window.scroll( () => {
//     Sections.forEach(sec => {
//         const top = window.scrollY;
//         const offset = sec.offsetTop - 60;
//         const height = sec.offsetHeight;
//         const id = sec.getAttribute('id');

//         if (top > offset && top <= offset + height) {
//             navList.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('.side-nav .menu ul li a[href*= ' + id + ']').classList.add('active')
//             })
//         }
//     })
// })




Theme.addEventListener('click', function (e) {
    body.classList.toggle('light')
    Theme.firstElementChild.classList.toggle('visually-hidden')
    Theme.lastElementChild.classList.toggle('visually-hidden')
})

navList.forEach((el) => {
    el.firstElementChild.addEventListener("click", (e) => {
        navList.forEach((els) => {
            els.firstElementChild.classList.remove("active");
        });
        el.firstElementChild.classList.add("active");
    });
});

