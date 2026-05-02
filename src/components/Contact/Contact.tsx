'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Send, Loader2 } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/talimonosimel@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section-title slide-up">Get In Touch</h2>
        <div className={styles.contactContent}>
          <div className="fade-left">
            <div className={styles.contactInfo}>
              <h3>Let's Talk</h3>
              <p>Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
              
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <Mail size={20} className={styles.icon} />
                  <span>talimonosimel@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={20} className={styles.icon} />
                  <span>+254 (793)-692-407</span>
                </div>
                <div className={styles.contactItem}>
                  <MapPin size={20} className={styles.icon} />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/talimon-mwakesi-a52b01337" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://wa.me/qr/7MADDXZXMDE7J1" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                  <MessageCircle size={20} />
                </a>
                <a href="https://github.com/Tal200-cloud" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="fade-right">
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className={styles.formGroup}>
                <input type="text" name="subject" placeholder="Subject" />
              </div>
              <div className={styles.formGroup}>
                <textarea name="message" placeholder="Your Message" required rows={5}></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={20} className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && <p className={styles.successMsg}>{message}</p>}
              {status === 'error' && <p className={styles.errorMsg}>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
