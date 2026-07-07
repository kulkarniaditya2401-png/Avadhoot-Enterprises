import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-grid">
                <div className="hero-content">
                    <span className="hero-cert-tag">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '0.25rem' }}>
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        ISO 9001:2015 Certified
                    </span>
                    <h1 className="hero-title">Precision Machining & <span>Operational Technology</span> Contracts</h1>
                    <p className="hero-subtitle">An ISO 9001:2015 Certified Organization with 15+ years of excellence in ultra-precision manufacturing, delivering high-accuracy engineering components.</p>
                    <div className="hero-ctas">
                        <a 
                            href="https://wa.me/919623990255?text=Hello%20Avadhoot%20Enterprises,%20I%20would%20like%20to%20discuss%20our%20technical%20schematics%20and%20manufacturing%20requirements." 
                            className="btn btn-primary btn-whatsapp" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle' }}>
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.424 2.5 1.163 3.474l-.756 2.759 2.825-.741a5.727 5.727 0 0 0 2.536.592h.004c3.182 0 5.767-2.587 5.768-5.766.002-3.18-2.585-5.766-5.765-5.766zm-3.214 2.378c.112-.012.228-.027.34-.027.235 0 .341.054.497.426.136.324.469 1.144.51 1.226.04.082.067.177.012.286-.054.109-.081.177-.163.272-.082.096-.172.219-.245.293-.082.083-.167.173-.072.337.095.163.421.693.903 1.123.621.554 1.144.726 1.307.808.163.082.259.068.354-.041.095-.109.408-.476.517-.639.109-.163.218-.136.368-.082.15.054.953.449 1.116.53.163.082.272.123.313.19.041.068.041.395-.123.858-.163.463-.953.844-1.307.871-.354.027-.694-.095-1.552-.436-1.042-.414-1.716-1.485-1.77-1.559-.054-.075-.436-.579-.436-1.117 0-.538.28-.803.381-.908.102-.105.228-.152.228-.152zM12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.19 1.86 5.86L2 22l4.28-1.13C7.91 22.09 9.87 22.75 12 22.75c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.75c-1.89 0-3.66-.57-5.15-1.55l-.37-.24-2.54.67.68-2.48-.26-.41c-1.08-1.68-1.71-3.68-1.71-5.83 0-4.83 3.92-8.75 8.75-8.75s8.75 3.92 8.75 8.75-3.92 8.75-8.75 8.75z"/>
                            </svg>
                            Get a Quote via WhatsApp
                        </a>
                        <a href="#services" className="btn btn-secondary">Explore Services</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="placeholder-image" style={{ height: '380px' }}>
                        <span className="placeholder-image-icon">🏭</span>
                        <span className="placeholder-image-label">[Workshop Machinery View]</span>
                        <span className="placeholder-image-dimensions">1200 x 800 (Ideal)</span>
                    </div>
                    <div className="hero-stats-card">
                        <div className="hero-stats-num">15+</div>
                        <div className="hero-stats-text">Years of<br />Excellence</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
