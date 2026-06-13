import React from 'react';
import { User, Mail, MapPin, GraduationCap, Award } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const details = [
    { icon: <User size={20} />, label: 'Name', value: 'Talimon Mwakesi' },
    { icon: <Mail size={20} />, label: 'Email', value: 'talimonosimel@gmail.com' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Nairobi, Kenya' },
    { icon: <GraduationCap size={20} />, label: 'Education', value: 'Bachelor of Commerce (Accounting)' },
    { icon: <Award size={20} />, label: 'Certification', value: 'HarvardX CS50' },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2 className="section-title slide-up">About Me</h2>
        <div className={styles.aboutContent}>
          <div className="fade-right">
            <div className={styles.aboutText}>
              <h3>Who I Am</h3>
              <p>
                I am a results-driven Full-Stack Software Engineer specializing in the development of scalable SaaS products, including e-commerce platforms and comprehensive property management software. With a deep proficiency in modern frameworks like React, Next.js, Laravel, and FastAPI, I build robust, high-availability applications supported by streamlined DevOps practices.
              </p>
              <p>
                What sets me apart is my unique foundation in commerce and accounting. This dual expertise makes me highly adept at translating complex business requirements such as ERP and financial workflows into efficient, automated technical solutions. I am deeply committed to a detail-oriented approach and seamless cross-functional collaboration, ultimately driving tangible business performance through innovative system design.
              </p>
              
              <div className={styles.aboutDetails}>
                {details.map((detail, index) => (
                  <div key={index} className={styles.detailItem}>
                    <span className={styles.icon}>{detail.icon}</span>
                    <span><strong>{detail.label}:</strong> {detail.value}</span>
                  </div>
                ))}
              </div>
              
              <a href="/Mwakesi_Osimel_CV.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
