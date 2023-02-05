const touchSubMenuAll = () => {
  const menuProductsBtn = document.querySelector("[data-menu-products]");
  const submenuProductsBtns = document.querySelectorAll(
    "[data-submenu-products]"
  );
  const submenuListItems = document.querySelectorAll(".submenu-list__item");
  const subSubmenuProductsBtns = document.querySelectorAll(
    "[data-sub-submenu-products]"
  );
  const subSubmenuListItems = document.querySelectorAll(
    ".sub-submenu-list__item"
  );

  menuProductsBtn.addEventListener("click", () => {
    if (menuProductsBtn.dataset.menuProducts === "close") {
      menuProductsBtn.dataset.menuProducts = "open";
      menuProductsBtn.closest(".submenu-item").classList.add("_hover");
    } else {
      menuProductsBtn.dataset.menuProducts = "close";
      menuProductsBtn.closest(".submenu-item").classList.remove("_hover");
      subSubmenuClose();
      submenuClose();
    }
  });

  const submenuProductsOpen = (items) => {
    items.forEach((item) => {
      item.classList.remove("_hover");
    });
  };

  const subSubmenuClose = () => {
    subSubmenuProductsBtns.forEach((btn) => {
      btn.dataset.subSubmenuProducts = "close";
      btn.closest(".submenu-item").classList.remove("_hover");
    });
  };

  const submenuClose = () => {
    submenuProductsBtns.forEach((btn) => {
      btn.dataset.submenuProducts = "close";
      btn.closest(".submenu-item").classList.remove("_hover");
    });
  };

  submenuProductsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target;
      if (target.dataset.submenuProducts === "close") {
        submenuProductsBtns.forEach((btn) => {
          btn.dataset.submenuProducts = "close";
        });

        subSubmenuClose();

        submenuProductsOpen(submenuListItems);
        target.dataset.submenuProducts = "open";
        btn.closest(".submenu-item").classList.add("_hover");
      } else {
        subSubmenuClose();

        target.dataset.submenuProducts = "close";
        btn.closest(".submenu-item").classList.remove("_hover");
      }
    });
  });

  subSubmenuProductsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const target = e.target;
      if (target.dataset.subSubmenuProducts === "close") {
        subSubmenuProductsBtns.forEach((btn) => {
          btn.dataset.subSubmenuProducts = "close";
        });

        submenuProductsOpen(subSubmenuListItems);
        target.dataset.subSubmenuProducts = "open";
        btn.closest(".submenu-item").classList.add("_hover");
      } else {
        target.dataset.subSubmenuProducts = "close";
        btn.closest(".submenu-item").classList.remove("_hover");
      }
    });
  });

  document.addEventListener("click", documentActions);

  function documentActions(e) {
    const targetElement = e.target;

    if (
      !targetElement.closest(".submenu-item") &&
      document.querySelectorAll(".submenu-item._hover").length > 0
    ) {
      document.querySelectorAll(".submenu-item._hover").forEach((item) => {
        item.classList.remove("_hover");
      });

      menuProductsBtn.dataset.menuProducts = "close";

      submenuProductsBtns.forEach((btn) => {
        btn.dataset.submenuProducts = "close";
      });

      subSubmenuProductsBtns.forEach((btn) => {
        btn.dataset.subSubmenuProducts = "close";
      });
    }
  }
};

export default touchSubMenuAll;
