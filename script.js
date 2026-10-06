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

  //   // ==================== 4. DARK / LIGHT MODE TOGGLE ====================
  //   const themeToggle = document.getElementById("theme-toggle");
  //   const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

  //   // Check saved theme in localStorage or default to dark
  //   const savedTheme = localStorage.getItem("selected-theme");
  //   if (savedTheme === "light") {
  //     document.body.classList.add("light-theme");
  //     if (themeIcon) {
  //       themeIcon.classList.replace("fa-moon", "fa-sun");
  //     }
  //   }

  //   if (themeToggle) {
  //     themeToggle.addEventListener("click", () => {
  //       document.body.classList.toggle("light-theme");
  //       const isLight = document.body.classList.contains("light-theme");

  //       // Swap icon
  //       if (themeIcon) {
  //         if (isLight) {
  //           themeIcon.classList.replace("fa-moon", "fa-sun");
  //         } else {
  //           themeIcon.classList.replace("fa-sun", "fa-moon");
  //         }
  //       }

  //       // Save preference to localStorage
  //       localStorage.setItem("selected-theme", isLight ? "light" : "dark");
  //     });
  //   }
});
