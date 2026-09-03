document.addEventListener("DOMContentLoaded", function () {


  /* =======================================================
     1. CENTRAL TOOLS DATABASE
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
     2. SVG ICONS
     ======================================================= */

  const icons = {

    calendar: `
      <svg viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
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
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <path d="M3 10h18"></path>
        <path d="M7 15h4"></path>
      </svg>
    `,

    coins: `
      <svg viewBox="0 0 24 24">
        <ellipse cx="12" cy="7" rx="7" ry="3"></ellipse>
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
        <circle cx="12" cy="12" r="9"></circle>
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
     3. ELEMENTS
     ======================================================= */

  const toolsGrid =
    document.getElementById("toolsGrid");

  const searchInput =
    document.getElementById("searchInput");

  const clearSearch =
    document.getElementById("clearSearch");

  const autocompleteList =
    document.getElementById("autocompleteList");

  const filterButtons =
    document.querySelectorAll(".filter-button");

  const noResults =
    document.getElementById("noResults");

  const resetFilters =
    document.getElementById("resetFilters");

  const menuButton =
    document.getElementById("menuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const currentYear =
    document.getElementById("currentYear");

  const brandDropdownWrap =
    document.getElementById("brandDropdownWrap");

  const brandDropdownButton =
    document.getElementById("brandDropdownButton");

  const brandDropdown =
    document.getElementById("brandDropdown");

  const dropdownCategoryButtons =
    document.querySelectorAll("[data-dropdown-category]");


  let activeCategory = "All";

  let autocompleteIndex = -1;



  /* =======================================================
     4. TOOL CARD
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
     5. FILTER TOOLS
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
        ).toLowerCase();

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
     6. RENDER TOOLS
     ======================================================= */

  function renderTools() {

    if (!toolsGrid) {
      return;
    }

    const filteredTools =
      getFilteredTools();

    toolsGrid.innerHTML =
      filteredTools
        .map(createToolCard)
        .join("");

    if (filteredTools.length === 0) {

      toolsGrid.style.display =
        "none";

      if (noResults) {
        noResults.hidden = false;
      }

    } else {

      toolsGrid.style.display =
        "grid";

      if (noResults) {
        noResults.hidden = true;
      }

    }

  }



  /* =======================================================
     7. ACTIVE FILTER STATE
     ======================================================= */

  function setActiveCategory(category) {

    activeCategory = category;

    filterButtons.forEach(function (button) {

      const isActive =
        button.dataset.category === category;

      button.classList.toggle(
        "active",
        isActive
      );

      button.setAttribute(
        "aria-pressed",
        isActive
          ? "true"
          : "false"
      );

    });

    renderTools();

  }



  /* =======================================================
     8. AUTOCOMPLETE
     ======================================================= */

  function getSuggestions(query) {

    const cleanQuery =
      query
        .trim()
        .toLowerCase();

    if (!cleanQuery) {
      return [];
    }

    return tools
      .filter(function (tool) {

        const searchable =
          (
            tool.name +
            " " +
            tool.category +
            " " +
            tool.keywords
          ).toLowerCase();

        return searchable.includes(
          cleanQuery
        );

      })
      .slice(0, 6);

  }



  function closeAutocomplete() {

    autocompleteIndex = -1;

    if (autocompleteList) {

      autocompleteList.hidden = true;

      autocompleteList.innerHTML = "";

    }

    if (searchInput) {

      searchInput.setAttribute(
        "aria-expanded",
        "false"
      );

      searchInput.removeAttribute(
        "aria-activedescendant"
      );

    }

  }



  function renderAutocomplete() {

    if (
      !autocompleteList ||
      !searchInput
    ) {
      return;
    }

    const suggestions =
      getSuggestions(
        searchInput.value
      );

    autocompleteIndex = -1;

    if (
      suggestions.length === 0
    ) {

      closeAutocomplete();

      return;

    }

    autocompleteList.innerHTML =
      suggestions
        .map(function (tool, index) {

          const icon =
            icons[tool.icon] ||
            icons.chart;

          return `
            <button
              type="button"
              class="autocomplete-item"
              role="option"
              id="autocomplete-option-${index}"
              data-url="${tool.url}"
              data-name="${tool.name}"
            >

              <span
                class="autocomplete-icon"
                aria-hidden="true"
              >
                ${icon}
              </span>

              <span class="autocomplete-text">

                <strong>
                  ${tool.name}
                </strong>

                <span>
                  ${tool.category}
                </span>

              </span>

              <span
                class="autocomplete-arrow"
                aria-hidden="true"
              >
                ${icons.arrow}
              </span>

            </button>
          `;

        })
        .join("");

    autocompleteList.hidden = false;

    searchInput.setAttribute(
      "aria-expanded",
      "true"
    );

  }



  function selectAutocompleteItem(
    item
  ) {

    if (!item) {
      return;
    }

    const url =
      item.dataset.url;

    if (url) {
      window.location.href = url;
    }

  }



  function updateKeyboardSelection() {

    if (!autocompleteList) {
      return;
    }

    const items =
      autocompleteList
        .querySelectorAll(
          ".autocomplete-item"
        );

    items.forEach(
      function (item, index) {

        const active =
          index === autocompleteIndex;

        item.classList.toggle(
          "keyboard-active",
          active
        );

      }
    );

    if (
      autocompleteIndex >= 0 &&
      items[autocompleteIndex] &&
      searchInput
    ) {

      searchInput.setAttribute(
        "aria-activedescendant",
        items[autocompleteIndex].id
      );

      items[autocompleteIndex]
        .scrollIntoView({
          block: "nearest"
        });

    } else if (searchInput) {

      searchInput.removeAttribute(
        "aria-activedescendant"
      );

    }

  }



  /* =======================================================
     9. SEARCH EVENTS
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

        renderAutocomplete();

      }
    );


    searchInput.addEventListener(
      "keydown",
      function (event) {

        if (
          !autocompleteList ||
          autocompleteList.hidden
        ) {
          return;
        }

        const items =
          autocompleteList
            .querySelectorAll(
              ".autocomplete-item"
            );

        if (!items.length) {
          return;
        }


        if (
          event.key === "ArrowDown"
        ) {

          event.preventDefault();

          autocompleteIndex =
            Math.min(
              autocompleteIndex + 1,
              items.length - 1
            );

          updateKeyboardSelection();

        }


        else if (
          event.key === "ArrowUp"
        ) {

          event.preventDefault();

          autocompleteIndex =
            Math.max(
              autocompleteIndex - 1,
              0
            );

          updateKeyboardSelection();

        }


        else if (
          event.key === "Enter" &&
          autocompleteIndex >= 0
        ) {

          event.preventDefault();

          selectAutocompleteItem(
            items[autocompleteIndex]
          );

        }


        else if (
          event.key === "Escape"
        ) {

          closeAutocomplete();

        }

      }
    );

  }



  /* =======================================================
     10. AUTOCOMPLETE CLICK
     ======================================================= */

  if (autocompleteList) {

    autocompleteList.addEventListener(
      "click",
      function (event) {

        const item =
          event.target.closest(
            ".autocomplete-item"
          );

        if (item) {

          selectAutocompleteItem(
            item
          );

        }

      }
    );

  }



  /* =======================================================
     11. CLEAR SEARCH
     ======================================================= */

  if (clearSearch) {

    clearSearch.addEventListener(
      "click",
      function () {

        if (!searchInput) {
          return;
        }

        searchInput.value = "";

        clearSearch.hidden = true;

        closeAutocomplete();

        searchInput.focus();

        renderTools();

      }
    );

  }



  /* =======================================================
     12. FILTER BUTTONS
     ======================================================= */

  filterButtons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          setActiveCategory(
            button.dataset.category ||
            "All"
          );

        }
      );

    }
  );



  /* =======================================================
     13. RESET FILTER
     ======================================================= */

  if (resetFilters) {

    resetFilters.addEventListener(
      "click",
      function () {

        if (searchInput) {

          searchInput.value = "";

        }

        if (clearSearch) {

          clearSearch.hidden = true;

        }

        closeAutocomplete();

        setActiveCategory("All");

      }
    );

  }



  /* =======================================================
     14. GEMINI STYLE BRAND DROPDOWN
     ======================================================= */

  function closeBrandDropdown() {

    if (
      !brandDropdown ||
      !brandDropdownButton
    ) {
      return;
    }

    brandDropdown.hidden = true;

    brandDropdownButton.classList.remove(
      "open"
    );

    brandDropdownButton.setAttribute(
      "aria-expanded",
      "false"
    );

  }



  function openBrandDropdown() {

    if (
      !brandDropdown ||
      !brandDropdownButton
    ) {
      return;
    }

    brandDropdown.hidden = false;

    brandDropdownButton.classList.add(
      "open"
    );

    brandDropdownButton.setAttribute(
      "aria-expanded",
      "true"
    );

  }



  if (
    brandDropdownButton &&
    brandDropdown
  ) {

    brandDropdownButton.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        const isOpen =
          !brandDropdown.hidden;

        if (isOpen) {

          closeBrandDropdown();

        } else {

          closeMobileMenu();

          openBrandDropdown();

        }

      }
    );

  }



  if (brandDropdown) {

    brandDropdown.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

      }
    );

  }



  dropdownCategoryButtons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const category =
            button.dataset
              .dropdownCategory;

          if (!category) {
            return;
          }

          setActiveCategory(
            category
          );

          closeBrandDropdown();

          document
            .getElementById(
              "calculators"
            )
            ?.scrollIntoView({
              behavior: "smooth"
            });

        }
      );

    }
  );



  /* =======================================================
     15. MOBILE MENU
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

    menuButton.innerHTML =
      menuIcon;

    menuButton.addEventListener(
      "click",
      function () {

        const isOpen =
          mobileMenu.classList.contains(
            "open"
          );

        closeBrandDropdown();

        if (isOpen) {

          closeMobileMenu();

        } else {

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

  }



  /* =======================================================
     16. CLICK OUTSIDE
     ======================================================= */

  document.addEventListener(
    "click",
    function (event) {

      if (
        brandDropdownWrap &&
        !brandDropdownWrap.contains(
          event.target
        )
      ) {

        closeBrandDropdown();

      }


      if (
        autocompleteList &&
        searchInput &&
        !autocompleteList.contains(
          event.target
        ) &&
        event.target !== searchInput
      ) {

        closeAutocomplete();

      }

    }
  );



  /* =======================================================
     17. ESCAPE KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape"
      ) {

        closeBrandDropdown();

        closeMobileMenu();

        closeAutocomplete();

      }

    }
  );



  /* =======================================================
     18. RESIZE
     ======================================================= */

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



  /* =======================================================
     19. YEAR
     ======================================================= */

  if (currentYear) {

    currentYear.textContent =
      new Date().getFullYear();

  }



  /* =======================================================
     20. INITIAL LOAD
     ======================================================= */

  activeCategory = "All";

  renderTools();


});
