document.addEventListener('DOMContentLoaded', () => {
    // Elegant upward fade observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
         entries.forEach(e => {
             if (e.isIntersecting) {
                 e.target.classList.add('active');
             }
         })
    }, observerOptions);

    document.querySelectorAll('.reveal-fade, .reveal-slide-up').forEach((el) => {
        // If the element is within the Hero, activate it immediately so there's no initial load chop.
        if (el.closest('.hero')) {
            el.classList.add('active');
        } else {
            // Otherwise, let the scroll observer handle it as the user scrolls down.
            fadeObserver.observe(el);
        }
    });

    // Solid Nav specific scroll effect
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.maxHeight = null;
            });

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Form Submission Simulation
    const form = document.getElementById('quoteForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const originalText = btn.textContent;
            
            btn.textContent = 'Processing request...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.textContent = 'Quote Requested!';
                btn.style.opacity = '1';
                btn.style.backgroundColor = '#10B981'; // Green success
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                }, 4000);
            }, 1200);
        });
    }

    // Smooth Anchor Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
