document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 120
    });

    // Navigation Header Background Toggle Scroll Event
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Management
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('open');
        
        // Simple Accessibility configuration change
        const isOpen = navMenu.classList.contains('active');
        mobileToggle.setAttribute('aria-expanded', isOpen);
    };

    mobileToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking link items
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Active Link State Highlighting Mechanism on Scroll Event Loop
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute('id');
            const targetLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
            
            if (targetLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
                    targetLink.classList.add('active');
                }
            }
        });
    });

    // Modern Luxury Front-End Simulation Logic for Reservations Processing
    const bookingForm = document.getElementById('booking-form');
    const formResponse = document.getElementById('form-response');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // UI Visual processing feedback triggers immediately
            formResponse.textContent = 'Verifica disponibilità in corso...';
            formResponse.className = 'form-response';
            
            const name = document.getElementById('res-name').value;
            const phone = document.getElementById('res-phone').value;
            const date = document.getElementById('res-date').value;
            const guests = document.getElementById('res-guests').value;

            // Simple data capture validation fallback check loop simulation
            if (!name || !phone || !date || !guests) {
                formResponse.textContent = 'Per favore, compila tutti i campi obbligatori.';
                formResponse.classList.add('error');
                return;
            }

            // Simulate High-end API roundtrip transaction pipeline delay latency
            setTimeout(() => {
                formResponse.textContent = `Grazie ${name}. Tavolo per ${guests} persone in data ${date} è stato riservato con successo! Un SMS di conferma è stato inviato a ${phone}.`;
                formResponse.classList.add('success');
                bookingForm.reset();
            }, 1800);
        });
    }

    // Set dynamic absolute minimum allowable date constraint calculation on calendar input UI element boundary rules
    const dateInput = document.getElementById('res-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});