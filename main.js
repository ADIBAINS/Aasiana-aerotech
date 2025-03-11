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






const openButton = document.querySelector("[data-open-modal]");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

// Open modal
openButton.addEventListener("click", () => {
  modal.showModal();
});

// Close modal on clicking any close button
closeButtons.forEach(button => {
  button.addEventListener("click", () => {
    modal.close();
  });
});

// Close modal when clicking outside of it
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});



document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("3rAkmIJLtR3Pr03S8"); // Initialize EmailJS

  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    console.log("Sending data:", templateParams); 

    emailjs.send("service_5fctnwf", "template_8ygo8bc", templateParams)
      .then(response => {
        console.log("EmailJS Response:", response);
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset(); 
        modal.close();
        setTimeout(() => {
          window.location.href = "./thankyou.html"; // Redirect to Thank You page
      }, 1000); // Wait 2 sec before redirecting
      
      setTimeout(() => {
          window.location.href = "./index.html"; // Redirect back to main page
      }, 6000);
      })
      .catch(error => {
        console.error("EmailJS Error:", error);
        alert("Error sending message: " + JSON.stringify(error));
      });
  });
});


document.getElementById("contactForm").addEventListener("submit",function (event){
  document.getElementById("sub").disabled = true;
});


let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(i) {
    const slider = document.querySelector(".slider");
    index = (i + totalSlides) % totalSlides;
    slider.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector(".prev").addEventListener("click", () => showSlide(index - 1));
document.querySelector(".next").addEventListener("click", () => showSlide(index + 1));

// Auto-slide every 3 seconds
setInterval(() => showSlide(index + 1), 3000);

