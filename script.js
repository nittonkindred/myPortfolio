document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    // Form reset
    document.getElementById("contact-form").reset();
  });
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});
// Fade-in animation on page load
gsap.from("header", { opacity: 0, y: -50, duration: 1 });
gsap.from("#projects", { opacity: 0, x: -100, duration: 1, delay: 0.5 });
gsap.from("#skills", { opacity: 0, x: 100, duration: 1, delay: 1 });
gsap.from("#contact", { opacity: 0, y: 50, duration: 1, delay: 1.5 });

// Animate project cards on scroll
gsap.registerPlugin(ScrollTrigger);
gsap.from(".project-card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2, // Delays each card animation
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%",
  },
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
