document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('theme-dark');
        });
    }

    // Skills Carousel functionality
    const skillsCarousel = document.querySelector('.skills-carousel .carousel-container');
    const skillSlides = document.querySelectorAll('.skills-carousel .carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentSkillSlide = 0;

    function moveSkillsCarousel(direction) {
        if (direction === 'next') {
            currentSkillSlide = (currentSkillSlide + 1) % skillSlides.length;
        } else {
            currentSkillSlide = (currentSkillSlide - 1 + skillSlides.length) % skillSlides.length;
        }
        skillsCarousel.style.transform = `translateX(-${currentSkillSlide * 100}%)`;
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => moveSkillsCarousel('prev'));
        nextBtn.addEventListener('click', () => moveSkillsCarousel('next'));
    }

    // Auto-advance skills carousel every 5 seconds
    setInterval(() => {
        moveSkillsCarousel('next');
    }, 5000);

    // Modal functionality
    const modal = document.getElementById('aboutModal');

    window.openModal = function() {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }

    window.closeModal = function() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
});