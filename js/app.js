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
    userMenu.classList.toggle("user-menu-toggle");
  });
});
// active menu set
document.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (item.class === "active") {
      item.classList.remove("active");
    }
    item.classList.add("active");
  });
});

//active setting menu
document.querySelectorAll(".single-menu").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (item.class === "active") {
      item.classList.remove("active");
    }
    item.classList.add("active");
  });
});
// setting switch btn toggle
const toggleBtn = document.querySelectorAll(".toggle-btn");
toggleBtn.forEach((toggle) =>
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  })
);
console.log(toggleBtn);
