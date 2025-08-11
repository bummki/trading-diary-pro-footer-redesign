document.addEventListener('DOMContentLoaded', function() {
    const sectionTitles = document.querySelectorAll('.footer-section .section-title');

    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Apply accordion only on mobile
                const parentSection = this.closest('.footer-section');
                parentSection.classList.toggle('active');
            }
        });
    });
});
    // Initial check for mobile to hide content
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.footer-section p, .footer-section ul, .footer-section ol').forEach(content => {
            content.style.display = 'none';
        });
    }
});


