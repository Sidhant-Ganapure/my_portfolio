document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll('.navbar a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });
  });
  
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Select all anchor tags
    const links = document.querySelectorAll('a[href^="#"]');

    // Iterate over each anchor tag
    links.forEach(link => {
        // Add click event listener
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default behavior

            // Get target element ID from href attribute
            const targetId = this.getAttribute('href').substring(1);

            // Find target element
            const targetElement = document.getElementById(targetId);

            // Scroll smoothly to target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


const sections = document.querySelectorAll("section");

[...sections].forEach((section) => {
    const checkbox = section.querySelector("input");

    checkbox.addEventListener("change", () => {
        section.classList.toggle("enable-animation");
    });
});