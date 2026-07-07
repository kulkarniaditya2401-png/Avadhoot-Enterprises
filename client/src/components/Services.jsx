import React from 'react';

const Services = () => {
    const servicesList = [
        {
            icon: '💻',
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
            icon: '⚡',
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
            icon: '🎯',
            title: 'EDM-DRL Manufacturing',
            desc: 'EDM Drill manufacturing and engineering operations for high-penetration job work, custom tooling, and deep-hole micro drilling.',
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
