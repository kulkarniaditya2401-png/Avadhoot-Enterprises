import React from 'react';

const Clients = () => {
    const clientsList = [
        { name: "Mahindra & Mahindra", industry: "Plant II, Nashik" },
        { name: "ThyssenKrupp India", industry: "Industrial Systems" },
        { name: "SM Auto Stamping Ltd", industry: "Automotive Components" },
        { name: "Reliable Auto Tech", industry: "OEM Auto Parts" },
        { name: "Anish Pharma Equipment", industry: "Pharmaceutical Tooling" },
        { name: "MSS India Ltd", industry: "Electrical & Switchgear" }
    ];

    return (
        <section className="section section-alt" id="clients">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-subtitle">Trusted By</span>
                    <h2 className="section-title">Strategic Client Portfolio</h2>
                </div>
                
                <div className="clients-grid">
                    {clientsList.map((client, index) => (
                        <div className="client-card" key={index}>
                            <span className="client-logo-placeholder">{client.name}</span>
                            <span className="client-industry">{client.industry}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
