document.addEventListener("DOMContentLoaded", () => {
  /* =========================================
     Mobile Navigation Toggle
     ========================================= */
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  /* =========================================
     Sticky Header on Scroll
     ========================================= */
  const header = document.querySelector(".header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    lastScrollY = window.scrollY;
  });

  /* =========================================
     Scroll Reveal Animation (Intersection Observer)
     ========================================= */
  const revealElements = document.querySelectorAll(".show-on-scroll");

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Optional: only animate once
      }
    });
  }, {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
});
