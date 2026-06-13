import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Contact</h4>
            <ul>
              <li><Mail size={16} className={styles.icon} /> talimonosimel@gmail.com</li>
              <li><Phone size={16} className={styles.icon} /> +254 793 692 407</li>
              <li><MapPin size={16} className={styles.icon} /> Nairobi, Kenya</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Follow Me</h4>
            <div className={styles.footerSocialIcons}>
              <a href="https://www.linkedin.com/in/talimon-mwakesi-a52b01337" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Tal200-cloud" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://wa.me/+254793692407" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Talimon Mwakesi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
