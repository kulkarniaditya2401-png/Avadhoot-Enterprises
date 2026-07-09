import React, { useState } from 'react';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'VMC Operator'
    });
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!file) {
            setStatus({ type: 'error', message: 'Please upload your Resume/CV file.' });
            return;
        }

        setLoading(true);
        setStatus({ type: '', message: '' });

        const submitData = new FormData();
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
        submitData.append('phone', formData.phone);
        submitData.append('role', formData.role);
        submitData.append('resume', file);

        const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        try {
            const response = await fetch(`${API_BASE_URL}/api/careers`, {
                method: 'POST',
                body: submitData
            });

            const result = await response.json();
            if (response.ok && result.success) {
                setStatus({ type: 'success', message: result.message });
                setFormData({ name: '', email: '', phone: '', role: 'VMC Operator' });
                setFile(null);
                // Reset file input
                e.target.reset();
            } else {
                setStatus({ type: 'error', message: result.message || 'Error submitting application.' });
            }
        } catch (err) {
            console.error('Error submitting careers form:', err);
            setStatus({ type: 'error', message: 'Unable to contact server. Please apply via WhatsApp or Email.' });
        } finally {
            setLoading(false);
        }
    };

    const rolesList = ['VMC Operator', 'CNC Turner', 'EDM Machining Expert', 'Tool & Die Engineer'];

    return (
        <section className="section" id="careers">
            <div className="container">
                <div className="careers-box">
                    <div className="careers-content-grid">
                        <div className="careers-info">
                            <span className="section-subtitle" style={{ marginBottom: '0.5rem' }}>Careers</span>
                            <h3>Join Our Engineering Team</h3>
                            <p>We are always on the lookout for skilled, qualified engineers, VMC/CNC operators, and machinists who are passionate about precision manufacturing and operational technology. Send your resume or details directly to our hiring team.</p>
                            
                            <h4 className="careers-roles-title">Active Opportunities</h4>
                            <div className="careers-roles" style={{ marginBottom: '2.5rem' }}>
                                {rolesList.map((role, idx) => (
                                    <span className="role-badge" key={idx}>{role}</span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '320px' }}>
                                <a href="mailto:avadhoot33@gmail.com?subject=Job%20Application%20-%20Avadhoot%20Enterprises" className="btn btn-primary" style={{ width: '100%' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '0.25rem' }}>
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                    Apply via Email
                                </a>
                                <a 
                                    href="https://wa.me/919623990255?text=Hello%20Avadhoot%20Enterprises,%20I%20am%20interested%20in%20career%20opportunities%20and%20would%20like%20to%20send%20my%20resume." 
                                    className="btn btn-whatsapp" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{ width: '100%' }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ verticalAlign: 'middle', marginRight: '0.25rem' }}>
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.424 2.5 1.163 3.474l-.756 2.759 2.825-.741a5.727 5.727 0 0 0 2.536.592h.004c3.182 0 5.767-2.587 5.768-5.766.002-3.18-2.585-5.766-5.765-5.766zm-3.214 2.378c.112-.012.228-.027.34-.027.235 0 .341.054.497.426.136.324.469 1.144.51 1.226.04.082.067.177.012.286-.054.109-.081.177-.163.272-.082.096-.172.219-.245.293-.082.083-.167.173-.072.337.095.163.421.693.903 1.123.621.554 1.144.726 1.307.808.163.082.259.068.354-.041.095-.109.408-.476.517-.639.109-.163.218-.136.368-.082.15.054.953.449 1.116.53.163.082.272.123.313.19.041.068.041.395-.123.858-.163.463-.953.844-1.307.871-.354.027-.694-.095-1.552-.436-1.042-.414-1.716-1.485-1.77-1.559-.054-.075-.436-.579-.436-1.117 0-.538.28-.803.381-.908.102-.105.228-.152.228-.152zM12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.19 1.86 5.86L2 22l4.28-1.13C7.91 22.09 9.87 22.75 12 22.75c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.75c-1.89 0-3.66-.57-5.15-1.55l-.37-.24-2.54.67.68-2.48-.26-.41c-1.08-1.68-1.71-3.68-1.71-5.83 0-4.83 3.92-8.75 8.75-8.75s8.75 3.92 8.75 8.75-3.92 8.75-8.75 8.75z"/>
                                    </svg>
                                    Apply via WhatsApp
                                </a>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem', textAlign: 'center' }}>
                                    Or email your CV directly to:<br />
                                    <strong style={{ color: 'var(--primary-light)' }}>avadhoot33@gmail.com</strong>
                                </p>
                            </div>
                        </div>
                        <div className="career-form-card">
                            <h4>Submit Application</h4>
                            {status.message && (
                                <div className={`form-status ${status.type === 'success' ? 'form-status-success' : 'form-status-error'}`}>
                                    {status.message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} className="quote-form">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="career-name">Full Name *</label>
                                    <input 
                                        type="text" 
                                        id="career-name" 
                                        name="name" 
                                        className="form-input" 
                                        value={formData.name} 
                                        onChange={handleInputChange} 
                                        required 
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="career-email">Email Address *</label>
                                    <input 
                                        type="email" 
                                        id="career-email" 
                                        name="email" 
                                        className="form-input" 
                                        value={formData.email} 
                                        onChange={handleInputChange} 
                                        required 
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="career-phone">Phone Number</label>
                                    <input 
                                        type="tel" 
                                        id="career-phone" 
                                        name="phone" 
                                        className="form-input" 
                                        value={formData.phone} 
                                        onChange={handleInputChange} 
                                        disabled={loading}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="career-role">Applied Position *</label>
                                    <select 
                                        id="career-role" 
                                        name="role" 
                                        className="form-input" 
                                        value={formData.role} 
                                        onChange={handleInputChange}
                                        disabled={loading}
                                        style={{ backgroundColor: '#fff' }}
                                    >
                                        {rolesList.map((role, idx) => (
                                            <option key={idx} value={role}>{role}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="career-resume">Upload CV (PDF, DOCX) *</label>
                                    <input 
                                        type="file" 
                                        id="career-resume" 
                                        accept=".pdf,.doc,.docx" 
                                        className="form-input" 
                                        onChange={handleFileChange} 
                                        required 
                                        disabled={loading}
                                        style={{ padding: '0.5rem' }}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }} disabled={loading}>
                                    {loading ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
