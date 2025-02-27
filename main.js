document.addEventListener("DOMContentLoaded", function () {
    // Select all navigation links
    const navLinks = document.querySelectorAll(".navopt a, .nav-components a, .job-btn a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll smoothly to the target section with an offset of 4.5rem
                const offset = 4.5 * 16; // Convert rem to pixels (assuming 1rem = 16px)
                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        });
    });
});


const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
