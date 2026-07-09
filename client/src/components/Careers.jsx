import React, { useState } from 'react';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'VMC Operator'
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setStatus({ 
            type: 'success', 
            message: `Opening Gmail... Please remember to click the paperclip (attachment) icon to attach your resume file!` 
        });

        // Submit metadata to backend so there is a text record of who applied (no file is sent, saving 100% server storage!)
        const submitData = new FormData();
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
        submitData.append('phone', formData.phone);
        submitData.append('role', formData.role);

        const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

        try {
            await fetch(`${API_BASE_URL}/api/careers`, {
                method: 'POST',
                body: submitData
            });
        } catch (err) {
            console.warn("Unable to save metadata to backend. Continuing with email redirect.", err);
        }

        // Construct pre-filled email draft details
        const subject = encodeURIComponent(`Job Application - ${formData.name} - ${formData.role}`);
        const body = encodeURIComponent(`Hello Avadhoot Enterprises,

I am applying for the ${formData.role} position at Avadhoot Enterprises.

Here are my details:
- Full Name: ${formData.name}
- Email Address: ${formData.email}
- Phone Number: ${formData.phone || 'N/A'}
- Position Applied: ${formData.role}

Please find my resume attached to this email.

Best regards,
${formData.name}`);

        // Detect if user is on a mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isMobile) {
            // Open native Gmail / Mail app on mobile
            const mailtoUrl = `mailto:avadhoot33@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoUrl;
        } else {
            // Open Web-based Gmail Compose on PC in a new tab
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=avadhoot33@gmail.com&su=${subject}&body=${body}`;
            window.open(gmailUrl, '_blank', 'noopener,noreferrer');
        }

        // Reset form inputs
        setFormData({ name: '', email: '', phone: '', role: 'VMC Operator' });
        e.target.reset();
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
                                <div className="form-group" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                                        📎 <strong>Note:</strong> You will be redirected to Gmail to send the application. Please remember to click the <strong>attachment (paperclip)</strong> icon inside Gmail to attach your CV/Resume file.
                                    </p>
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
