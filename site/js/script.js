/* ================================
   HOPWISE LANDING PAGE - SCRIPTS
   ================================ */

// Waitlist form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.ready-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const button = form.querySelector('button');
            const originalText = button.textContent;
            
            // Show loading state
            button.textContent = 'Joining...';
            button.disabled = true;
            
            // Form will submit to Formspree
            // This just handles the UI feedback
            setTimeout(() => {
                button.textContent = '✓ You\'re in!';
                button.style.background = '#10B981';
            }, 1000);
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Update copyright year
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
