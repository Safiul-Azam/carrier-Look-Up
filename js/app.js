// TOGGLE FOR MENU PROFILE MENU AND SIDE MENU
document.addEventListener("DOMContentLoaded", () => {
  const nestedIcon = document.getElementById("nested-icon");
  const nestedMenuItem = document.getElementById("nested-menu-item");
  const angleDown = document.getElementById("angle-down");
  const userMenu = document.getElementById("user-menu-toggle");

  nestedIcon.addEventListener("mousedown", () => {
    nestedMenuItem.classList.toggle("nested-menu-item");
  });
  angleDown.addEventListener("mousedown", () => {
    userMenu.classList.toggle("user-dropdown");
  });
});

// active menu set
document.querySelectorAll(".menu-style").forEach((menu) => {
  menu.addEventListener("click", () => {
    document.querySelectorAll(".menu-style").forEach((restMenu) => {
      restMenu.classList.remove("active");
    });
    menu.classList.add("active");
  });
});

// single active credit cart
document.querySelectorAll(".single-credit").forEach((credit) => {
  credit.addEventListener("click", () => {
    document.querySelectorAll(".single-credit").forEach((restCredit) => {
      restCredit.classList.remove("active");
    });
    credit.classList.add("active");
  });
});

//active setting menu
document.querySelectorAll(".single-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".single-tab").forEach((restTab) => {
      restTab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
// setting switch btn toggle
const toggleBtn = document.querySelectorAll(".toggle-btn");
toggleBtn.forEach((toggle) =>
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  })
);

// hum burger menu set
document.addEventListener("DOMContentLoaded", () => {
  const humBerMenu = document.querySelector(".bar-menu-icon");
  const sideMenuBar = document.querySelector(".side-menubar");
  const profileSection = document.querySelector(".profile-section");

  humBerMenu.addEventListener("mousedown", () => {
    sideMenuBar.classList.toggle("active");
    profileSection.classList.toggle("deactivate");
  });
});
