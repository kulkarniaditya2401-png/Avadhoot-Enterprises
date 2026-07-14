import React from 'react';

const Clients = () => {
    const clientsList = [
        "Anish Pharmaceuticals",
        "DG Connect",
        "Multitech Engg",
        "Nikash CNC Engg Pvt Ltd",
        "Echoflo Industries",
        "ProLaser Sales & Private Ltd",
        "SMP Auto",
        "Sinner Ure-Plas Pvt.Ltd",
        "Nashtech Engg",
        "Oriental Engg",
        "Marsman India Ltd",
        "DNA Engg",
        "Metacarb Engg",
        "Reliable Auto"
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
                            <span className="client-logo-placeholder">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clients;
