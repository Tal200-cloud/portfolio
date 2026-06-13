import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Yada Innovations, Nairobi',
      date: 'June 2025 – Present',
      points: [
        'Architected and developed comprehensive SaaS products, notably e-commerce platforms and custom property management software.',
        'Spearheaded the development, deployment, and maintenance of robust RESTful APIs and conducted comprehensive code reviews.',
        'Implemented CI/CD pipelines to streamline deployment processes, utilizing Docker environments to ensure high availability.',
        'Engineered an Enterprise Resource Planning (ERP) system using Odoo to optimize customer relationship and employee management workflows.',
        'Designed server-side and client-side logic for specialized industry solutions, including medical applications, church management software, and school attendance systems.'
      ],
    },
    {
      title: 'Finance Intern',
      company: 'Mombasa Continental Resort, Mombasa',
      date: 'May 2024 – Jul 2024',
      points: [
        'Managed comprehensive treasury duties, including daily bank reconciliation, financial record analysis, and accurate reporting.',
        'Gained deep domain expertise in revenue management, accounts payable/receivable, and food & beverage control, providing critical business logic context for developing financial software.',
        'Handled cashiering, centralized purchasing, and store inventory operations (receiving, issuing, and stock taking).'
      ],
    },
    {
      title: 'Sales & Shop Attendant',
      company: 'Danpay Retail Shop, Mombasa',
      date: 'Seasonal (2022 – 2024)',
      points: [
        'Drove a 30% increase in retail sales through strategic customer engagement and efficient service delivery.',
        'Streamlined internal bookkeeping and purchasing/supplier selection processes, reducing operational friction.',
        'Resolved product obsolescence issues and managed daily M-Pesa (mobile money) transactions and reconciliations.'
      ],
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <h2 className="section-title slide-up">Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={`${styles.timelineItem} slide-up`}>
              <div className={styles.timelineDot}>
                <Briefcase size={20} />
              </div>
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3>{exp.title}</h3>
                  <div className={styles.timelineDate}>
                    <Calendar size={16} />
                    <span>{exp.date}</span>
                  </div>
                </div>
                <h4 className={styles.company}>{exp.company}</h4>
                <ul className={styles.pointsList}>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
