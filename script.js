// Typewriter Effect
const roles = ["Android App Developer", "Flutter Developer", "Web Developer", "Python Developer"];
let roleIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById('typewriter');

function typeWriter() {
    if (charIndex < roles[roleIndex].length) {
        typewriterElement.innerHTML += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    } else {
        setTimeout(partialErase, 2000);
    }
}

function partialErase() {
    if (charIndex > roles[roleIndex].length - 5) {
        typewriterElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(partialErase, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeWriter, 500);
    }
}

typeWriter();

// Active Section Observer
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (`#${entry.target.id}` === link.getAttribute('href')) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => observer.observe(section));

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    const isExpanded = navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
});

// Close menu on click outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', false);
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hide Loading Animation
window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
});
