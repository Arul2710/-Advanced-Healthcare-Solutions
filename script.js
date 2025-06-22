  // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mainMenu = document.getElementById('main-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mainMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                if(this.getAttribute('href') === '#') return;
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    // Close mobile menu if open
                    if(mainMenu.classList.contains('active')) {
                        mainMenu.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 90,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Back to Top Button
        const backToTopBtn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Testimonials Slider
        $(document).ready(function(){
            $('.testimonials-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true,
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false
            });
        });
        
        // Form Submission
        document.getElementById('appointmentForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Appointment request submitted successfully! We will contact you shortly to confirm your appointment.');
            this.reset();
        });
        
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your message has been sent successfully! We will get back to you soon.');
            this.reset();
        });
        
        // Current Year for Footer
        document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} MediCare Hospitals. All Rights Reserved.`;