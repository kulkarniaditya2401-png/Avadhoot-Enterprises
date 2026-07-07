/**
 * Avadhoot Enterprises - Interactive Website Features
 * 1. Sticky Navigation Header Shadow & Sizing
 * 2. Mobile Hamburger Menu Toggle (Accessible)
 * 3. Smooth Scroll Navigation
 * 4. Active Section Highlighting on Scroll (Intersection Observer)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- STICKY NAV SYSTEM ---
    const header = document.getElementById('header');
    const scrollThreshold = 50;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once in case user loads page scrolled down


    // --- MOBILE HAMBURGER MENU ---
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        const isOpen = navMenu.classList.toggle('open');
        hamburgerToggle.classList.toggle('open');
        hamburgerToggle.setAttribute('aria-expanded', isOpen);
        
        // Prevent body scrolling when mobile menu is active
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const closeMenu = () => {
        navMenu.classList.remove('open');
        hamburgerToggle.classList.remove('open');
        hamburgerToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    hamburgerToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a link inside it
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside of it on mobile
    document.addEventListener('click', (event) => {
        const isClickInside = header.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('open')) {
            closeMenu();
        }
    });


    // --- ACTIVE LINK SELECTION SYSTEM (INTERSECTION OBSERVER) ---
    const sections = document.querySelectorAll('section, main');
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the active middle portion
        threshold: 0
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    const href = link.getAttribute('href').replace('#', '');
                    if (href === id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));


    // --- ACCESSIBILITY FOR ESCAPE KEY ---
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu.classList.contains('open')) {
            closeMenu();
            hamburgerToggle.focus();
        }
    });
});
