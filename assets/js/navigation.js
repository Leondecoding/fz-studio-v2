(() => {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  const header = document.querySelector(".site-header");

  if (toggle && nav) {
    const closeNav = (returnFocus = false) => {
      const wasOpen = nav.classList.contains("is-open");

      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");

      if (returnFocus && wasOpen) {
        toggle.focus();
      }
    };

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeNav());
    });

    document.addEventListener("click", (event) => {
      if (
        nav.classList.contains("is-open") &&
        header &&
        !header.contains(event.target)
      ) {
        closeNav();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav(true);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        closeNav();
      }
    });
  }

  const bagButton = document.querySelector("[data-bag-placeholder]");
  const bagPanel = document.getElementById("bag-placeholder");
  const closeButtons = document.querySelectorAll("[data-close-bag]");

  if (bagButton && bagPanel) {
    const openBag = () => {
      bagPanel.hidden = false;
      document.body.style.overflow = "hidden";
    };

    const closeBag = () => {
      bagPanel.hidden = true;
      document.body.style.overflow = "";
    };

    bagButton.addEventListener("click", openBag);
    closeButtons.forEach((button) => button.addEventListener("click", closeBag));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !bagPanel.hidden) closeBag();
    });
  }
})();
