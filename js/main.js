/* =========================================================
   ZAMMIOHUB HOMEPAGE
   Dynamic Calculator Rendering
   Search + Filters + Mobile Navigation
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {


  /* =======================================================
     1. CALCULATOR DATABASE
     ======================================================= */

  const tools = [

    {
      name: "Age Calculator",
      category: "Everyday",
      icon: "calendar",
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
      keywords: "auto car vehicle loan payment finance"
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
      keywords: "calorie calories health fitness food weight"
    },

    {
      name: "Compound Interest Calculator",
      category: "Finance",
      icon: "chart",
      url: "calculators/compound-interest-calculator.html",
      description: "Calculate compound growth on savings and investments.",
      keywords: "compound interest savings investment growth finance"
    },

    {
      name: "Discount Calculator",
      category: "Math",
      icon: "percent",
      url: "calculators/discount-calculator.html",
      description: "Calculate discounts, savings and final prices.",
      keywords: "discount sale saving price percentage math"
    },

    {
      name: "EMI Calculator",
      category: "Finance",
      icon: "card",
      url: "calculators/emi-calculator.html",
      description: "Calculate monthly EMI and total loan payments.",
      keywords: "emi loan monthly payment interest finance"
    },

    {
      name: "Loan Payment Calculator",
      category: "Finance",
      icon: "coins",
      url: "calculators/loan-payment-calculator.html",
      description: "Estimate loan payments, interest and total cost.",
      keywords: "loan payment borrowing interest finance"
    },

    {
      name: "Mortgage Calculator",
      category: "Finance",
      icon: "home",
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
      icon: "heart",
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
      icon: "wallet",
      url: "calculators/salary-calculator.html",
      description: "Compare salary across different pay periods.",
      keywords: "salary wage income pay weekly monthly annual finance"
    },

    {
      name: "Tax Calculator",
      category: "Finance",
      icon: "receipt",
      url: "calculators/tax-calculator.html",
      description: "Calculate tax and the final amount after tax.",
      keywords: "tax rate amount price finance"
    },

    {
      name: "Tip Calculator",
      category: "Everyday",
      icon: "dollar",
      url: "calculators/tip-calculator.html",
      description: "Calculate tips and split bills quickly.",
      keywords: "tip restaurant bill split everyday"
    }

  ];



  /* =======================================================
     2. ELEMENTS
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

  const currentYear =
    document.getElementById("currentYear");


  let activeCategory = "All";



  /* =======================================================
     3. INLINE SVG ICON LIBRARY
     ======================================================= */

  const icons = {


    calendar: `
      <svg viewBox="0 0 24 24">
        <rect
          x="3"
          y="5"
          width="18"
          height="16"
          rx="2"
        ></rect>
        <path d="M16 3v4"></path>
        <path d="M8 3v4"></path>
        <path d="M3 10h18"></path>
      </svg>
    `,


    car: `
      <svg viewBox="0 0 24 24">
        <path d="M5 17h14"></path>
        <path d="M6 17v2"></path>
        <path d="M18 17v2"></path>
        <path d="m4 14 2-6h12l2 6"></path>
        <path d="M3 14h18v3H3z"></path>
      </svg>
    `,


    activity: `
      <svg viewBox="0 0 24 24">
        <path d="M3 12h4l2-6 4 12 2-6h6"></path>
      </svg>
    `,


    flame: `
      <svg viewBox="0 0 24 24">
        <path d="M12 22c4 0 7-3 7-7 0-5-4-8-6-12-1 4-5 6-5 11 0 2 1 4 4 5"></path>
      </svg>
    `,


    chart: `
      <svg viewBox="0 0 24 24">
        <path d="M4 19V5"></path>
        <path d="M4 19h16"></path>
        <path d="m7 15 4-4 3 2 5-6"></path>
      </svg>
    `,


    percent: `
      <svg viewBox="0 0 24 24">
        <path d="m19 5-14 14"></path>
        <circle cx="7" cy="7" r="2"></circle>
        <circle cx="17" cy="17" r="2"></circle>
      </svg>
    `,


    card: `
      <svg viewBox="0 0 24 24">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        ></rect>
        <path d="M3 10h18"></path>
        <path d="M7 15h4"></path>
      </svg>
    `,


    coins: `
      <svg viewBox="0 0 24 24">
        <ellipse
          cx="12"
          cy="7"
          rx="7"
          ry="3"
        ></ellipse>
        <path d="M5 7v5c0 2 3 3 7 3s7-1 7-3V7"></path>
        <path d="M5 12v5c0 2 3 3 7 3s7-1 7-3v-5"></path>
      </svg>
    `,


    home: `
      <svg viewBox="0 0 24 24">
        <path d="m3 11 9-8 9 8"></path>
        <path d="M5 10v10h14V10"></path>
        <path d="M9 20v-6h6v6"></path>
      </svg>
    `,


    heart: `
      <svg viewBox="0 0 24 24">
        <path d="M20.8 4.6c-2-2-5.2-2-7.2 0L12 6.2l-1.6-1.6c-2-2-5.2-2-7.2 0s-2 5.2 0 7.2L12 20l8.8-8.2c2-2 2-5.2 0-7.2z"></path>
      </svg>
    `,


    landmark: `
      <svg viewBox="0 0 24 24">
        <path d="M3 10h18"></path>
        <path d="m4 8 8-5 8 5"></path>
        <path d="M5 10v8"></path>
        <path d="M9 10v8"></path>
        <path d="M15 10v8"></path>
        <path d="M19 10v8"></path>
        <path d="M3 21h18"></path>
      </svg>
    `,


    wallet: `
      <svg viewBox="0 0 24 24">
        <path d="M4 6h14a2 2 0 0 1 2 2v10H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
        <path d="M16 11h5v4h-5a2 2 0 0 1 0-4z"></path>
      </svg>
    `,


    receipt: `
      <svg viewBox="0 0 24 24">
        <path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1z"></path>
        <path d="M9 8h6"></path>
        <path d="M9 12h6"></path>
        <path d="M9 16h4"></path>
      </svg>
    `,


    dollar: `
      <svg viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="9"
        ></circle>
        <path d="M12 6v12"></path>
        <path d="M16 9h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
      </svg>
    `,


    arrow: `
      <svg viewBox="0 0 24 24">
        <path d="M5 12h14"></path>
        <path d="m14 7 5 5-5 5"></path>
      </svg>
    `

  };



  /* =======================================================
     4. CREATE CARD
     ======================================================= */

  function createToolCard(tool) {

    const icon =
      icons[tool.icon] ||
      icons.chart;


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
          ${icon}
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

          ${icons.arrow}

        </span>

      </a>

    `;

  }



  /* =======================================================
     5. GET FILTERED TOOLS
     ======================================================= */

  function getFilteredTools() {

    const query =
      searchInput
        ? searchInput.value
            .trim()
            .toLowerCase()
        : "";


    return tools.filter(function (tool) {


      const categoryMatches =

        activeCategory === "All" ||

        tool.category === activeCategory;


      const searchableText =

        (
          tool.name +
          " " +
          tool.category +
          " " +
          tool.description +
          " " +
          tool.keywords
        )
        .toLowerCase();


      const searchMatches =

        query === "" ||

        searchableText.includes(query);


      return (
        categoryMatches &&
        searchMatches
      );

    });

  }



  /* =======================================================
     6. RENDER CARDS
     ======================================================= */

  function renderTools() {


    if (!toolsGrid) {

      console.error(
        "ZammioHub: toolsGrid container was not found."
      );

      return;

    }


    const filteredTools =
      getFilteredTools();


    toolsGrid.innerHTML =
      filteredTools
        .map(createToolCard)
        .join("");


    /*
      IMPORTANT:
      The calculator section and heading
      are NEVER hidden.

      Only the cards change.
    */


    if (filteredTools.length === 0) {

      toolsGrid.style.display = "none";


      if (noResults) {

        noResults.hidden = false;

      }

    }

    else {

      toolsGrid.style.display = "grid";


      if (noResults) {

        noResults.hidden = true;

      }

    }

  }



  /* =======================================================
     7. SEARCH
     ======================================================= */

  if (searchInput) {


    searchInput.addEventListener(
      "input",
      function () {


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
      function () {


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



  /* =======================================================
     8. FILTER BUTTONS
     ======================================================= */

  filterButtons.forEach(
    function (button) {


      button.addEventListener(
        "click",
        function () {


          activeCategory =
            button.dataset.category ||
            "All";


          filterButtons.forEach(
            function (item) {


              const isActive =
                item === button;


              item.classList.toggle(
                "active",
                isActive
              );


              item.setAttribute(
                "aria-pressed",
                isActive
                  ? "true"
                  : "false"
              );

            }
          );


          renderTools();

        }
      );

    }
  );



  /* =======================================================
     9. RESET FILTER
     ======================================================= */

  if (resetFilters) {


    resetFilters.addEventListener(
      "click",
      function () {


        activeCategory = "All";


        if (searchInput) {

          searchInput.value = "";

        }


        if (clearSearch) {

          clearSearch.hidden = true;

        }


        filterButtons.forEach(
          function (button) {


            const isAll =

              button.dataset.category ===
              "All";


            button.classList.toggle(
              "active",
              isAll
            );


            button.setAttribute(
              "aria-pressed",
              isAll
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
     10. MOBILE HAMBURGER MENU
     ======================================================= */

  const menuIcon = `

    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >

      <path d="M4 7h16"></path>

      <path d="M4 12h16"></path>

      <path d="M4 17h16"></path>

    </svg>

  `;


  const closeIcon = `

    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >

      <path d="M6 6l12 12"></path>

      <path d="M18 6 6 18"></path>

    </svg>

  `;



  function closeMobileMenu() {


    if (
      !menuButton ||
      !mobileMenu
    ) {
      return;
    }


    mobileMenu.classList.remove(
      "open"
    );


    menuButton.innerHTML =
      menuIcon;


    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );


    menuButton.setAttribute(
      "aria-label",
      "Open navigation menu"
    );


    document.body.classList.remove(
      "menu-open"
    );

  }



  if (
    menuButton &&
    mobileMenu
  ) {


    /*
      Ensure hamburger is visible
      immediately on mobile.
    */

    menuButton.innerHTML =
      menuIcon;


    menuButton.addEventListener(
      "click",
      function () {


        const isOpen =
          mobileMenu.classList.contains(
            "open"
          );


        if (isOpen) {

          closeMobileMenu();

        }

        else {


          mobileMenu.classList.add(
            "open"
          );


          menuButton.innerHTML =
            closeIcon;


          menuButton.setAttribute(
            "aria-expanded",
            "true"
          );


          menuButton.setAttribute(
            "aria-label",
            "Close navigation menu"
          );


          document.body.classList.add(
            "menu-open"
          );

        }

      }
    );



    mobileMenu
      .querySelectorAll("a")
      .forEach(
        function (link) {


          link.addEventListener(
            "click",
            closeMobileMenu
          );

        }
      );



    document.addEventListener(
      "keydown",
      function (event) {


        if (
          event.key === "Escape"
        ) {

          closeMobileMenu();

        }

      }
    );



    window.addEventListener(
      "resize",
      function () {


        if (
          window.innerWidth > 767
        ) {

          closeMobileMenu();

        }

      }
    );

  }



  /* =======================================================
     11. CURRENT YEAR
     ======================================================= */

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }



  /* =======================================================
     12. INITIAL LOAD

     THIS IS THE IMPORTANT FIX.

     All 15 cards are rendered immediately
     when the homepage opens.
     ======================================================= */

  activeCategory = "All";

  renderTools();


});
