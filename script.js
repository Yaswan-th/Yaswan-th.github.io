// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Particles.js
    initParticles();
    
    // Terminal typing effect
    initTerminalTyping();
    
    // Hero typing effect
    initHeroTyping();
    
    // Animate skill bars
    animateSkillBars();
    
    // Mobile menu toggle
    initMobileMenu();
    
    // Smooth scrolling for navigation
    initSmoothScrolling();
});

// Initialize Particles.js background
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#00ffcc', '#00ccff', '#ffffff']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#2a3a5a',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Terminal typing effect in the header
function initTerminalTyping() {
    const commandElement = document.getElementById('command');
    const commands = [
        'whoami',
        'ls -la /skills',
        'cat cybersecurity_profile.txt',
        'sudo access granted',
        'nmap -sS -A target',
        'ssh user@secureserver.com'
    ];
    let currentCommandIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseBeforeDelete = 2000;
    let pauseBeforeType = 500;

    function typeCommand() {
        const currentCommand = commands[currentCommandIndex];
        
        if (isDeleting) {
            commandElement.textContent = currentCommand.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            
            if (currentCharIndex === 0) {
                isDeleting = false;
                currentCommandIndex = (currentCommandIndex + 1) % commands.length;
                setTimeout(typeCommand, pauseBeforeType);
            } else {
                setTimeout(typeCommand, deletingSpeed);
            }
        } else {
            commandElement.textContent = currentCommand.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            
            if (currentCharIndex === currentCommand.length) {
                isDeleting = true;
                setTimeout(typeCommand, pauseBeforeDelete);
            } else {
                setTimeout(typeCommand, typingSpeed);
            }
        }
    }
    
    // Start the typing animation
    setTimeout(typeCommand, pauseBeforeType);
}

// Hero section typing effect
function initHeroTyping() {
    const typedTextElement = document.getElementById('typed-text');
    const phrases = [
        'Cybersecurity Specialist',
        'Penetration Tester',
        'Network Security Engineer',
        'Security Architect',
        'Digital Forensics Expert'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeHero() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
            
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
            
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 2000;
            }
        }
        
        setTimeout(typeHero, typingSpeed);
    }
    
    // Start the hero typing animation
    setTimeout(typeHero, 1000);
}

// Animate skill bars on scroll
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Animate on page load (for above-fold content)
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        setTimeout(() => {
            skill.style.width = `${level}%`;
        }, 500);
    });
    
    // Set up observer for animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = `${level}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    skillLevels.forEach(skill => {
        observer.observe(skill);
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, .btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const headerHeight = document.querySelector('header').offsetHeight;
                    
                    window.scrollTo({
                        top: offsetTop - headerHeight,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Add scroll-based animations
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    // Add shadow to header on scroll
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    // Add animation to elements when they come into view
    const animateElements = document.querySelectorAll('.section-header, .timeline-item, .project-card, .certification');
    
    animateElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.8) {
            element.classList.add('animated');
        }
    });
});
