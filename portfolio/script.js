document.addEventListener('DOMContentLoaded', function() {
    // Initialize loading animation
    const loadingWave = document.createElement('div');
    loadingWave.className = 'loading-wave';
    for (let i = 0; i < 5; i++) {
        const wave = document.createElement('div');
        wave.className = 'wave';
        loadingWave.appendChild(wave);
    }
    document.body.appendChild(loadingWave);

    // Hide loading animation after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingWave.classList.add('hidden');
            setTimeout(() => loadingWave.remove(), 500);
        }, 1000);
    });

    // Create floating particles
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'floating-particles';
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.opacity = Math.random() * 0.3 + 0.1;
            particle.style.animationDelay = `${Math.random() * 20}s`;
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particlesContainer.appendChild(particle);
        }
        
        document.body.appendChild(particlesContainer);
    }

    createParticles();

    // Enhanced theme toggle with smooth transition
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add transition class for smooth theme change
        document.documentElement.classList.add('theme-changing');
        
        setTimeout(() => {
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            document.documentElement.classList.remove('theme-changing');
        }, 300);
    });

    function updateThemeIcon(theme) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }

    // Enhanced mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Enhanced scroll effects
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Header effects
        header.classList.toggle('scrolled', currentScroll > 50);
        
        // Hide/show header on scroll
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
        
        // Back to top button
        const backToTopBtn = document.getElementById('backToTop');
        backToTopBtn.classList.toggle('active', currentScroll > 300);
        
        // Update active nav link
        updateActiveNav();
    });

    // Enhanced smooth scrolling with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without jumping
                history.pushState(null, null, targetId);
            }
        });
    });

    // Enhanced project filtering with animation
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button with animation
            this.classList.add('active');
            this.style.transform = 'scale(0.95)';
            setTimeout(() => this.style.transform = '', 150);
            
            // Filter projects with animation
            const filter = this.dataset.filter;
            
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('fade-in');
                    }
                }, index * 50);
            });
        });
    });

    // Enhanced form submission with validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault(); // Stop page from redirecting
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('.btn-text');
            const spinner = submitBtn.querySelector('.loading-spinner');
            
            // 1. Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // 2. Validate form
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = 'var(--danger-color)';
                    isValid = false;
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                showNotification('Please fill all required fields', 'error');
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                return;
            }

            // 3. Prepare Form Data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());

            // 4. Send Actual Request
            try {
                // Using /ajax/ endpoint to receive a JSON response instead of a redirect
                const response = await fetch("https://formsubmit.co/ajax/talimonosimel@gmail.com", {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    showNotification('Message sent successfully!', 'success');
                    this.reset(); // Clear the form
                } else {
                    throw new Error('Server responded with an error');
                }
                
            } catch (error) {
                console.error("Submission Error:", error);
                showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                // Restore button state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        });
    }                      

    // Enhanced animations with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-item')) {
                    const skillBar = entry.target.querySelector('.skill-level');
                    const width = skillBar.style.width;
                    skillBar.style.setProperty('--skill-width', width);
                    skillBar.style.width = '0';
                    
                    setTimeout(() => {
                        skillBar.style.width = 'var(--skill-width)';
                    }, 300);
                }
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animate-able elements
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    document.querySelectorAll('.skill-item').forEach(el => observer.observe(el));

    // Enhanced skill bar animation
    function animateSkillBars() {
        document.querySelectorAll('.skill-item').forEach(item => {
            if (isElementInViewport(item)) {
                const skillLevel = item.querySelector('.skill-level');
                const width = skillLevel.style.width;
                skillLevel.style.width = '0';
                
                setTimeout(() => {
                    skillLevel.style.width = width;
                }, 300);
            }
        });
    }

    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Create floating action buttons
    function createFloatingActions() {
        const floatingActions = document.createElement('div');
        floatingActions.className = 'floating-actions';
        
        // Back to top
        const backToTopBtn = document.createElement('a');
        backToTopBtn.href = '#home';
        backToTopBtn.className = 'action-btn';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.setAttribute('aria-label', 'Back to top');
        
        // Theme toggle
        const themeFloatBtn = themeToggle.cloneNode(true);
        themeFloatBtn.className = 'action-btn';
        themeFloatBtn.querySelector('i').className = themeIcon.className;
        
        // WhatsApp
        const whatsappBtn = document.createElement('a');
        whatsappBtn.href = 'https://wa.me/qr/7MADDXZXMDE7J1';
        whatsappBtn.className = 'action-btn';
        whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        whatsappBtn.setAttribute('aria-label', 'Chat on WhatsApp');
        whatsappBtn.target = '_blank';
        
        floatingActions.appendChild(whatsappBtn);
        floatingActions.appendChild(themeFloatBtn);
        floatingActions.appendChild(backToTopBtn);
        
        document.body.appendChild(floatingActions);
        
        // Update theme toggle in floating button
        themeFloatBtn.addEventListener('click', () => {
            themeToggle.click();
            themeFloatBtn.querySelector('i').className = themeIcon.className;
        });
    }

    createFloatingActions();

    // Enhanced typing effect for hero title
    function typeWriterEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;
        
        const originalText = heroTitle.textContent;
        const spanText = heroTitle.querySelector('span').textContent;
        heroTitle.innerHTML = heroTitle.innerHTML.replace(spanText, '<span class="typing-cursor"></span>');
        
        let i = 0;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;
        
        function type() {
            if (i < spanText.length) {
                document.querySelector('.typing-cursor').textContent = spanText.substring(0, i + 1);
                i++;
                setTimeout(type, typingSpeed);
            } else {
                setTimeout(erase, pauseTime);
            }
        }
        
        function erase() {
            if (i > 0) {
                document.querySelector('.typing-cursor').textContent = spanText.substring(0, i - 1);
                i--;
                setTimeout(erase, deletingSpeed);
            } else {
                setTimeout(type, typingSpeed / 2);
            }
        }
        
        // Start typing after a delay
        setTimeout(type, 1000);
    }

    typeWriterEffect();

    // Enhanced active nav highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        let closestDistance = Infinity;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const distance = Math.abs(rect.top);
            
            if (distance < closestDistance && rect.top <= 150) {
                closestDistance = distance;
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

    // Enhanced image loading with lazy loading
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                img.style.transform = 'translateY(0)';
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'translateY(20px)';
        img.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        imageObserver.observe(img);
    });

    // Add CSS for typing cursor
    const style = document.createElement('style');
    style.textContent = `
        .typing-cursor {
            border-right: 3px solid var(--primary-color);
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 100% { border-color: transparent; }
            50% { border-color: var(--primary-color); }
        }
        
        .theme-changing * {
            transition: none !important;
        }
        
        .form-success {
            background: var(--success-color) !important;
            animation: slideIn 0.5s ease;
        }
        
        .form-error {
            background: var(--danger-color) !important;
            animation: shake 0.5s ease;
        }
        
        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(style);

    // Utility functions
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? 'var(--success-color)' : 'var(--danger-color)'};
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            z-index: 9999;
            box-shadow: var(--shadow-lg);
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Initialize
    updateActiveNav();
    animateSkillBars();
});