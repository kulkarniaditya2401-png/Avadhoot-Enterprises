import React from 'react';

const Clients = () => {
    const clientsList = [
        { name: "Anish Pharmaceuticals", industry: "Pharmaceutical Tooling" },
        { name: "DG Connect", industry: "Industrial Automation" },
        { name: "Multitech Engg", industry: "Precision Machining" },
        { name: "Nikash CNC Engg Pvt Ltd", industry: "CNC Components" },
        { name: "Echoflo Industries", industry: "Flow Control Systems" },
        { name: "ProLaser Sales & Private Ltd", industry: "Laser Processing" },
        { name: "SMP Auto", industry: "Automotive Assemblies" },
        { name: "Sinner Ure-Plas Pvt.Ltd", industry: "Polyurethane Products" },
        { name: "Nashtech Engg", industry: "Tooling & Jig Work" },
        { name: "Oriental Engg", industry: "Heavy Machine Tooling" },
        { name: "Marsman India Ltd", industry: "Crushing & Screening" },
        { name: "DNA Engg", industry: "Precision Components" },
        { name: "Metacarb Engg", industry: "Carbide Tooling" },
        { name: "Reliable Auto", industry: "OEM Auto Parts" }
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
