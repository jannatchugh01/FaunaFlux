document.addEventListener('DOMContentLoaded', () => {
    // Main Banner sliding functionality
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].style.opacity = 0; // Hide the current slide
        currentSlide = (currentSlide + 1) % slides.length; // Move to the next slide
        slides[currentSlide].style.opacity = 1; // Show the next slide
    }

    // Show the first slide initially
    slides[currentSlide].style.opacity = 1;

    // Change slides every 5 seconds
    setInterval(showNextSlide, 5000);

    // Quote Banner sliding functionality
    const quoteSlides = document.querySelectorAll('.quote-slide');
    let currentQuoteSlide = 0;

    function showNextQuoteSlide() {
        quoteSlides[currentQuoteSlide].style.opacity = 0; // Hide the current quote slide
        currentQuoteSlide = (currentQuoteSlide + 1) % quoteSlides.length; // Move to the next quote slide
        quoteSlides[currentQuoteSlide].style.opacity = 1; // Show the next quote slide
    }

    // Show the first quote slide initially
    quoteSlides[currentQuoteSlide].style.opacity = 1;

    // Change quote slides every 5 seconds
    setInterval(showNextQuoteSlide, 5000);

    // Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view"); // Apply animation class when in view
                observer.unobserve(entry.target); // Stop observing after it comes into view
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Observe the upload and features sections
    const uploadSection = document.querySelector(".upload-section");
    const featuresSection = document.querySelector(".features");
    const quoteSlides = document.querySelectorAll(".quote-slide");

    // Start observing these sections
    observer.observe(uploadSection);
    observer.observe(featuresSection);
    quoteSlides.forEach(slide => {
        observer.observe(slide);
    });
});

});


