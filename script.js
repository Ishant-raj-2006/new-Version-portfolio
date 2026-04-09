document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Logic
    const sections = document.querySelectorAll('.info-section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    const style = document.createElement('style');
    style.textContent = `
        .animate-reveal {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Scroll to Top Logic
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Mobile external link confirmation (Optional UX)
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // console.log('Opening external link: ' + link.href);
        });
    });

    // Print Feedback
    const printBtn = document.querySelector('.btn-primary');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            // Native print handles it
        });
    }

    // Lord Ganesha Image Fallback
    const ganeshaImg = document.getElementById('ganesha-img');
    if (ganeshaImg) {
        ganeshaImg.onerror = function() {
            this.src = 'https://cdn-icons-png.flaticon.com/512/3224/3224094.png';
        };
    }
});
