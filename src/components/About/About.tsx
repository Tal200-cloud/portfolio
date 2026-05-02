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
                I am a detail-oriented software engineer with practical experience in building applications using Python, FastAPI, Flask, NestJS, and React. 
                My technical proficiency allows me to design efficient backend solutions, automate workflows, and support data-driven decision-making processes.
              </p>
              <p>
                Complementing my technical skill set is a solid foundation in accounting and financial management. 
                This unique combination empowers me to contribute effectively to modern, tech-enabled organizations seeking operational efficiency and digital transformation.
              </p>
              
              <div className={styles.aboutDetails}>
                {details.map((detail, index) => (
                  <div key={index} className={styles.detailItem}>
                    <span className={styles.icon}>{detail.icon}</span>
                    <span><strong>{detail.label}:</strong> {detail.value}</span>
                  </div>
                ))}
              </div>
              
              <a href="/Mwakesi Osimel.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
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
