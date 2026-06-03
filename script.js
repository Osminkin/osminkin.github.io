// 90s Style Personal Website JavaScript
// Eugene Osminkin's Cyber Space

// Initialize the site when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSite();
    animateVisitorCounter();
    setLastUpdated();
    initializeFloatingStars();
});

// Initialize site functionality
function initializeSite() {
    // Set up navigation
    setupNavigation();

    // Add some retro sound effects (commented out to avoid annoying users)
    // setupSoundEffects();

    // Initialize skill bars animation
    animateSkillBars();

    // Add matrix rain effect
    setTimeout(addMatrixRain, 2000);

    console.log('🌐 Welcome to Eugene\'s Cyber Space! 🌐');
    console.log('💻 Initializing retro systems... 💻');
    console.log('✅ All systems operational!');
}

// Navigation functionality
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add button press effect
            this.style.transform = 'translateY(2px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}

// Show specific content section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section with animation
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');

        // Add entrance animation
        targetSection.style.opacity = '0';
        targetSection.style.transform = 'translateX(-30px)';

        setTimeout(() => {
            targetSection.style.transition = 'all 0.5s ease';
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateX(0)';
        }, 50);
    }

    // Log navigation for that authentic 90s debugging feel
    console.log(`🚀 Navigating to: ${sectionId.toUpperCase()}`);
}

// Animate the visitor counter
function animateVisitorCounter() {
    const counter = document.getElementById('counter');
    if (!counter) return;

    let count = 1000;
    const targetCount = 1337;
    const increment = Math.ceil((targetCount - count) / 50);

    const animation = setInterval(() => {
        count += increment;
        if (count >= targetCount) {
            count = targetCount;
            clearInterval(animation);
        }
        counter.textContent = count.toString().padStart(6, '0');
    }, 100);
}

// Animate skill bars when they come into view
function animateSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');

    // Create intersection observer for skill bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.style.width;
                skillBar.style.width = '0%';
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 300);
            }
        });
    }, { threshold: 0.1 });

    skillFills.forEach(fill => observer.observe(fill));
}

// Add matrix-style rain effect
function addMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    matrixContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.1;
    `;

    // Create falling characters
    for (let i = 0; i < 20; i++) {
        createMatrixColumn(matrixContainer, i);
    }

    document.body.appendChild(matrixContainer);
}

function createMatrixColumn(container, index) {
    const column = document.createElement('div');
    column.style.cssText = `
        position: absolute;
        left: ${index * 5}%;
        top: -100px;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        color: #00FF00;
        animation: matrixFall ${5 + Math.random() * 10}s linear infinite;
        animation-delay: ${Math.random() * 5}s;
    `;

    // Add random characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    let text = '';
    for (let i = 0; i < 20; i++) {
        text += chars[Math.floor(Math.random() * chars.length)] + '<br>';
    }
    column.innerHTML = text;

    container.appendChild(column);
}

// Add matrix fall animation via CSS
const matrixStyle = document.createElement('style');
matrixStyle.textContent = `
    @keyframes matrixFall {
        0% { transform: translateY(-100px); opacity: 1; }
        100% { transform: translateY(calc(100vh + 100px)); opacity: 0; }
    }
`;
document.head.appendChild(matrixStyle);

// Guestbook functionality
function signGuestbook() {
    const textarea = document.querySelector('.guestbook textarea');
    const message = textarea.value.trim();

    if (message) {
        // Simulate adding to guestbook
        alert('📝 Thanks for signing my guestbook! Your message has been saved to the mainframe! 🖥️');
        textarea.value = '';

        // Add some retro flair
        console.log('📝 New guestbook entry:', message);

        // Flash effect
        document.body.style.background = '#FFFFFF';
        setTimeout(() => {
            document.body.style.background = '';
        }, 100);
    } else {
        alert('⚠️ Please enter a message before submitting! ⚠️');
    }
}

// Set the last updated date
function setLastUpdated() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        lastUpdatedElement.textContent = formattedDate;
    }
}

// Initialize floating stars with random movement
function initializeFloatingStars() {
    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {
        // Add random rotation animation
        star.style.animation += `, spin ${3 + Math.random() * 4}s linear infinite`;

        // Add click interaction
        star.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
            setTimeout(() => {
                this.style.transform = '';
                this.style.transition = '';
            }, 500);
        });
    });
}

// Add spin animation
const spinStyle = document.createElement('style');
spinStyle.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(spinStyle);

// Konami Code Easter Egg
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);

    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }

    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    alert('🎮 KONAMI CODE ACTIVATED! 🎮\nWelcome to the secret area of my website!');

    // Make everything super retro for 10 seconds
    document.body.style.filter = 'hue-rotate(180deg) contrast(150%) saturate(200%)';
    document.body.style.animation = 'shake 0.5s infinite';

    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(shakeStyle);

    setTimeout(() => {
        document.body.style.filter = '';
        document.body.style.animation = '';
        shakeStyle.remove();
    }, 10000);

    console.log('🎮 Easter egg activated! You found the secret! 🎮');
}

// Add some console art for fun
console.log(`
    ╔══════════════════════════════════════╗
    ║     EUGENE'S RETRO CYBER SPACE       ║
    ║                                      ║
    ║    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ║
    ║    ░░██░░██░░██████░░██░░░░██░░░░    ║
    ║    ░░██░░██░░██░░░░░░██░░██░░░░░░    ║
    ║    ░░██████░░██████░░████░░░░░░░░    ║
    ║    ░░██░░██░░██░░░░░░██░░██░░░░░░    ║
    ║    ░░██░░██░░██████░░██░░░░██░░░░    ║
    ║    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ║
    ║                                      ║
    ║         Welcome to the Matrix!       ║
    ╚══════════════════════════════════════╝
`);

// Random retro quotes that appear in console
const retroQuotes = [
    "The future is now! 🚀",
    "Surfing the information superhighway! 🌐",
    "You've got mail! 📧",
    "Loading... Please wait while we connect to cyberspace... 💻",
    "Warning: This website may cause extreme nostalgia! ⚠️"
];

setInterval(() => {
    const randomQuote = retroQuotes[Math.floor(Math.random() * retroQuotes.length)];
    console.log(`💾 System Message: ${randomQuote}`);
}, 30000); // Show a new quote every 30 seconds