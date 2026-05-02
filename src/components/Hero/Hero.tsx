'use client';

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Mwakesi Talimon';
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      setDisplayText(prev => {
        if (isDeleting) {
          if (prev === '') {
            setIsDeleting(false);
            return '';
          }
          return prev.slice(0, -1);
        } else {
          if (prev === fullText) {
            setTimeout(() => setIsDeleting(true), 2000);
            return prev;
          }
          return fullText.slice(0, prev.length + 1);
        }
      });
      
      setTypSpeed(isDeleting ? 100 : 150);
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className="fade-left">
            <h1 className={styles.heroTitle}>
              Hi, I'm <span className={styles.typing}>{displayText}<span className={styles.cursor}>|</span></span>
            </h1>
            <h2 className={styles.heroSubtitle}>Software Engineer & Accountant</h2>
            <p className={styles.heroDescription}>
              Bridging the gap between financial logic and software engineering. 
              I build scalable, data-driven applications that solve real business problems.
            </p>
            <div className={styles.heroButtons}>
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
        </div>
        <div className="fade-right">
          <div className={styles.imageWrapper}>
            <img src="/talimon.jpeg" alt="Talimon Mwakesi" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
