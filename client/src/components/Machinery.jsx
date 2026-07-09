import React, { useState, useEffect } from 'react';
import workshopImg from '../assets/workshop.png';

const Machinery = () => {
    const [machinery, setMachinery] = useState([]);
    const [pmi, setPmi] = useState([]);
    const [loading, setLoading] = useState(true);

    const fallbackMachinery = [
        { id: 1, name: "Vertical Machining Centres (VMC)", make: "BFW", application: "High-Accuracy Milling & Machining" },
        { id: 2, name: "EDM Wire Cut Machines (EDM-WC)", make: "REIPL", application: "Critical Micro-Machining & Wire Cut" },
        { id: 3, name: "EDM Drill Machine (EDM-DRL)", make: "REIPL", application: "High Penetration Micro Drilling" },
        { id: 4, name: "CNC Turning Machine", make: "Ace", application: "Precision Turning & Threading Operations" },
        { id: 5, name: "Lathe Machine", make: "General Asset", application: "Standard Turning & Metal Facing Work" },
        { id: 6, name: "Surface Grinder", make: "General Asset", application: "Flat Surface Micro Finishing" },
        { id: 7, name: "Drill Machines", make: "General Asset", application: "General Drilling and Tapping Work" }
    ];

    const fallbackPmi = [
        { id: 1, name: "Digital Height Gauge", description: "High precision dimensional measurements", range: "0 - 600 mm" },
        { id: 2, name: "Surface Plate", description: "Flatness verification baseline reference", range: "Grade A" },
        { id: 3, name: "Digital Verniers", description: "Standard outer/inner depth measurements", range: "200 / 300 mm" },
        { id: 4, name: "Micrometres", description: "Precision thickness/diameter gauges", range: "25 / 50 / 75 mm" },
        { id: 5, name: "Dial Gauges", description: "Runout and profile deviation testing", range: "0 - 0.2 mm" },
        { id: 6, name: "Thread, Plug, Radius & Bore", description: "Standardized go/no-go quality checks", range: "Full Metric Set" }
    ];

    useEffect(() => {
        const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const fetchData = async () => {
            try {
                // Fetch machinery
                const machRes = await fetch(`${API_BASE_URL}/api/machinery`);
                if (machRes.ok) {
                    const machData = await machRes.json();
                    setMachinery(machData);
                } else {
                    setMachinery(fallbackMachinery);
                }

                // Fetch PMI
                const pmiRes = await fetch(`${API_BASE_URL}/api/pmi`);
                if (pmiRes.ok) {
                    const pmiData = await pmiRes.json();
                    setPmi(pmiData);
                } else {
                    setPmi(fallbackPmi);
                }
            } catch (err) {
                console.warn("Express backend offline. Falling back to local data.", err);
                setMachinery(fallbackMachinery);
                setPmi(fallbackPmi);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="section" id="machinery">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-subtitle">Workshop Inventory</span>
                    <h2 className="section-title">Machinery & Assets</h2>
                </div>

                <div className="machinery-intro-grid" style={{ marginBottom: '3.5rem' }}>
                    <div className="machinery-intro-text">
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '1rem', fontWeight: '500' }}>
                            Our state-of-the-art production facility in MIDC Ambad, Nashik is equipped with advanced vertical machining centers (VMC), wire-cut EDM machines, and heavy-duty precision tooling assets.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                            Operating under ISO 9001:2015 guidelines, our climate-controlled workshop facilitates high-tolerance manufacturing of precision machined components, heavy tooling assemblies, and micro-machining jobs for global corporate industries.
                        </p>
                    </div>
                    <div className="machinery-intro-image">
                        <img 
                            src={workshopImg} 
                            alt="Avadhoot Enterprises Workshop Floor VMC Machining Center" 
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'var(--border-radius-md)',
                                boxShadow: 'var(--shadow-md)',
                                border: '1px solid var(--bg-light-3)',
                                transition: 'var(--transition-normal)'
                            }}
                            className="workshop-photo"
                        />
                    </div>
                </div>
                
                <div className="table-responsive">
                    <table className="machinery-table" aria-label="Machinery and Assets of Avadhoot Enterprises">
                        <thead>
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">Machine Description</th>
                                <th scope="col">Manufacturer / Make</th>
                                <th scope="col">Application Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {machinery.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{(index + 1).toString().padStart(2, '0')}</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <span className={item.make !== 'General Asset' ? 'badge-brand' : ''}>
                                            {item.make}
                                        </span>
                                    </td>
                                    <td>{item.application}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ marginTop: '5rem' }}>
                    <div className="section-title-wrapper" style={{ marginBottom: '2.5rem' }}>
                        <span className="section-subtitle" style={{ color: 'var(--primary-light)' }}>Quality Control</span>
                        <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Precision Measuring Instruments (PMI)</h3>
                    </div>
                    
                    <div className="pmi-grid">
                        {pmi.map((instrument) => (
                            <div className="pmi-card" key={instrument.id}>
                                <div className="pmi-info">
                                    <h4>{instrument.name}</h4>
                                    <p>{instrument.description}</p>
                                </div>
                                <span className="pmi-range">{instrument.range}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Machinery;
