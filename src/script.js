// Data
const projects = [
    {
        title: 'dekay',
        description: 'Eine mobile fitness app für den täglichen Gebrauch. Enthält Gesundheitsdaten, Meal Tracking, Auswertungen und vieles mehr.',
        image: 'https://github.com/dkluske/dekay/blob/master/statics/dekay.png?raw=true',
        technologies: ['Kotlin Multiplatform', 'Jetpack Compose', 'SQLite', 'SQLDelight', 'Ktor'],
        link: 'https://github.com/dkluske/dekay'
    },
    {
        title: 'HealthKMP',
        description: 'Ein wrapper für die HealthKit API von Apple sowie die Google Fit API. Geforkt von der offiziellen Implementierung.',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['HealthKit', 'Kotlin Multiplatform', 'Androidx Health Connect', 'GitHub Actions'],
        link: 'https://github.com/dkluske/HealthKMP'
    },
    {
        title: 'BDY',
        description: 'Eine App zum finden von Buddies jeglicher Art. Sei es zum Sport, zum Lernen oder einfach als Freundschaft in einer neuen Stadt. (Noch nicht in Entwicklung, folgt nach dekay)',
        image: 'https://via.placeholder.com/600x400',
        technologies: ['Kotlin Multiplatform', 'Jetpack Compose', 'SQLite', 'Ktor'],
        link: '#'
    }
];

const skills = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', level: 40 },
            { name: 'Jetpack Compose', level: 65 },
            { name: 'Vaadin', level: 65 },
            { name: 'HTML/CSS', level: 80 },
            { name: 'JavaScript', level: 70 },
            { name: 'TypeScript', level: 30 },
            { name: 'GWT', level: 20 },
        ]
    },
    {
        category: 'Backend',
        items: [
            { name: 'Kotlin', level: 80 },
            { name: 'Python', level: 40 },
            { name: 'Java', level: 80 },
            { name: 'Spring Framework', level: 40 },
            { name: 'Ktor', level: 80 },
            { name: 'Django', level: 15 },
            { name: 'Hibernate', level: 20 },
            { name: 'Exposed', level: 45 }
        ]
    },
    {
        category: 'Datenbanken & Tools',
        items: [
            { name: 'MongoDB', level: 20 },
            { name: 'PostgreSQL', level: 70 },
            { name: 'MySQL', level: 70 },
            { name: 'Git', level: 75 },
            { name: 'Docker', level: 30 },
            { name: 'Kubernetes', level: 30 }
        ]
    },
    {
        category: 'APIs',
        items: [
            { name: 'REST', level: 90 },
            { name: 'SOAP', level: 65 },
            { name: 'GraphQL', level: 25 },
            { name: 'WebSocket / Async', level: 80 },
            { name: 'gRPC', level: 15 },
            { name: 'SSE', level: 15 }
        ]
    },
    {
        category: 'Weitere Tools',
        items: [
            { name: 'GitHub', level: 75 },
            { name: 'Gitlab', level: 75 }
        ]
    }
];

const contacts = [
    {
        icon: '<i class="fab fa-github text-4xl"></i>',
        title: 'GitHub',
        link: 'https://github.com/dkluske',
        username: '@dkluske'
    },
    {
        icon: '<i class="fab fa-gitlab text-4xl"></i>',
        title: 'GitLab',
        link: 'https://gitlab.com/dkluske',
        username: '@dkluske'
    },
    {
        icon: '<i class="fab fa-linkedin text-4xl"></i>',
        title: 'LinkedIn',
        link: 'https://linkedin.com/in/dominik-kluske',
        username: 'Dominik Kluske'
    },
    {
        icon: '<i class="fas fa-envelope text-4xl"></i>',
        title: 'E-Mail',
        link: 'mailto:dominik.kluske@proton.me',
        username: 'dominik.kluske@proton.me'
    }
];

// Render Projects
function renderProjects() {
    const projectsWrapper = document.querySelector('.projects-swiper .swiper-wrapper');
    projects.forEach(project => {
        const projectSlide = document.createElement('div');
        projectSlide.className = 'swiper-slide';
        projectSlide.innerHTML = `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2">${project.title}</h3>
                    <p class="text-gray-600 mb-4">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.technologies.map(tech => `
                            <span class="px-3 py-1 bg-blue-500 bg-opacity-10 text-blue-500 rounded-full text-sm">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                    <a href="${project.link}" class="text-blue-500 hover:text-blue-600 font-semibold">
                        Mehr erfahren <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        `;
        projectsWrapper.appendChild(projectSlide);
    });
}

// Render Skills
function renderSkills() {
    const skillsWrapper = document.querySelector('.skills-swiper .swiper-wrapper');
    skills.forEach(skillCategory => {
        const skillSlide = document.createElement('div');
        skillSlide.className = 'swiper-slide';
        skillSlide.innerHTML = `
            <div class="bg-white rounded-xl shadow-lg p-6 h-full">
                <h3 class="text-2xl font-bold mb-6 text-center">${skillCategory.category}</h3>
                <div class="space-y-4">
                    ${skillCategory.items.map(skill => `
                        <div>
                            <div class="flex justify-between mb-1">
                                <span class="text-sm font-medium">${skill.name}</span>
                                <span class="text-sm text-gray-500">${skill.level}%</span>
                            </div>
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-500 h-2.5 rounded-full" style="width: ${skill.level}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        skillsWrapper.appendChild(skillSlide);
    });
}

// Render Contact Cards
function renderContactCards() {
    const contactContainer = document.querySelector('#contact .grid');
    contacts.forEach(contact => {
        const contactCard = document.createElement('a');
        contactCard.href = contact.link;
        contactCard.target = '_blank';
        contactCard.rel = 'noopener noreferrer';
        contactCard.className = 'bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow';
        contactCard.innerHTML = `
            <div class="text-blue-500 mb-4">
                ${contact.icon}
            </div>
            <h3 class="text-xl font-bold mb-2">${contact.title}</h3>
            <p class="text-gray-600">${contact.username}</p>
        `;
        contactContainer.appendChild(contactCard);
    });
}

// Initialize Swipers
function initializeSwipers() {
    // Projects Swiper
    const projectsSwiper = new Swiper('.projects-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.projects-swiper .swiper-button-next',
            prevEl: '.projects-swiper .swiper-button-prev',
        },
        pagination: {
            el: '.projects-swiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    // Skills Swiper
    const skillsSwiper = new Swiper('.skills-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.skills-swiper .swiper-button-next',
            prevEl: '.skills-swiper .swiper-button-prev',
        },
        pagination: {
            el: '.skills-swiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });
}

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking
            mobileMenu.classList.add('hidden');
        }
    });
});

// Intersection Observer for Active Navigation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // First render all content
    renderProjects();
    renderSkills();
    renderContactCards();
    
    // Then initialize the Swipers
    initializeSwipers();
}); 