import React from 'react';

const About = () => {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-subtitle">Our Legacy</span>
                    <h2 className="section-title">About Avadhoot Enterprises</h2>
                </div>
                <div className="about-grid">
                    <div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '1.5rem', fontWeight: 500 }}>
                            Avadhoot Enterprises is run by a dedicated team of qualified engineers possessing more than 25 years of extensive industry experience in Automobiles, Engineering Goods, and Switchgear manufacturing.
                        </p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Established in MIDC Ambad, Nashik, we have built a reputation for providing micro-tolerance mechanical tooling and operational technology contracts. We strictly adhere to our ISO 9001:2015 certification guidelines to offer peerless manufacturing services.
                        </p>
                        <div className="about-features">
                            <div className="about-feature-item">
                                <div className="about-feature-icon">🛠️</div>
                                <div>
                                    <h3 className="about-feature-title">High Engineering Expertise</h3>
                                    <p className="about-feature-desc">Managed by engineers with 25+ years of shopfloor and assembly experience.</p>
                                </div>
                            </div>
                            <div className="about-feature-item">
                                <div className="about-feature-icon">📐</div>
                                <div>
                                    <h3 className="about-feature-title">Quality Assurance</h3>
                                    <p className="about-feature-desc">Certified ISO 9001:2015 guidelines implemented throughout production cycles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="placeholder-image" style={{ height: '380px' }}>
                            <span className="placeholder-image-icon">🔩</span>
                            <span className="placeholder-image-label">[Precision VMC Copper/Turned Parts Component Samples]</span>
                            <span className="placeholder-image-dimensions">800 x 600 (Ideal)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
