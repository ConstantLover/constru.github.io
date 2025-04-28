
    window.addEventListener('scroll', function() {
        const backToTop = document.querySelector('.back-to-top');
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
        
    
        const fadeElements = document.querySelectorAll('.product-card, .mapa h2, .mapa iframe');
        fadeElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
                element.classList.add('visible');
            }
        });
    });

   
    document.addEventListener('DOMContentLoaded', function() {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            card.classList.add('fade-in');
            setTimeout(() => {
                card.classList.add('visible');
            }, 100 * index);
        });
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
