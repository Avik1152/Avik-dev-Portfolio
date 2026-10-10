document.addEventListener("DOMContentLoaded", () => {
  // ==================== 1. SCROLL REVEAL EFFECT FOR CARDS ====================
  const cards = document.querySelectorAll(".experience-card, .highlight-box");

  const observerOptions = {
    root: null,
    threshold: 0.15, // Adjust the threshold as needed
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(card);
  });

  // ==================== 2. CONSOLE LOG OR TRACKING ====================
  console.log("Marine & Laboratory Experience page loaded successfully.");
});
