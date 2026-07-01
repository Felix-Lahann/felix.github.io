document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    links.forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s));
});
