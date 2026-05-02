import React from 'react';
import { Code, Server, Wrench, Terminal, Cpu, Database, Layout, PenTool, GitBranch } from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend & Design',
      icon: <Layout size={24} />,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'UI/UX & Canva'],
    },
    {
      title: 'Backend & DevOps',
      icon: <Server size={24} />,
      skills: ['Python', 'FastAPI', 'Flask', 'NestJS', 'SQL (Pg/My)', 'Docker'],
    },
    {
      title: 'Tools & Others',
      icon: <Wrench size={24} />,
      skills: ['Git & GitHub', 'ClickUp', 'Office Suite', 'C Programming', 'Accounting Sys'],
    },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <h2 className="section-title slide-up">Technical Arsenal</h2>
        <div className={styles.skillsContainer}>
          {skillCategories.map((category, index) => (
            <div key={index} className={`${styles.skillCategory} fade-in`}>
              <h3>
                <span className={styles.icon}>{category.icon}</span>
                {category.title}
              </h3>
              <div className={styles.skillsGrid}>
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex} className={styles.skillBadge}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
