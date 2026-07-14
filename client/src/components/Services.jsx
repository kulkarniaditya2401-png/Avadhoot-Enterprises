import React from 'react';

const Services = () => {
    const servicesList = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="2" width="6" height="4" rx="1" />
                    <path d="M12 6v8" />
                    <circle cx="12" cy="18" r="4" strokeDasharray="3 3" />
                    <path d="M10 14h4l-2 3-2-3z" fill="currentColor" />
                    <path d="M4 18h2" />
                    <path d="M18 18h2" />
                    <path d="M12 21v2" />
                </svg>
            ),
            title: 'VMC / CNC Operations',
            desc: 'High-precision Vertical Machining and CNC Turning operations tailored for high-accuracy Ferrous and Non-Ferrous components.',
            capabilities: [
                'Complex geometry milling',
                'Ferrous & Non-Ferrous turning',
                'Batch production with high consistency',
                'Micro-tolerance profiles'
            ]
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="6" width="16" height="12" rx="1" />
                    <line x1="11" y1="2" x2="11" y2="22" stroke="currentColor" strokeWidth="2.5" />
                    <line x1="4" y1="12" x2="11" y2="12" stroke="var(--secondary)" strokeWidth="1.5" strokeDasharray="2 2" />
                    <path d="M11 12l3-3m-3 0l2 2m-2-5l3 1" stroke="var(--secondary)" strokeWidth="1.5" />
                </svg>
            ),
            title: 'EDM-WC CNC Wire Cut',
            desc: 'CNC Wire Electrical Discharge Machining (EDM-WC) operations designed for critical micro-machining with extreme surface finish tolerance.',
            capabilities: [
                'Intricate profile cutting',
                'Hardened steel dies & punches',
                'Exceptional surface finish',
                'Minimal material waste cutting'
            ]
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="16" width="16" height="5" rx="1" />
                    <ellipse cx="12" cy="16" rx="3" ry="1.5" stroke="var(--secondary)" />
                    <path d="M12 2v12" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M12 14l-2 2h4l-2-2z" fill="var(--secondary)" stroke="none" />
                    <path d="M7 6h2" />
                    <path d="M7 10h2" />
                </svg>
            ),
            title: 'EDM-DRL Drilling Operations',
            desc: 'EDM Drill operations and engineering services for high-penetration job work, custom tooling, and deep-hole micro drilling.',
            capabilities: [
                'Deep micro-hole drilling',
                'Custom tooling development',
                'High-penetration metal drilling',
                'Die electrode preparations'
            ]
        }
    ];

    return (
        <section className="section section-alt" id="services">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-subtitle">What We Do</span>
                    <h2 className="section-title">Services & Capabilities</h2>
                </div>
                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-header">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.desc}</p>
                            </div>
                            <div className="service-capabilities">
                                <h4 className="service-cap-title">Specialization</h4>
                                <ul className="service-cap-list">
                                    {service.capabilities.map((cap, i) => (
                                        <li key={i}>{cap}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
