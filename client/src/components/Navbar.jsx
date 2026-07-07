import React, { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        setIsOpen(false);
        document.body.style.overflow = '';
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 80; // Header height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const navLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'machinery', label: 'Machinery' },
        { id: 'clients', label: 'Clients' },
        { id: 'careers', label: 'Careers' },
        { id: 'contact', label: 'Contact' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
            <div className="container header-container">
                <a href="#home" className="logo-link" onClick={(e) => handleLinkClick(e, 'home')}>
                    <div className="logo-icon-placeholder" aria-hidden="true">AE</div>
                    <div className="logo-text">
                        <span className="logo-title">AVADHOOT</span>
                        <span className="logo-tagline">Enterprises</span>
                    </div>
                </a>
                
                <nav aria-label="Main Navigation">
                    <ul className={`nav-menu ${isOpen ? 'open' : ''}`} id="nav-menu">
                        {navLinks.map(link => (
                            <li key={link.id}>
                                <a 
                                    href={`#${link.id}`} 
                                    className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                    onClick={(e) => handleLinkClick(e, link.id)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="nav-cta">
                            <a 
                                href="https://wa.me/919623990255?text=Hello%20Avadhoot%20Enterprises,%20I%20would%20like%20to%20discuss%20our%20technical%20schematics%20and%20manufacturing%20requirements." 
                                className="btn btn-whatsapp" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '0.35rem', verticalAlign: 'middle' }}>
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.424 2.5 1.163 3.474l-.756 2.759 2.825-.741a5.727 5.727 0 0 0 2.536.592h.004c3.182 0 5.767-2.587 5.768-5.766.002-3.18-2.585-5.766-5.765-5.766zm-3.214 2.378c.112-.012.228-.027.34-.027.235 0 .341.054.497.426.136.324.469 1.144.51 1.226.04.082.067.177.012.286-.054.109-.081.177-.163.272-.082.096-.172.219-.245.293-.082.083-.167.173-.072.337.095.163.421.693.903 1.123.621.554 1.144.726 1.307.808.163.082.259.068.354-.041.095-.109.408-.476.517-.639.109-.163.218-.136.368-.082.15.054.953.449 1.116.53.163.082.272.123.313.19.041.068.041.395-.123.858-.163.463-.953.844-1.307.871-.354.027-.694-.095-1.552-.436-1.042-.414-1.716-1.485-1.77-1.559-.054-.075-.436-.579-.436-1.117 0-.538.28-.803.381-.908.102-.105.228-.152.228-.152zM12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.19 1.86 5.86L2 22l4.28-1.13C7.91 22.09 9.87 22.75 12 22.75c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.75c-1.89 0-3.66-.57-5.15-1.55l-.37-.24-2.54.67.68-2.48-.26-.41c-1.08-1.68-1.71-3.68-1.71-5.83 0-4.83 3.92-8.75 8.75-8.75s8.75 3.92 8.75 8.75-3.92 8.75-8.75 8.75z"/>
                                </svg>
                                Get a Quote
                            </a>
                        </li>
                    </ul>
                </nav>
                
                <button 
                    className={`hamburger ${isOpen ? 'open' : ''}`} 
                    id="hamburger-toggle" 
                    aria-label="Toggle Menu" 
                    aria-controls="nav-menu" 
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
