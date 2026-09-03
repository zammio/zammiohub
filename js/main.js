document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     ZAMMIOHUB
     Homepage V2
     Dynamic Tools + Search + Filters
     ========================================================= */


  /* =========================================================
     1. TOOLS DATABASE

     Future calculator add karne ke liye sirf yahan
     ek new object add karna hoga.
     ========================================================= */

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
      description: "Estimate car loan payments and borrowing costs.",
      keywords: "auto car vehicle loan finance payment"
    },

    {
      name: "BMI Calculator",
      category: "Health",
      icon: "activity",
      url: "calculators/bmi-calculator.html",
      description: "Calculate your BMI using metric or US units.",
      keywords: "bmi body mass index weight height health"
    },

    {
      name: "Calorie Calculator",
      category: "Health",
      icon: "flame",
      url: "calculators/calorie-calculator.html",
      description: "Estimate your daily calorie needs.",
      keywords: "calorie calories health fitness food energy weight"
    },

    {
      name: "Compound Interest Calculator",
      category: "Finance",
      icon: "chart-no-axes-combined",
      url: "calculators/compound-interest-calculator.html",
      description: "Calculate compound growth on savings or investments.",
      keywords: "compound interest investment savings growth finance"
    },

    {
      name: "Discount Calculator",
      category: "Math",
      icon: "badge-percent",
      url: "calculators/discount-calculator.html",
      description: "Find your discount, savings and final sale price.",
      keywords: "discount sale price saving percentage math"
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
      keywords: "mortgage house home loan payment finance property"
    },

    {
      name: "Percentage Calculator",
      category: "Math",
      icon: "percent",
      url: "calculators/percentage-calculator.html",
      description: "Calculate percentages, increases and decreases.",
      keywords: "percentage percent increase decrease change math"
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
      keywords: "retirement pension savings investment finance future"
    },

    {
      name: "Salary Calculator",
      category: "Finance",
      icon: "wallet-cards",
      url: "calculators/salary-calculator.html",
      description: "Convert and compare salary across different pay periods.",
      keywords: "salary income wage monthly weekly annual finance pay"
    },

    {
      name: "Tax Calculator",
      category: "Finance",
      icon: "receipt-text",
      url: "calculators/tax-calculator.html",
      description: "Calculate tax and the amount after tax.",
      keywords: "tax rate amount price finance calculation"
    },

    {
      name: "Tip Calculator",
      category: "Everyday",
      icon: "circle-dollar-sign",
      url: "calculators/tip-calculator.html",
      description: "Calculate tips and split bills quickly.",
      keywords: "tip bill restaurant split money everyday"
    }

  ];



  /* =========================================================
     2. ELEMENTS
     ========================================================= */

  const toolsGrid =
    document.querySelector("#toolsGrid");

  const searchInput =
    document.querySelector("#searchInput");

  const clearSearch =
    document.querySelector("#clearSearch");

  const filterButtons =
    document.querySelectorAll(".filter-btn");

  const resultsCount =
    document.querySelector("#resultsCount");

  const allCount =
    document.querySelector("#allCount");

  const noResults =
    document.querySelector("#noResults");

  const resetFilters =
    document.querySelector("#resetFilters");

  const menuButton =
    document.querySelector("#menuBtn");

  const mobileMenu =
    document.querySelector("#mobileMenu");

  const currentYear =
    document.querySelector("#currentYear");


  let activeCategory = "All";



  /* =========================================================
     3. SAFE HTML
     ========================================================= */

  const escapeHTML = (value) => {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  };



  /* =========================================================
     4. CREATE TOOL CARD
     ========================================================= */

  const createToolCard = (tool) => {

    const name =
      escapeHTML(tool.name);

    const category =
      escapeHTML(tool.category);

    const description =
      escapeHTML(tool.description);

    const url =
      escapeHTML(tool.url);

    const icon =
      escapeHTML(tool.icon);


    return `
      <a
        href="${url}"
        class="tool-card"
        aria-label="Open ${name}"
      >

        <div
          class="tool-icon"
          aria-hidden="true"
        >
          <i data-lucide="${icon}"></i>
        </div>


        <span class="tool-category">
          ${category}
        </span>


        <h3>
          ${name}
        </h3>


        <p>
          ${description}
        </p>


        <span class="tool-link">
          Open calculator
          <i
            data-lucide="arrow-right"
            aria-hidden="true"
          ></i>
        </span>

      </a>
    `;

  };



  /* =========================================================
     5. INITIALIZE LUCIDE ICONS
     ========================================================= */

  const refreshIcons = () => {

    if (
      window.lucide &&
      typeof window.lucide.createIcons === "function"
    ) {

      window.lucide.createIcons();

    }

  };



  /* =========================================================
     6. FILTER TOOLS
     ========================================================= */

  const getFilteredTools = () => {

    const searchTerm =
      searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";


    return tools.filter((tool) => {

      const categoryMatches =
        activeCategory === "All" ||
        tool.category === activeCategory;


      const searchableText = `
        ${tool.name}
        ${tool.category}
        ${tool.description}
        ${tool.keywords || ""}
      `.toLowerCase();


      const searchMatches =
        searchTerm === "" ||
        searchableText.includes(searchTerm);


      return categoryMatches && searchMatches;

    });

  };



  /* =========================================================
     7. RENDER TOOLS
     ========================================================= */

  const renderTools = () => {

    if (!toolsGrid) {
      return;
    }


    const filteredTools =
      getFilteredTools();


    toolsGrid.innerHTML =
      filteredTools
        .map(createToolCard)
        .join("");


    /* Results counter */

    if (resultsCount) {

      resultsCount.textContent =
        `${filteredTools.length} ${
          filteredTools.length === 1
            ? "calculator"
            : "calculators"
        }`;

    }


    /* No results */

    if (noResults) {

      noResults.hidden =
        filteredTools.length !== 0;

    }


    /* Hide empty grid */

    toolsGrid.hidden =
      filteredTools.length === 0;


    /* Rebuild Lucide icons after
       dynamic HTML is inserted */

    refreshIcons();

  };



  /* =========================================================
     8. SET TOTAL COUNT AUTOMATICALLY
     ========================================================= */

  if (allCount) {

    allCount.textContent =
      tools.length;

  }



  /* =========================================================
     9. SEARCH
     ========================================================= */

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



  /* =========================================================
     10. CLEAR SEARCH
     ========================================================= */

  if (clearSearch) {

    clearSearch.addEventListener(
      "click",
      () => {

        if (!searchInput) {
          return;
        }


        searchInput.value = "";

        clearSearch.hidden = true;

        searchInput.focus();

        renderTools();

      }
    );

  }



  /* =========================================================
     11. CATEGORY FILTERS
     ========================================================= */

  filterButtons.forEach((button) => {

    button.addEventListener(
      "click",
      () => {

        activeCategory =
          button.dataset.category || "All";


        filterButtons.forEach((item) => {

          const isActive =
            item === button;


          item.classList.toggle(
            "active",
            isActive
          );


          item.setAttribute(
            "aria-pressed",
            String(isActive)
          );

        });


        renderTools();

      }
    );

  });



  /* =========================================================
     12. RESET SEARCH + FILTER
     ========================================================= */

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


        filterButtons.forEach((button) => {

          const isAll =
            button.dataset.category === "All";


          button.classList.toggle(
            "active",
            isAll
          );


          button.setAttribute(
            "aria-pressed",
            String(isAll)
          );

        });


        renderTools();


        if (searchInput) {

          searchInput.focus();

        }

      }
    );

  }



  /* =========================================================
     13. MOBILE MENU
     ========================================================= */

  const closeMobileMenu = () => {

    if (!mobileMenu || !menuButton) {
      return;
    }


    mobileMenu.classList.remove("active");


    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );


    document.body.classList.remove(
      "menu-open"
    );


    const menuIcon =
      menuButton.querySelector("svg");


    if (menuIcon) {

      menuIcon.setAttribute(
        "data-lucide",
        "menu"
      );

      refreshIcons();

    }

  };



  if (menuButton && mobileMenu) {

    menuButton.addEventListener(
      "click",
      () => {

        const isOpen =
          mobileMenu.classList.toggle(
            "active"
          );


        menuButton.setAttribute(
          "aria-expanded",
          String(isOpen)
        );


        document.body.classList.toggle(
          "menu-open",
          isOpen
        );


        /*
          Replace button content so
          Menu becomes X when open.
        */

        menuButton.innerHTML =
          isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';


        menuButton.setAttribute(
          "aria-label",
          isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        );


        refreshIcons();

      }
    );



    /* Close after clicking link */

    mobileMenu
      .querySelectorAll("a")
      .forEach((link) => {

        link.addEventListener(
          "click",
          closeMobileMenu
        );

      });



    /* Escape key */

    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          mobileMenu.classList.contains(
            "active"
          )
        ) {

          closeMobileMenu();

          menuButton.focus();

        }

      }
    );



    /* Desktop resize */

    window.addEventListener(
      "resize",
      () => {

        if (window.innerWidth > 767) {

          closeMobileMenu();

        }

      }
    );

  }



  /* =========================================================
     14. CURRENT YEAR
     ========================================================= */

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }



  /* =========================================================
     15. INITIAL PAGE RENDER
     ========================================================= */

  renderTools();

  refreshIcons();

});
