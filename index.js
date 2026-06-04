// ── Universal Visibility Blur Tracker ──
const blurSections = document.querySelectorAll('.blur-section');

if (blurSections.length > 0) {
    // Configure how early/late the animation should trigger
    const observerOptions = {
        root: null,         // Viewport tracking
        rootMargin: '-8% 0px -8% 0px', // Tightened window so it triggers cleanly right inside the monitor space
        threshold: 0.12      // Triggers when 12% of the content block is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const innerWrapper = entry.target.querySelector('.blur-inner');
            if (!innerWrapper) return;

            if (entry.isIntersecting) {
                // User arrives at section -> Cinematic slow unblur and snap into frame
                innerWrapper.style.filter = 'blur(0px)';
                innerWrapper.style.opacity = '1';
                innerWrapper.style.transform = 'translateY(0px)';
            } else {
                // User scrolls completely away -> Fade/Blur reset safely hidden
                innerWrapper.style.filter = 'blur(20px)'; // Deep premium blur
                innerWrapper.style.opacity = '0';
                innerWrapper.style.transform = 'translateY(50px)'; // Gentle drop down
            }
        });
    }, observerOptions);

    // Set initial baseline styles and start tracking
    blurSections.forEach(section => {
        const innerWrapper = section.querySelector('.blur-inner');
        if (innerWrapper) {
            // Invisible/blurred starting states
            innerWrapper.style.filter = 'blur(20px)';
            innerWrapper.style.opacity = '0';
            innerWrapper.style.transform = 'translateY(50px)';

            // TIMING UPGRADE: 1.4 seconds with ultra-smooth luxury easing curves
            innerWrapper.style.transition = 'filter 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)';
            innerWrapper.style.willChange = 'filter, opacity, transform';
        }
        observer.observe(section);
    });
}