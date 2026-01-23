const NavItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#services" },
  { name: "Projects", link: "#projects" },
];

const MyProjects = [
  {
    name: "MedicaProf",
    category: "Next.js",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Hero UI"],
    link: "https://medicaprof.com/",
    git: "",
    img: "images/MedicaProf.png",
    isProduction: true,
  },
  {
    name: "New Portfolio",
    category: "Next.js",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://portfolio2-eosin-six.vercel.app/",
    git: "https://github.com/Mostafa3ta/Portfolio-v2",
    img: "images/New-Portfolio.png",
  },
  {
    name: "Movies Website",
    category: "Next.js",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    link: "https://movies-swart-one.vercel.app/",
    git: "https://github.com/Mostafa3ta/movies",
    img: "images/movies.png",
  },
  {
    name: "E-commerce ",
    category: "React.js",
    techs: ["React.js", "Redux", "Bootstrap"],
    link: "https://e-commerce-delta-one-33.vercel.app/",
    git: "https://github.com/Mostafa3ta/E-commerce_React.js",
    img: "images/e-commerce-4.png",
  },
  // {
  //   name: "Cars Rental",
  //   category: "Next.js",
  //   techs: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   link: "https://cars-five-chi.vercel.app/",
  //   git: "https://github.com/Mostafa3ta/Cars-Rental",
  //   img: "images/cars.png",
  // },
  {
    name: "Quiz Application",
    category: "React.js",
    techs: ["React.js", "Redux", "Material UI"],
    link: "https://quiz-blond-gamma-63.vercel.app/",
    git: "https://github.com/Mostafa3ta/Quiz-App",
    img: "images/Quiz.png",
  },
  {
    name: "To-Do App",
    category: "React.js",
    techs: ["React.js", "Bootstrap"],
    link: "https://todo-list-eta-cyan-49.vercel.app/",
    git: "https://github.com/Mostafa3ta/Todo-List-App",
    img: "images/ToDo-List.png",
  },
  {
    name: "Bookmarker",
    category: "JavaScript",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://bookmarker-teal.vercel.app/",
    git: "https://github.com/Mostafa3ta/Bookmarker",
    img: "images/Bookmarker2.png",
  },
  {
    name: "Weather App",
    category: "JavaScript",
    techs: ["HTML", "CSS", "JavaScript"],
    link: "https://weather-omega-wine.vercel.app/",
    git: "https://github.com/Mostafa3ta/Weather",
    img: "images/weather.png",
  },
];

const Social = [
  {
    name: "GitHub",
    link: "https://github.com/Mostafa3ta",
    icon: "fa-brands fa-square-github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mostafa-mahmoud-33a1542b0",
    icon: "fa-brands fa-linkedin",
  },
  {
    name: "Email",
    link: "mailto:m2ostafa2000@gmail.com",
    icon: "fa-solid fa-square-envelope",
  },
];

const Experiences = [
  {
    company: "MedicaProf",
    title: "Mid-Level Front-End Developer",
    from: "April 2025",
    to: "Present",
    description:
      "Contribute to the development of a large-scale, production healthcare platform serving multiple user roles (patients, doctors, admins) with complex workflows and data requirements. Built and maintained interactive, business-critical features, including a fully functional Doctor Appointments Calendar, Analytics dashboards with data visualization. Collaborated with backend and product stakeholders to deliver features aligned with real operational needs, not just UI specs.",
    location: "Remote",
    link: "https://www.linkedin.com/company/medicaprof/",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "REST APIs"],
  },
  {
    company: "Camp Coding",
    title: "Front-End Developer",
    from: "March 2024",
    to: "April 2025",
    description:
      "Worked closely with designers and backend developers to deliver responsive web applications. Developed and maintained applications using React.js, Next.js, JavaScript, HTML, and CSS, ensuring cross-device compatibility and clean UI behavior.",
    city: "Tanta, Egypt",
    link: "https://www.linkedin.com/company/campcoding/",
    techs: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    company: "Route Academy",
    title: "Front-End Developer (Internship)",
    from: "October 2023",
    to: "March 2024",
    description:
      "Completed intensive hands-on training in HTML, CSS, JavaScript, React, and Next.js, with a strong focus on real-world development practices. Built multiple front-end projects emphasizing responsive design, accessibility, and performance optimization.",
    city: "Cairo, Egypt",
    link: "https://www.facebook.com/Routelearning/",
    techs: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript"],
  },
];

const TechSkills = [
  { name: "HTML5", icon: "fa-brands fa-html5" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt" },
  { name: "JavaScript", icon: "fa-brands fa-js" },
  {
    name: "TypeScript",
    svg: '<svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>TypeScript icon</title><path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"></path></g></svg>',
  },
  { name: "React", icon: "fa-brands fa-react" },
  {
    name: "Next.js",
    svg: '<svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="#000000"> </path> </g> </g></svg>',
  },
  {
    name: "Redux",
    svg: '<svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.661 15.549a1.315 1.315 0 0 0 1.185-1.386 1.363 1.363 0 0 0-1.35-1.302h-.048a1.352 1.352 0 0 0-1.303 1.397c.024.379.179.687.391.911-.827 1.609-2.07 2.794-3.954 3.788-1.266.663-2.604.912-3.905.734-1.089-.153-1.94-.64-2.463-1.421-.78-1.185-.852-2.462-.201-3.74a5.597 5.597 0 0 1 1.658-1.931 7.88 7.88 0 0 1-.331-1.218c-3.506 2.51-3.148 5.942-2.084 7.564.794 1.184 2.415 1.941 4.19 1.941.474 0 .972-.035 1.457-.154 3.077-.592 5.409-2.438 6.747-5.16l.011-.023z"></path><path d="M19.887 12.589c-1.834-2.154-4.533-3.337-7.611-3.337h-.403c-.2-.438-.661-.711-1.183-.711h-.036c-.744 0-1.325.64-1.301 1.385.023.71.627 1.302 1.35 1.302h.059a1.332 1.332 0 0 0 1.183-.828h.439c1.824 0 3.551.532 5.126 1.574 1.206.792 2.072 1.834 2.557 3.077.425 1.019.402 2.013-.035 2.843-.675 1.302-1.812 1.988-3.314 1.988-.947 0-1.871-.296-2.345-.509-.283.235-.758.626-1.102.863 1.042.473 2.096.746 3.113.746 2.309 0 4.023-1.302 4.676-2.557.709-1.422.651-3.813-1.161-5.859l-.012.023z"></path><path d="M7.647 15.975c.023.71.626 1.302 1.35 1.302h.048a1.334 1.334 0 0 0 1.302-1.397c0-.71-.616-1.301-1.338-1.301h-.048c-.048 0-.118 0-.178.022-.982-1.657-1.397-3.434-1.242-5.349.094-1.445.567-2.7 1.42-3.742.71-.888 2.048-1.326 2.96-1.35 2.556-.048 3.622 3.138 3.704 4.404l1.184.354C16.536 5.036 14.122 3 11.813 3 9.647 3 7.647 4.574 6.842 6.884c-1.102 3.077-.379 6.036.971 8.404-.118.154-.189.426-.166.687z"></path></g></svg>',
  },
  {
    name: "Tailwind CSS",
    svg: '<svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg>',
  },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
  {
    name: "jQuery",
    svg: '<svg fill="#ffffff" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51ef0ed"> <path display="inline" d="M499.161,364.63c0,0-63.554,171.386-282.354,131.488c-3.443-0.641-6.745-1.838-10.089-2.849 c-0.782-0.229-1.572-0.479-2.354-0.703c-3.285-1.022-6.537-2.07-9.769-3.197c-0.37-0.129-0.723-0.25-1.098-0.383 c-2.944-1.035-5.872-2.134-8.762-3.244c-0.757-0.295-1.51-0.582-2.263-0.89c-3.114-1.23-6.212-2.516-9.277-3.859 c-0.565-0.249-1.11-0.499-1.684-0.752c-2.683-1.193-5.332-2.429-7.959-3.685c-0.682-0.346-1.368-0.666-2.055-0.99 c-0.374-0.187-0.777-0.374-1.16-0.565c-1.696-0.848-3.352-1.729-5.023-2.604c-1.289-0.665-2.599-1.313-3.88-2 c-2.366-1.289-4.699-2.599-7.02-3.938c-0.861-0.491-1.73-0.965-2.583-1.46c-3.152-1.854-6.271-3.78-9.344-5.727 c-0.869-0.557-1.729-1.147-2.586-1.722c-2.004-1.297-4.009-2.595-5.972-3.95c-0.208-0.142-0.407-0.291-0.611-0.437 c-0.761-0.516-1.484-1.044-2.241-1.593c-2.071-1.439-4.121-2.911-6.15-4.408c-0.981-0.74-1.959-1.484-2.932-2.229 c-1.838-1.402-3.667-2.837-5.481-4.284c-0.902-0.723-1.817-1.438-2.719-2.17c-2.212-1.822-4.417-3.677-6.575-5.548 c-0.408-0.357-0.84-0.707-1.256-1.081c-0.042-0.017-0.071-0.05-0.117-0.088c-2.449-2.146-4.853-4.346-7.236-6.591 c-0.719-0.657-1.435-1.36-2.158-2.05c-1.78-1.71-3.543-3.432-5.277-5.178c-0.72-0.707-1.431-1.422-2.121-2.138 c-2.241-2.304-4.454-4.611-6.616-6.97c-0.079-0.107-0.158-0.17-0.253-0.274c-0.038-0.041-0.092-0.096-0.129-0.142 c-2.212-2.437-4.383-4.928-6.508-7.427c-0.595-0.703-1.193-1.422-1.78-2.133c-1.584-1.909-3.144-3.813-4.674-5.743 c-0.636-0.803-1.272-1.613-1.9-2.42c-1.717-2.217-3.414-4.45-5.057-6.721c-0.308-0.424-0.636-0.84-0.932-1.256 c-0.063-0.07-0.116-0.146-0.158-0.216c-1.904-2.633-3.742-5.315-5.547-8.001c-0.561-0.824-1.089-1.672-1.63-2.521 c-1.306-1.987-2.587-3.976-3.826-5.988c-0.648-1.031-1.264-2.066-1.888-3.103c-1.127-1.879-2.229-3.759-3.298-5.655 c-0.611-1.073-1.214-2.121-1.805-3.223c-0.329-0.582-0.686-1.182-1.006-1.792c-0.562-1.016-1.069-2.075-1.618-3.111 c-0.848-1.626-1.709-3.26-2.528-4.915c-34.557-69.094-40.196-153.694,5.048-218.723l35.314-44.789 c-39.843,77.007-21.936,170.778,27.908,238.76c1.8,2.475,3.643,4.916,5.526,7.356c0.583,0.736,1.168,1.477,1.751,2.184 c1.567,1.996,3.168,3.967,4.786,5.918c0.583,0.686,1.152,1.359,1.747,2.066c2.163,2.554,4.375,5.09,6.646,7.564 c0.108,0.12,0.212,0.229,0.316,0.345c2.146,2.342,4.333,4.653,6.558,6.933c0.69,0.698,1.393,1.389,2.096,2.088 c1.747,1.783,3.531,3.514,5.344,5.235c0.686,0.682,1.376,1.339,2.088,2.017c2.449,2.279,4.919,4.545,7.435,6.758 c0.262,0.229,0.532,0.44,0.773,0.652c2.329,2.025,4.687,3.997,7.074,5.96c0.832,0.678,1.68,1.355,2.528,2.029 c1.875,1.509,3.772,2.978,5.681,4.437c0.911,0.699,1.846,1.41,2.791,2.108c2.075,1.539,4.171,3.053,6.288,4.55 c0.719,0.486,1.418,1.015,2.146,1.505c2.188,1.514,4.417,2.986,6.654,4.425c0.84,0.558,1.672,1.14,2.52,1.681 c3.086,1.954,6.205,3.875,9.357,5.73c0.811,0.466,1.622,0.902,2.42,1.352c2.379,1.376,4.762,2.731,7.19,4.029 c1.314,0.731,2.666,1.393,3.996,2.096c1.988,1.023,3.976,2.063,5.988,3.044c0.761,0.374,1.501,0.724,2.246,1.077 c2.566,1.235,5.14,2.425,7.743,3.605c0.616,0.267,1.214,0.545,1.834,0.811c3.032,1.327,6.096,2.6,9.186,3.817 c0.794,0.316,1.589,0.62,2.387,0.937c2.811,1.089,5.643,2.146,8.508,3.156c0.445,0.158,0.89,0.32,1.322,0.478 c3.194,1.099,6.408,2.146,9.648,3.136c0.827,0.258,1.655,0.508,2.503,0.757c3.318,0.981,6.616,2.042,10.018,2.812 C351.039,452.521,445.783,434.173,499.161,364.63z M182.44,254.758c4.907,7.024,10.338,15.386,16.846,21.031 c2.354,2.598,4.824,5.13,7.34,7.621c0.632,0.648,1.285,1.272,1.938,1.908c2.437,2.371,4.932,4.704,7.494,6.97 c0.108,0.079,0.204,0.188,0.308,0.263c0.029,0.033,0.054,0.041,0.075,0.074c2.845,2.487,5.781,4.887,8.758,7.244 c0.662,0.508,1.318,1.036,1.988,1.552c2.99,2.291,6.039,4.545,9.166,6.69c0.096,0.066,0.17,0.134,0.266,0.2 c1.376,0.956,2.782,1.846,4.175,2.761c0.674,0.433,1.31,0.898,1.983,1.306c2.237,1.435,4.496,2.828,6.795,4.167 c0.325,0.2,0.641,0.366,0.961,0.553c1.975,1.14,3.992,2.267,6.005,3.356c0.698,0.391,1.414,0.74,2.129,1.114 c1.389,0.724,2.786,1.468,4.2,2.171c0.212,0.1,0.433,0.199,0.637,0.287c2.882,1.418,5.788,2.79,8.762,4.079 c0.632,0.283,1.289,0.532,1.934,0.799c2.375,1.006,4.77,1.992,7.178,2.915c1.022,0.387,2.059,0.757,3.073,1.127 c2.191,0.815,4.383,1.556,6.595,2.296c1.003,0.319,1.984,0.648,2.986,0.956c3.144,0.973,6.254,2.212,9.535,2.753 C472.501,366.942,511.5,236.873,511.5,236.873c-35.16,50.633-103.243,74.791-175.897,55.936c-3.223-0.849-6.403-1.776-9.56-2.77 c-0.974-0.292-1.922-0.607-2.883-0.928c-2.245-0.728-4.479-1.501-6.694-2.308c-1.011-0.37-2.025-0.74-3.02-1.123 c-2.425-0.932-4.824-1.896-7.198-2.902c-0.653-0.283-1.306-0.533-1.942-0.824c-2.981-1.299-5.917-2.663-8.812-4.094 c-1.493-0.729-2.953-1.499-4.425-2.254c-0.849-0.437-1.701-0.875-2.549-1.312c-1.88-1.021-3.751-2.08-5.594-3.154 c-0.437-0.252-0.894-0.491-1.339-0.755c-2.283-1.339-4.537-2.718-6.77-4.134c-0.687-0.438-1.352-0.915-2.038-1.366 c-1.477-0.954-2.944-1.921-4.392-2.902c-3.11-2.146-6.138-4.399-9.128-6.678c-0.69-0.543-1.376-1.073-2.059-1.616 c-31.796-25.111-57-59.423-68.994-98.33c-12.555-40.352-9.847-85.647,11.914-122.406l-26.735,37.738 c-32.715,47.085-30.939,110.113-5.419,159.91C172.252,238.95,177.063,247.046,182.44,254.758z M360.5,196.506 c1.393,0.52,2.782,0.981,4.191,1.458c0.616,0.189,1.231,0.401,1.851,0.584c1.988,0.626,3.963,1.352,6.018,1.738 c93.284,18.023,118.58-47.869,125.317-57.566c-22.165,31.91-59.405,39.57-105.111,28.481c-3.605-0.881-7.572-2.185-11.058-3.416 c-4.462-1.591-8.849-3.404-13.124-5.456c-8.121-3.899-15.848-8.629-23.025-14.045c-40.891-31.029-66.291-90.221-39.61-138.425 L291.51,29.76c-19.287,28.386-21.179,63.638-7.801,94.991C297.823,158.025,326.745,184.132,360.5,196.506z"> </path> </g> </g></svg>',
  },
  { name: "Git", icon: "fa-brands fa-git-alt" },
  {
    name: "REST/GraphQL",
    svg: '<svg fill="#ffffff" viewBox="-1.5 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12.731 2.751 4.935 2.849c.39-.41.94-.664 1.549-.664 1.181 0 2.138.957 2.138 2.138 0 1.001-.688 1.842-1.617 2.074l-.015.003v5.7c.949.233 1.642 1.076 1.642 2.081 0 1.182-.958 2.14-2.14 2.14-.637 0-1.208-.278-1.6-.719l-.002-.002-4.905 2.832c.069.202.109.434.109.675 0 1.182-.958 2.14-2.14 2.14s-2.14-.958-2.14-2.14c0-.216.032-.425.092-.621l-.004.015-4.941-2.844c-.39.407-.939.66-1.546.66-1.182 0-2.14-.958-2.14-2.14 0-1.002.689-1.844 1.619-2.076l.015-.003v-5.699c-.951-.231-1.646-1.076-1.646-2.082 0-1.182.958-2.14 2.14-2.14.396 0 .768.108 1.086.296l-.01-.005c.184.106.342.231.479.376l.001.001 4.938-2.85c-.056-.182-.088-.391-.088-.608 0-1.181.958-2.139 2.139-2.139s2.139.958 2.139 2.139c0 .219-.033.43-.094.629l.004-.015zm-.515.877c-.019.021-.037.039-.057.057l-.001.001 6.461 11.19c.026-.009.056-.016.082-.023v-5.707c-.938-.238-1.621-1.076-1.621-2.072 0-.183.023-.361.066-.531l-.003.015c.006-.024.012-.049.019-.072zm-3.015.059-.06-.06-4.946 2.852c.053.177.084.381.084.592 0 .969-.645 1.787-1.53 2.049l-.015.004-.076.021v5.708l.084.023 6.461-11.19zm2.076.507c-.179.053-.384.084-.596.084s-.417-.031-.611-.088l.015.004-6.46 11.189c.286.276.496.629.597 1.026l.003.015h12.911c.102-.413.313-.768.599-1.043l.001-.001-6.456-11.186zm.986 16.227 4.917-2.838c-.015-.047-.027-.094-.038-.142h-12.92l-.021.083 4.939 2.852c.39-.403.936-.653 1.54-.653.626 0 1.189.268 1.581.696l.001.002z"></path></g></svg>',
  },
];

const ProjectsTechs = ["All", "React.js", "Next.js", "JavaScript"];

const Services = [
  {
    title: "Web Development & Design",
    disc: "Build modern, responsive web applications using React, Next.js, and TypeScript with clean, maintainable code. Create seamless user experiences across all devices with mobile-first, accessible designs that adapt to any screen size.",
    icons: ["fa-solid fa-code", "fa-solid fa-mobile-screen-button"],
  },
  {
    title: "Performance & Integration",
    disc: "Optimize components and applications for fast load times and smooth performance across diverse web browsers. Integrate RESTful and GraphQL APIs with proper error handling, caching strategies, and attention to latency and user experience.",
    icons: ["fa-solid fa-gauge-high", "fa-solid fa-plug"],
  },
];

const navWrapper = document.querySelector("#navContainer");
const socialWrapper = document.querySelector("#socialContainer");
const expWrapper = document.querySelector("#expContainer");
const technicalSkills = document.querySelector("#skillContainer");
const servicesContain = document.querySelector("#serviceContainer");
const projectsTechFilter = document.querySelector("#projectsTechs");
const projectWrapper = document.querySelector("#projectContainer");

const NavList = NavItems.map(
  (item) =>
    `<li class="nav-item">
    <a class="nav-link fs-5 ${item.name == "Home" && "active"} " href="${item.link}" aria-current="page">${item.name}</a>
    </li>`,
).join(" ");
navWrapper.innerHTML = NavList;

const socialItems = Social.map(
  (item) =>
    `<a href="${item.link}" target="_blank" rel='noopener noreferrer'>
        <i class="${item.icon} secondery-text secondery-ico mx-2 fs-1 rounded-5"></i>
    </a>`,
).join(" ");
socialWrapper.innerHTML = socialItems;

const expList = Experiences.map(
  (item) =>
    `<div class="experience-card p-4 mb-4 rounded-3">
        <div class="d-flex flex-wrap justify-content-between align-items-start mb-3">
            <div>
                <h4 class="mb-1">${item.title}</h4>
                <a href="${item.link}" class="comp-link fs-5" target="_blank" rel='noopener noreferrer'>
                    <i class="fa-solid fa-building me-2"></i>${item.company}
                    <i class="fa-solid fa-arrow-up-right-from-square ms-1 fa-xs"></i>
                </a>
            </div>
            <div class="text-md-end mt-2 mt-md-0">
                <div class="fs-6 fw-semibold">${item.from} — ${item.to}</div>
                <p class="fs-6">${item.location || item.city}</p>
            </div>
        </div>
        <p class="mb-3">${item.description}</p>

    </div>`,
).join("");
expWrapper.innerHTML = expList;

const serviceItems = Services.map(
  (item) =>
    `<div class="service-card h-100 p-4 my-3 rounded-3 text-center">
        ${item.icons.map((icon) => `<i class="${icon} secondery-text mb-3 fs-1"></i>`).join(" ")}
        <h4 class="mb-3">${item.title}</h4>
        <p class="mb-0">${item.disc}</p>
    </div>`,
).join("");
servicesContain.innerHTML = serviceItems;

const techsCat = ProjectsTechs.map(
  (item) =>
    `<button type="button" class="btn btn-dark ${item == "All" && "active"}">${item}</button>`,
).join(" ");
projectsTechFilter.innerHTML = techsCat;

const skillsList = TechSkills.map(
  (skill) =>
    `<div class="skill-card text-center p-3 rounded-3">
        ${skill.svg ? skill.svg : `<i class="${skill.icon} fs-1 mb-2"></i>`}
        <div class="skill-name">${skill.name}</div>
    </div>`,
).join("");
technicalSkills.innerHTML = skillsList;

const projectList = MyProjects.map(
  (item) =>
    `<div class="project-contain my-3 rounded-3 col-lg-4 col-md-6 col-10 show-project" data-text="${item.category}">
        ${item.isProduction ? '<span class="production-badge"><i class="fa-solid fa-circle-check me-1"></i>Production</span>' : ""}
        <img src="${item.img}" class="w-100 project-img" alt="${item.name}">
        <div class="content-contain rounded-3"></div>
        <div class="content gap-2 w-100 text-center p-3">
            <h4 class="my-2">${item.name}</h4>
            <div class="d-flex flex-wrap justify-content-center gap-2 mb-1">
                ${item.techs.map((tech) => `<span class="tech-bg rounded-1 py-1 px-2 ">${tech}</span>`).join("")}
            </div>
            <div class="d-flex justify-content-center gap-2 align-items-center">
                ${
                  item.link
                    ? `<a href="${item.link}" target="_blank" rel='noopener noreferrer' title="View Live">
                    <button class="btn border-0">
                        <i class="fa-solid h5 hover-ico fa-up-right-from-square"></i>
                    </button>
                </a>`
                    : ""
                }
                ${
                  item.git
                    ? `<a href="${item.git}" target="_blank" rel='noopener noreferrer' title="View Code">
                    <button class="btn border-0">
                        <i class="fa-brands fa-github h4 hover-ico"></i>
                    </button>
                </a>`
                    : ""
                }
            </div>
        </div>
    </div>`,
).join("");
projectWrapper.innerHTML = projectList;
