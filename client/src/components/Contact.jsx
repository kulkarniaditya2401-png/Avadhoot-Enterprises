import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        // Submit to Express backend first so you have a local JSON file record of all inquiries
        try {
            await fetch(`${API_BASE_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
        } catch (err) {
            console.warn('Unable to log inquiry to server:', err);
        }

        // Construct pre-filled WhatsApp message details
        const messageText = `Hello Avadhoot Enterprises,

I would like to submit an inquiry. Here are my details:
- Full Name: ${formData.name}
- Email Address: ${formData.email}
- Phone Number: ${formData.phone || 'N/A'}
- Company Name: ${formData.company || 'N/A'}

Technical Schematics / Requirements:
${formData.message}

Thank you!`;

        const whatsappUrl = `https://wa.me/919623990255?text=${encodeURIComponent(messageText)}`;

        // Open WhatsApp in a new window/tab
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        setStatus({ type: 'success', message: 'Inquiry details recorded. Opening WhatsApp...' });
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setLoading(false);
    };

    return (
        <section className="section section-alt" id="contact">
            <div className="container">
                <div className="section-title-wrapper">
                    <span className="section-subtitle">Get in Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                </div>

                <div className="contact-grid">
                    <div>
                        <div className="contact-card" style={{ marginBottom: '2rem' }}>
                            <h3>Send an Inquiry</h3>
                            {status.message && (
                                <div className={`form-status ${status.type === 'success' ? 'form-status-success' : 'form-status-error'}`}>
                                    {status.message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="quote-form">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                                    <input 
                                        type="text" 
                                        id="contact-name" 
                                        name="name" 
                                        className="form-input" 
                                        value={formData.name} 
                                        onChange={handleInputChange} 
                                        required 
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                                    <input 
                                        type="email" 
                                        id="contact-email" 
                                        name="email" 
                                        className="form-input" 
                                        value={formData.email} 
                                        onChange={handleInputChange} 
                                        required 
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="contact-phone" 
                                        name="phone" 
                                        className="form-input" 
                                        value={formData.phone} 
                                        onChange={handleInputChange} 
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-company">Company Name</label>
                                    <input 
                                        type="text" 
                                        id="contact-company" 
                                        name="company" 
                                        className="form-input" 
                                        value={formData.company} 
                                        onChange={handleInputChange} 
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="contact-message">Technical Schematics / Requirements *</label>
                                    <textarea 
                                        id="contact-message" 
                                        name="message" 
                                        rows="4" 
                                        className="form-input" 
                                        value={formData.message} 
                                        onChange={handleInputChange} 
                                        required 
                                        disabled={loading}
                                        style={{ resize: 'vertical' }}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                        
                        <div className="contact-card">
                            <h3>Contact Information</h3>
                            <div className="contact-info-list" style={{ marginBottom: '2rem' }}>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">📍</div>
                                    <div className="contact-info-details">
                                        <h4>Registered Office & Workshop</h4>
                                        <p>F-106, MIDC, Ambad, Nashik, Maharashtra, India - 422010</p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">✉️</div>
                                    <div className="contact-info-details">
                                         <h4>Email Address</h4>
                                         <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=avadhoot33@gmail.com&su=Inquiry%20-%20Avadhoot%20Enterprises" target="_blank" rel="noopener noreferrer">avadhoot33@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="contact-info-item">
                                    <div className="contact-info-icon">📋</div>
                                    <div className="contact-info-details">
                                        <h4>GST Identification Number</h4>
                                        <p>27AATFA7228F1Z7</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-person-grid">
                                <div className="contact-person-card">
                                    <div>
                                        <p className="contact-person-name">Manish Deshpande</p>
                                        <p className="contact-person-role">Partner / Engineer</p>
                                    </div>
                                    <a 
                                        href="https://wa.me/919623990255?text=Hello%20Avadhoot%20Enterprises,%20I%20would%20like%20to%20discuss%20our%20technical%20schematics%20and%20manufacturing%20requirements." 
                                        className="btn btn-whatsapp" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                                    >
                                        Chat
                                    </a>
                                </div>
                                <div className="contact-person-card">
                                    <div>
                                        <p className="contact-person-name">Abhijeet Patki</p>
                                        <p className="contact-person-role">Partner / Engineer</p>
                                    </div>
                                    <a 
                                        href="https://wa.me/919689290090?text=Hello%20Avadhoot%20Enterprises,%20I%20would%20like%20to%20discuss%20our%20technical%20schematics%20and%20manufacturing%20requirements." 
                                        className="btn btn-whatsapp" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ padding: '0.5rem 0.75rem', fontSize: '0.85rem' }}
                                    >
                                        Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="map-wrapper" style={{ minHeight: '440px', display: 'flex', flexDirection: 'column' }}>
                            <iframe 
                                title="Avadhoot Enterprises Workshop Location"
                                src="https://maps.google.com/maps?q=Avadhoot%20Enterprises%20(Precision%20Machining%2C%20Machined%20Components%2C%20Mechanical%20parts%2CVMC%2C%20Wire%20Cut%2C%20Assembly)%2C%20F-106%2C%20MIDC%20Ambad%2C%20Nashik%2C%20Maharashtra%20422010&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                                width="100%" 
                                height="370" 
                                style={{ border: 0, display: 'block', flexGrow: 1 }} 
                                allowFullScreen="" 
                                loading="lazy"
                            ></iframe>
                            <div style={{ padding: '0.75rem', backgroundColor: 'var(--bg-light-1)', borderTop: '1px solid var(--bg-light-3)', display: 'flex', justifyContent: 'center' }}>
                                <a 
                                    href="https://maps.app.goo.gl/VG2zn9GRLFCnNn6n7?g_st=aw" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="btn btn-primary"
                                    style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}
                                >
                                    Open in Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
