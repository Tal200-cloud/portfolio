document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference or use dark as default
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky header on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.dataset.filter;
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const spinner = submitBtn.querySelector('.loading-spinner');

            // Show loading state
            btnText.style.display = 'none';
            spinner.style.display = 'inline-block';
            submitBtn.disabled = true;
        });
    }

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-up, .fade-left, .fade-right');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Enhanced animations on scroll
    const enhancedAnimateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-up, .fade-left, .fade-right');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.8;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
                
                // Animate skill bars when they become visible
                if (element.classList.contains('skill-item') || element.closest('.skills-container')) {
                    const skillBars = element.querySelectorAll('.skill-level');
                    skillBars.forEach(bar => {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 300);
                    });
                }
            }
        });
    };

    // Initialize enhanced animations
    window.addEventListener('scroll', enhancedAnimateOnScroll);
    enhancedAnimateOnScroll();

    // Add smooth hover effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add typing effect to hero title (optional)
    function typeWriterEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            let i = 0;
            
            function typeChar() {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeChar, 50);
                }
            }
            
            // Start typing effect after a short delay
            setTimeout(typeChar, 500);
        }
    }

    // Uncomment the line below if you want typing effect
    // typeWriterEffect();

    // Enhanced form submission with visual feedback
    const enhancedContactForm = document.querySelector('.contact-form');
    if (enhancedContactForm) {
        enhancedContactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission for demo
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const spinner = submitBtn.querySelector('.loading-spinner');
            
            // Show loading state with enhanced animation
            btnText.style.display = 'none';
            spinner.style.display = 'inline-block';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.8';
            submitBtn.style.transform = 'scale(0.95)';
            
            // Simulate form submission (replace with actual form submission)
            setTimeout(() => {
                // Reset button state
                btnText.style.display = 'inline';
                spinner.style.display = 'none';
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.style.transform = '';
                
                // Show success message
                const successMsg = document.createElement('div');
                successMsg.className = 'form-success';
                successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
                successMsg.style.cssText = `
                    background: var(--success-color);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 6px;
                    margin-top: 15px;
                    text-align: center;
                    animation: fadeIn 0.5s ease;
                `;
                
                this.appendChild(successMsg);
                
                // Remove message after 5 seconds
                setTimeout(() => {
                    successMsg.remove();
                }, 5000);
                
                // Reset form
                this.reset();
                
                // Add focus to first input after submission
                const firstInput = this.querySelector('input');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 2000);
        });
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.backgroundPosition = `center ${rate}px`;
            
            // Add slight fade effect on scroll
            const opacity = 1 - (scrolled * 0.001);
            heroSection.style.opacity = Math.max(0.7, opacity);
        }
    });

    // Initialize tooltips for skill percentages
    document.querySelectorAll('.skill-info span:last-child').forEach(span => {
        span.title = 'Skill proficiency level';
        
        // Add click to copy functionality for email/phone
        if (span.textContent.includes('@') || span.textContent.includes('+')) {
            span.style.cursor = 'pointer';
            span.title += ' (Click to copy)';
            
            span.addEventListener('click', function() {
                const textToCopy = this.textContent.replace(/^[^:]+:\s*/, '');
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // Show copied notification
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    this.style.color = 'var(--success-color)';
                    
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.style.color = '';
                    }, 1500);
                });
            });
        }
    });

    // Add smooth loading of images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // If image is already loaded, show it immediately
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', function() {
                this.style.opacity = '1';
                this.style.transition = 'opacity 0.5s ease';
            });
            
            // Set initial opacity for smooth loading
            img.style.opacity = '0';
        }
    });
    
    // Add click effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Add interactive skill bars
    document.querySelectorAll('.skill-bar').forEach(skillBar => {
        skillBar.addEventListener('mouseenter', function() {
            const skillLevel = this.querySelector('.skill-level');
            skillLevel.style.transform = 'scaleY(1.2)';
            skillLevel.style.transition = 'transform 0.3s ease';
        });
        
        skillBar.addEventListener('mouseleave', function() {
            const skillLevel = this.querySelector('.skill-level');
            skillLevel.style.transform = 'scaleY(1)';
        });
    });
    
    // Add theme transition smoothness
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    // Add active section indicator in navbar
    function highlightActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveNav);
    
    // Initialize animations and event listeners
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key closes mobile menu
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
        
        // Tab key navigation with focus management
        if (e.key === 'Tab') {
            const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
    
    // Add page load animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
            
            // Trigger initial animations
            enhancedAnimateOnScroll();
            
            // Add subtle pulse animation to CTA buttons
            setTimeout(() => {
                const ctaButtons = document.querySelectorAll('.hero-buttons .btn');
                ctaButtons.forEach(btn => {
                    btn.style.animation = 'pulse 2s infinite';
                });
            }, 1000);
        }, 100);
    });
    
    // Add CSS for pulse animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});