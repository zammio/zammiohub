document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // ZammioHub Search
  // =========================

  const searchInput = document.querySelector("#searchInput");
  const toolCards = document.querySelectorAll(".tool-card");

  if (searchInput && toolCards.length > 0) {
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase().trim();

      toolCards.forEach((card) => {
        const text = card.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // =========================
  // Mobile Menu
  // =========================

  const menuButton = document.querySelector("#menuButton");
  const mobileMenu = document.querySelector("#mobileMenu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }

  // =========================
  // Close mobile menu
  // =========================

  const menuLinks = document.querySelectorAll("#mobileMenu a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }
    });
  });

  // =========================
  // Smooth scrolling
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId !== "#") {
        const target = document.querySelector(targetId);

        if (target) {
          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  // =========================
  // Current year
  // =========================

  const yearElement = document.querySelector("#currentYear");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
