document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     ZAMMIOHUB
     Main Website JavaScript
     ========================================================= */


  // =========================
  // ELEMENTS
  // =========================

  const searchInput = document.querySelector("#searchInput");
  const searchStatus = document.querySelector("#searchStatus");

  const searchableItems = document.querySelectorAll(
    ".tool-card, .mini-tool"
  );

  const menuButton = document.querySelector("#menuButton");
  const mobileMenu = document.querySelector("#mobileMenu");

  const currentYear = document.querySelector("#currentYear");


  // =========================
  // SEARCH
  // =========================

  if (searchInput && searchableItems.length > 0) {

    searchInput.addEventListener("input", () => {

      const searchTerm = searchInput.value
        .toLowerCase()
        .trim();

      let visibleCount = 0;


      searchableItems.forEach((item) => {

        /*
          data-search can contain extra search keywords.

          Example:
          data-search="bmi body mass index health weight"
        */

        const customSearchText =
          item.dataset.search || "";

        const itemText =
          `${item.textContent} ${customSearchText}`
            .toLowerCase();


        const matches =
          searchTerm === "" ||
          itemText.includes(searchTerm);


        if (matches) {
          item.hidden = false;
          visibleCount++;
        } else {
          item.hidden = true;
        }

      });


      // Search message

      if (searchStatus) {

        if (searchTerm === "") {

          searchStatus.textContent = "";

        } else if (visibleCount === 0) {

          searchStatus.textContent =
            `No tools found for "${searchInput.value.trim()}".`;

        } else {

          searchStatus.textContent =
            `${visibleCount} ${
              visibleCount === 1 ? "tool" : "tools"
            } found.`;

        }

      }

    });

  }


  // =========================
  // MOBILE MENU
  // =========================

  if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

      const isOpen =
        mobileMenu.classList.toggle("active");


      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );


      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation menu"
          : "Open navigation menu"
      );


      menuButton.textContent =
        isOpen ? "✕" : "☰";


      document.body.classList.toggle(
        "menu-open",
        isOpen
      );

    });

  }


  // =========================
  // CLOSE MOBILE MENU
  // WHEN A LINK IS CLICKED
  // =========================

  if (mobileMenu) {

    const mobileMenuLinks =
      mobileMenu.querySelectorAll("a");


    mobileMenuLinks.forEach((link) => {

      link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.classList.remove("menu-open");


        if (menuButton) {

          menuButton.textContent = "☰";

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

          menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
          );

        }

      });

    });

  }


  // =========================
  // CLOSE MENU WITH ESC KEY
  // =========================

  document.addEventListener("keydown", (event) => {

    if (
      event.key === "Escape" &&
      mobileMenu &&
      mobileMenu.classList.contains("active")
    ) {

      mobileMenu.classList.remove("active");

      document.body.classList.remove("menu-open");


      if (menuButton) {

        menuButton.textContent = "☰";

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open navigation menu"
        );

        menuButton.focus();

      }

    }

  });


  // =========================
  // SMOOTH SCROLLING
  // =========================

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", function (event) {

        const targetId =
          this.getAttribute("href");


        // Ignore placeholder links

        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(targetId);


        if (target) {

          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      });

    });


  // =========================
  // CURRENT YEAR
  // =========================

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }

});
