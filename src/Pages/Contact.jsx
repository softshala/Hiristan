import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    description: '',
    lead_source: 'Website', // Fixed value set to "Website"
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: '', message: '' });

  const validateField = (name, value) => {
    const newErrors = {};
    if (name === 'first_name' && !value.trim()) newErrors.first_name = 'First name is required';
    if (name === 'last_name' && !value.trim()) newErrors.last_name = 'Last name is required';
    if (name === 'email') {
      if (!value.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = 'Email is invalid';
    }
    if (name === 'phone') {
      if (!value.trim()) newErrors.phone = 'Phone is required';
      else if (!/^\+?[\d\s-]{10,}$/.test(value)) newErrors.phone = 'Phone number is invalid';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, ...validateField(name, value) });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys({ first_name: '', last_name: '', email: '', phone: '' }).forEach((key) => {
      const fieldErrors = validateField(key, formData[key]);
      Object.assign(newErrors, fieldErrors);
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Submit the form directly to Salesforce
    e.target.submit();
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: '', message: '' });
  };

  // Simulate success/failure based on form submission (no fetch, relies on redirect)
  useEffect(() => {
    if (isSubmitting) {
      // Since we're using a direct form submission, we can't directly catch the response
      // The retURL will handle the success case; errors will need manual handling
      setTimeout(() => {
        setIsSubmitting(false);
        setModal({ isOpen: true, type: 'success', message: 'Form submitted successfully! Redirecting...' });
      }, 1000); // Simulate a delay for user feedback
    }
  }, [isSubmitting]);

  return (
    <div className="contact-container">
      <div className="contact-left">
        <button className="contact-badge">Contact Us</button>
        <h1 className="contact-heading">Let's Get In Touch.</h1>
        
        <p className="contact-email-text">
          Or just reach out manually to <a href="mailto:jobs@hiristan.com" className="contact-email-link">jobs@hiristan.com</a>
        </p>
      </div>

      <div className="contact-right">
        <form
          className="contact-form"
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DNS000002uA8Q"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="oid" value="00DNS000002uA8Q" />
          <input type="hidden" name="retURL" value="https://www.hiristan.com" />
          <input type="hidden" name="lead_source" value="Website" /> {/* Hidden input with fixed value */}

          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
                className={errors.first_name ? 'error' : formData.first_name ? 'valid' : ''}
                placeholder="Enter your full name..."
                maxLength="40"
                size="20"
              />
              {errors.first_name && <span className="error-message">{errors.first_name}</span>}
            </div>
            <div className="contact-field">
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
                className={errors.last_name ? 'error' : formData.last_name ? 'valid' : ''}
                placeholder="Enter your last name..."
                maxLength="80"
                size="20"
              />
              {errors.last_name && <span className="error-message">{errors.last_name}</span>}
            </div>
          </div>

          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : formData.email && !errors.email ? 'valid' : ''}
                placeholder="Enter your email address..."
                maxLength="80"
                size="20"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="contact-field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company..."
                maxLength="40"
                size="20"
              />
            </div>
          </div>

          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : formData.phone && !errors.phone ? 'valid' : ''}
                placeholder="Enter your phone number..."
                maxLength="40"
                size="20"
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            {/* Removed lead_source field entirely as it's now hidden */}
          </div>

          <div className="contact-message">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter your main text here..."
              maxLength="300"
            />
            <div className="contact-char-limit">{formData.description.length}/300</div>
          </div>

          <button type="submit" disabled={isSubmitting} className="contact-submit">
            {isSubmitting ? <span className="spinner"></span> : 'Submit'}
          </button>
        </form>
      </div>

      {modal.isOpen && (
        <div className="modal-overlay">
          <div className={`modal ${modal.type}`}>
            <p>{modal.message}</p>
            <button onClick={closeModal} className="modal-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

