import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate the form fields
  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!message.trim()) newErrors.message = 'Message cannot be empty.';

    return newErrors;
  };

  // Handle form submission and EmailJS integration
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Send the form data using EmailJS
    emailjs.send(
      'service_hfyaojq', // Replace with your EmailJS service ID
      'template_r5sgk5w', // Replace with your EmailJS template ID
      formData,
      'Rrhis0K0cBn4nFFen' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Message sent successfully!');
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
        setStatusMessage('Failed to send message. Please try again later.');
      });

    // Reset form fields after submission
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-btn">Send</button>
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </form>
    </div>
  );
}

export default Contact;