const NavItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
]

const MyProjects = [
    { name: 'Movies & Shows', category: 'Next.js', techs: ['Next.js', 'Typescript', 'Tailwind',], link: 'https://movies-henna-zeta.vercel.app/', git: 'https://movies-swart-one.vercel.app/', img: 'images/movies.png', },
    { name: 'New Portfolio', category: 'Next.js', techs: ['Next.js', 'Typescript', 'Tailwind',], link: 'https://portfolio2-eosin-six.vercel.app/', git: '', img: 'images/New-Portfolio.png', },
    { name: 'E-commerce', category: 'React.js', techs: ['React.js', 'Redux', 'Bootstrap',], link: 'https://e-commerce-delta-one-33.vercel.app/', git: 'https://github.com/Mostafa3ta/E-commerce_React.js', img: 'images/e-commerce-4.png', },
    { name: 'Cars Rental', category: 'Next.js', techs: ['Next.js', 'Typescript', 'Tailwind',], link: 'https://cars-five-chi.vercel.app/', git: 'https://github.com/Mostafa3ta/Cars-Rental', img: 'images/cars.png', },
    { name: 'Quiz App', category: 'React.js', techs: ['React.js', 'Redux', 'MUI',], link: 'https://quiz-blond-gamma-63.vercel.app/', git: 'https://github.com/Mostafa3ta/Quiz-App', img: 'images/Quiz.png', },
    { name: 'To-Do App', category: 'React.js', techs: ['React.js', 'Bootstrap',], link: 'https://todo-list-eta-cyan-49.vercel.app/', git: 'https://github.com/Mostafa3ta/Todo-List-App', img: 'images/ToDo-List.png', },
    { name: 'Bookmarker', category: 'Vanilla JS', techs: ['HTML', 'CSS', 'JavaScript',], link: 'https://bookmarker-teal.vercel.app/', git: 'https://github.com/Mostafa3ta/Bookmarker', img: 'images/Bookmarker2.png', },
    { name: 'Weather', category: 'Vanilla JS', techs: ['HTML', 'CSS', 'JavaScript',], link: 'https://weather-omega-wine.vercel.app/', git: 'https://github.com/Mostafa3ta/Weather', img: 'images/weather.png', },
    // { name: 'Bakery', category: 'Vanilla JS', techs: ['HTML', 'CSS',], link: '', git: 'https://github.com/Mostafa3ta/Bakery', img: 'images/bakery.png', },
]

const Social = [
    { name: 'GitHub', link: 'https://github.com/Mostafa3ta', icon: 'fa-brands fa-square-github' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0', icon: 'fa-brands fa-linkedin' },
    { name: 'Email', link: 'mailto:m2ostafa2000@gmail.com', icon: 'fa-solid fa-square-envelope' },
    { name: 'WhatsApp', link: 'https://wa.me/+201206856251', icon: 'fa-brands fa-square-whatsapp' },
]

const Experiences = [
    {
        company: 'MedicaProf',
        title: 'Mid-Level Front-End Engineer',
        from: 'April 2025', to: 'Present',
        description: 'Collaborate with designers and backend developers to ensure seamless integration and efficient project delivery for our platform. Develop and implement responsive user interfaces and advanced features like charts, full functional calendar and more using Next.js, Tailwind CSS, and JavaScript. Maintain, optimize, and update existing applications and platform components.',
        location: 'Remote',
        link: 'https://www.linkedin.com/company/medicaprof/',
        techs: ['Next.js', 'HTML & CSS', 'Tailwind CSS', 'JavaScript', 'Typescript', 'Redux', 'RESTful APIs']
    },
    {
        company: 'Camp Coding',
        title: 'Front-End Engineer',
        from: 'March 2024', to: 'April 2025',
        description: 'Collaborate with designers and backend developers to ensure seamless integration and project delivery. Building multiple responsive web applications using React.js, Next.js, HTML, CSS, and JavaScript. Maintain and update existing web applications',
        city: 'Tanta, Egypt',
        link: 'https://www.linkedin.com/company/campcoding/',
        techs: ['React', 'Next.js', 'HTML & CSS', 'Bootstrap', 'JavaScript', 'Typescript', 'Redux', 'RESTful APIs']
    },
    {
        company: 'Route Academy',
        title: 'Front-End Engineer (course)',
        from: 'October 2023', to: 'February 2024',
        description: 'Completed a comprehensive front-end development course covering HTML, CSS, and JavaScript fundamentals and developed a strong understanding of web development principles such as responsive design, accessibility, and performance optimization. Gained practical experience in building web applications using React and Next.js.',
        city: 'Cairo, Egypt',
        link: 'https://www.facebook.com/Routelearning/',
        techs: ['HTML & CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React', 'Next.js', 'Typescript', 'Redux', 'Context API', 'Unit Testing', 'JQuery', 'AJAX', 'RESTful APIs',]
    },
]

const TechSkills = ['HTML & CSS', 'JavaScript', 'React.js', 'Next.js', 'TypeScript', 'Bootstrap', 'Tailwind CSS', 'Context API', 'Redux', 'jQuery', 'RESTful API', 'Unit Testing', 'GitHub', 'Microsoft Office']
const ProjectsTechs = ['All', 'React.js', 'Next.js', 'Vanilla JS']
const Services = [
    { title: 'Optimization', disc: 'Optimize components to deliver optimal performance across a diverse range of web browsers.', icons: ['fa fa-code',] },
    { title: 'Responsive Design', disc: 'Ability to create web applications that adapt seamlessly to various screen sizes and devices', icons: ['fa-solid fa-mobile-screen-button', 'fa-solid fa-display'] },
]

const navWrapper = document.querySelector('#navContainer');
const socialWrapper = document.querySelector('#socialContainer');
const expWrapper = document.querySelector('#expContainer');
const technicalSkills = document.querySelector('#skillContainer');
const servicesContain = document.querySelector('#serviceContainer');
const projectsTechFilter = document.querySelector('#projectsTechs');
const projectWrapper = document.querySelector('#projectContainer');



const NavList = NavItems.map(item =>
    `<li class="nav-item">
    <a class="nav-link fs-5 ${item.name == 'Home' && 'active'} " href="${item.link}" aria-current="page">${item.name}</a>
    </li>`).join(' ')
navWrapper.innerHTML = NavList


const socialItems = Social.map(item =>
    `<a href="${item.link}" target="_blank" rel='noopener noreferrer'>
        <i class="${item.icon} secondery-text secondery-ico mx-2 fs-1 rounded-5"></i>
    </a>`).join(' ')
socialWrapper.innerHTML = socialItems


const expList = Experiences.map(item =>
    `<div class="d-flex mt-2 flex-wrap justify-content-center">
        <span class="fs-5 px-2 fw-bold">${item.title}</span>
        <span class="fs-5">|</span>
        <a href="${item.link}" class="comp-link fs-5 px-2" target="_blank" rel='noopener noreferrer'> ${item.company} </a>
     </div>
     <p class="fs-5 px-2"> (${item.from} - ${item.to}) </p>
    <div class="skill-item py-1 ps-0">${item.description}
    </div>` ).join('<br /> ')
expWrapper.innerHTML = expList


const serviceItems = Services.map(item =>
    `<div class="service-contain h-100 p-3 my-3 m-auto rounded-3 col-lg-5 col-md-10 col-12">
    ${item.icons.map(icon => `<i class="${icon} secondery-text mb-1 fs-3"></i>`).join(' ')}
                            <h4 class="mb-4">${item.title}</h4>
                            <p class="mb-0">${item.disc}</p>
                        </div>`).join(' ')
servicesContain.innerHTML = serviceItems


const techsCat = ProjectsTechs.map(item => `<button type="button" class="btn btn-dark ${item == 'All' && 'active'}">${item}</button>`).join(' ')
projectsTechFilter.innerHTML = techsCat


const skillsList = `<ul class="list"> 
${TechSkills
        .filter((item, index) => index < 7)
        .map(item => `<li class="skill-item p-1">${item}</li>`).join(' ')}
    </ul > 
    <ul class="list"> 
${TechSkills
        .filter((item, index) => index > 6)
        .map(item => `<li class="skill-item p-1">${item}</li>`).join(' ')}
    </ul > `
technicalSkills.innerHTML = skillsList


const projectList = MyProjects.map(item =>
    `<div class="project-contain my-3 rounded-3 col-lg-4 col-md-6 col-10 show-project "
data-text="${item.category}" >
    <img src="${item.img}" class=" w-100 project-img" alt="${item.name}">
        <div class="content-contain rounded-3"></div>
        <div class="content gap-md- gap-2 w-100 text-center">
            <h4 class="my-2">${item.name}</h4>
            <div class="d-flex">
                ${item.techs.map(tech => `<h7 class="tech-bg rounded-3 px-2 py-1 my-2  mx-1 m-auto">${tech}</h7>`).join(' ')}
            </div>
            <div class="d-flex justify-content-center gap-3 w-100 align-items-center">
                <a href="${item.link}" target="_blank" rel='noopener noreferrer'>
                <button class="btn border-0">
                <i class="fa-solid h3 hover-ico mx-1 fa-up-right-from-square"></i>
                </button>
                </a>
                <a href="${item.git}" target="_blank" rel='noopener noreferrer'>
                <button class="btn border-0">
                <i class="fa-brands fa-github h2 mx-1 hover-ico"></i>
                </button>
                </a>
                </div>
        </div>
    </div>` ).join('')
projectWrapper.innerHTML = projectList


