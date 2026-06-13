'use client';

import React from 'react';
import styles from './Projects.module.css';

const projectsData = [
  {
    title: 'Ecommerce SaaS Product',
    description: 'A robust platform designed to seamlessly connect retailers with producers and wholesalers, optimizing the B2B supply chain.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'fullstack',
    tech: ['Laravel', 'MySQL', 'Next.js'],
  },
  {
    title: 'Property Management SaaS Product',
    description: 'Comprehensive property management software tailored for rental houses, streamlining tenant billing, maintenance requests, and financial reporting.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'fullstack',
    tech: ['Laravel', 'MySQL', 'Next.js'],
  },
  {
    title: 'GWU Attendance System',
    description: 'Eliminated paper-based tracking errors by implementing a digital attendance system with automated SQLite reporting and analytics for administration.',
    image: '/gwu.png',
    category: 'fullstack',
    tech: ['Flask', 'SQLite3', 'JavaScript'],
  },
  {
    title: 'Custom ERP System',
    description: 'Streamlined business operations by integrating inventory and HR modules into a single NestJS application, resulting in improved workflow efficiency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'fullstack',
    tech: ['NestJS', 'MySQL', 'PHP'],
  },
  {
    title: 'Medical App',
    description: 'A secure containerized application for patient records. Features role-based access control to ensure data privacy and compliance.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'fullstack',
    tech: ['Docker', 'FastAPI', 'Postgres', 'React'],
  },
  {
    title: 'Flower Shop Odoo Module',
    description: 'Developed a custom Odoo module to handle perishable inventory logic, ensuring accurate stock levels and payment integration for fresh flower delivery.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'fullstack',
    tech: ['Odoo 16', 'Python', 'XML'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className="section-title slide-up">Featured Projects</h2>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className={`${styles.projectCard} fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.tech.map((tech, tIndex) => (
                    <span key={tIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
