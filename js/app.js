const nestedIcon = document.getElementById("nested-icon");
const nestedMenuItem = document.getElementById("nested-menu-item");

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

let activeEL;

document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", onButtonClick);
});

function onButtonClick(e) {
  if (activeEL) {
    if (activeEL != e.currentTarget) {
      activeEL.classList.remove("active");
    }
  }

  activeEL = e.currentTarget;
  activeEL.classList.add("active");
}
