document.addEventListener("DOMContentLoaded", () => {
  // ==================== 1. MOBILE MENU TOGGLE ====================
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = navToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        const icon = navToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      }
    });
  });

  // ==================== 2. NAVBAR SCROLL STYLING ====================
  const navbar = document.querySelector(".navbar");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // ==================== 3. ACTIVE LINK HIGHLIGHT (IntersectionObserver) ====================
  const sections = document.querySelectorAll("section[id]");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px", // Triggers when section enters the upper viewport area
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active-link");
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active-link");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  // Dynamic Typing Effect Logic
  const typingText = document.getElementById("typing-text");
  const roles = [
    "Frontend Developer",
    "MERN Stack Developer",
    "Full-Stack Developer",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(typeEffect, speed);
  }
  typeEffect();
});
