document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ZAMMIOHUB TOOLS DATABASE

     Future mein new calculator add karne ke liye
     sirf is array mein ek new object add karein.
     ======================================================= */

  const tools = [

    {
      name: "Age Calculator",
      category: "Everyday",
      icon: "calendar-days",
      url: "calculators/age-calculator.html",
      description: "Calculate your exact age in years, months and days.",
      keywords: "age birthday date years months days"
    },

    {
      name: "Auto Loan Calculator",
      category: "Finance",
      icon: "car",
      url: "calculators/auto-loan-calculator.html",
      description: "Estimate auto loan payments and borrowing costs.",
      keywords: "auto car vehicle loan finance payment"
    },

    {
      name: "BMI Calculator",
      category: "Health",
      icon: "activity",
      url: "calculators/bmi-calculator.html",
      description: "Calculate BMI using metric or US units.",
      keywords: "bmi body mass index weight height health"
    },

    {
      name: "Calorie Calculator",
      category: "Health",
      icon: "flame",
      url: "calculators/calorie-calculator.html",
      description: "Estimate your daily calorie needs.",
      keywords: "calorie calories health fitness food weight"
    },

    {
      name: "Compound Interest Calculator",
      category: "Finance",
      icon: "chart-no-axes-combined",
      url: "calculators/compound-interest-calculator.html",
      description: "Calculate compound growth on savings and investments.",
      keywords: "compound interest savings investment growth finance"
    },

    {
      name: "Discount Calculator",
      category: "Math",
      icon: "badge-percent",
      url: "calculators/discount-calculator.html",
      description: "Calculate discounts, savings and final prices.",
      keywords: "discount sale saving price percentage math"
    },

    {
      name: "EMI Calculator",
      category: "Finance",
      icon: "credit-card",
      url: "calculators/emi-calculator.html",
      description: "Calculate monthly EMI and total loan payments.",
      keywords: "emi loan monthly payment interest finance"
    },

    {
      name: "Loan Payment Calculator",
      category: "Finance",
      icon: "hand-coins",
      url: "calculators/loan-payment-calculator.html",
      description: "Estimate loan payments, interest and total cost.",
      keywords: "loan payment borrowing interest finance monthly"
    },

    {
      name: "Mortgage Calculator",
      category: "Finance",
      icon: "house",
      url: "calculators/mortgage-calculator.html",
      description: "Estimate mortgage payments and loan costs.",
      keywords: "mortgage home house property loan finance"
    },

    {
      name: "Percentage Calculator",
      category: "Math",
      icon: "percent",
      url: "calculators/percentage-calculator.html",
      description: "Calculate percentages, increases and decreases.",
      keywords: "percentage percent increase decrease math"
    },

    {
      name: "Pregnancy Calculator",
      category: "Health",
      icon: "calendar-heart",
      url: "calculators/pregnancy-calculator.html",
      description: "Estimate pregnancy dates and important milestones.",
      keywords: "pregnancy due date conception weeks health"
    },

    {
      name: "Retirement Calculator",
      category: "Finance",
      icon: "landmark",
      url: "calculators/retirement-calculator.html",
      description: "Estimate retirement savings and future income.",
      keywords: "retirement pension savings future investment finance"
    },

    {
      name: "Salary Calculator",
      category: "Finance",
      icon: "wallet-cards",
      url: "calculators/salary-calculator.html",
      description: "Compare salary across different pay periods.",
      keywords: "salary wage income pay weekly monthly annual finance"
    },

    {
      name: "Tax Calculator",
      category: "Finance",
      icon: "receipt-text",
      url: "calculators/tax-calculator.html",
      description: "Calculate tax and the final amount after tax.",
      keywords: "tax rate amount price finance"
    },

    {
      name: "Tip Calculator",
      category: "Everyday",
      icon: "circle-dollar-sign",
      url: "calculators/tip-calculator.html",
      description: "Calculate tips and split bills quickly.",
      keywords: "tip restaurant bill split everyday"
    }

  ];


  /* =======================================================
     ELEMENTS
     ======================================================= */

  const toolsGrid =
    document.getElementById("toolsGrid");

  const searchInput =
    document.getElementById("searchInput");

  const clearSearch =
    document.getElementById("clearSearch");

  const noResults =
    document.getElementById("noResults");

  const resetFilters =
    document.getElementById("resetFilters");

  const filterButtons =
    document.querySelectorAll(".filter-button");

  const menuButton =
    document.getElementById("menuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const yearElement =
    document.getElementById("currentYear");


  let activeCategory = "All";


  /* =======================================================
     ICONS
     ======================================================= */

  function createIcons() {

    if (
      window.lucide &&
      typeof window.lucide.createIcons === "function"
    ) {
      window.lucide.createIcons();
    }

  }


  /* =======================================================
     CARD TEMPLATE
     ======================================================= */

  function toolCard(tool) {

    return `
      <a
        class="tool-card"
        href="${tool.url}"
        aria-label="Open ${tool.name}"
      >

        <div
          class="tool-icon"
          aria-hidden="true"
        >
          <i data-lucide="${tool.icon}"></i>
        </div>

        <span class="tool-category">
          ${tool.category}
        </span>

        <h3>
          ${tool.name}
        </h3>

        <p>
          ${tool.description}
        </p>

        <span class="tool-action">
          Open
          <i data-lucide="arrow-right"></i>
        </span>

      </a>
    `;

  }


  /* =======================================================
     FILTER
     ======================================================= */

  function getFilteredTools() {

    const search =
      searchInput
        ? searchInput.value
            .trim()
            .toLowerCase()
        : "";

    return tools.filter((tool) => {

      const categoryMatch =
        activeCategory === "All" ||
        tool.category === activeCategory;

      const searchableText =
        [
          tool.name,
          tool.category,
          tool.description,
          tool.keywords
        ]
          .join(" ")
          .toLowerCase();

      const searchMatch =
        !search ||
        searchableText.includes(search);

      return (
        categoryMatch &&
        searchMatch
      );

    });

  }


  /* =======================================================
     RENDER
     ======================================================= */

  function renderTools() {

    if (!toolsGrid) {
      return;
    }

    const filtered =
      getFilteredTools();

    toolsGrid.innerHTML =
      filtered
        .map(toolCard)
        .join("");

    toolsGrid.hidden =
      filtered.length === 0;

    if (noResults) {
      noResults.hidden =
        filtered.length !== 0;
    }

    createIcons();

  }


  /* =======================================================
     SEARCH
     ======================================================= */

  if (searchInput) {

    searchInput.addEventListener(
      "input",
      () => {

        if (clearSearch) {
          clearSearch.hidden =
            searchInput.value.length === 0;
        }

        renderTools();

      }
    );

  }


  if (clearSearch) {

    clearSearch.addEventListener(
      "click",
      () => {

        searchInput.value = "";

        clearSearch.hidden = true;

        searchInput.focus();

        renderTools();

      }
    );

  }


  /* =======================================================
     FILTER BUTTONS
     ======================================================= */

  filterButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        activeCategory =
          button.dataset.category;

        filterButtons.forEach(
          (item) => {

            const active =
              item === button;

            item.classList.toggle(
              "active",
              active
            );

            item.setAttribute(
              "aria-pressed",
              active
                ? "true"
                : "false"
            );

          }
        );

        renderTools();

      }
    );

  });


  /* =======================================================
     RESET
     ======================================================= */

  if (resetFilters) {

    resetFilters.addEventListener(
      "click",
      () => {

        activeCategory = "All";

        if (searchInput) {
          searchInput.value = "";
        }

        if (clearSearch) {
          clearSearch.hidden = true;
        }

        filterButtons.forEach(
          (button) => {

            const active =
              button.dataset.category ===
              "All";

            button.classList.toggle(
              "active",
              active
            );

            button.setAttribute(
              "aria-pressed",
              active
                ? "true"
                : "false"
            );

          }
        );

        renderTools();

      }
    );

  }


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  function closeMenu() {

    if (
      !menuButton ||
      !mobileMenu
    ) {
      return;
    }

    mobileMenu.classList.remove(
      "open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.setAttribute(
      "aria-label",
      "Open navigation menu"
    );

    menuButton.innerHTML =
      '<i data-lucide="menu"></i>';

    document.body.classList.remove(
      "menu-open"
    );

    createIcons();

  }


  if (
    menuButton &&
    mobileMenu
  ) {

    menuButton.addEventListener(
      "click",
      () => {

        const opening =
          !mobileMenu.classList.contains(
            "open"
          );

        mobileMenu.classList.toggle(
          "open",
          opening
        );

        menuButton.setAttribute(
          "aria-expanded",
          opening
            ? "true"
            : "false"
        );

        menuButton.setAttribute(
          "aria-label",
          opening
            ? "Close navigation menu"
            : "Open navigation menu"
        );

        menuButton.innerHTML =
          opening
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';

        document.body.classList.toggle(
          "menu-open",
          opening
        );

        createIcons();

      }
    );


    mobileMenu
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener(
          "click",
          closeMenu
        );

      });


    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          mobileMenu.classList.contains(
            "open"
          )
        ) {

          closeMenu();

          menuButton.focus();

        }

      }
    );


    window.addEventListener(
      "resize",
      () => {

        if (
          window.innerWidth > 767
        ) {
          closeMenu();
        }

      }
    );

  }


  /* =======================================================
     YEAR
     ======================================================= */

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  /* =======================================================
     INITIAL LOAD
     ======================================================= */

  renderTools();

  /*
    Lucide script defer ke saath load hoti hai.
    Extra attempt external icon script ke
    slightly late load hone ko handle karta hai.
  */

  createIcons();

  window.addEventListener(
    "load",
    createIcons
  );

});
