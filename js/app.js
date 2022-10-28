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
 document.querySelectorAll('a').forEach(item => {
  item.addEventListener('click', event => {
    if(item.class === "active"){
    item.classList.remove("active");
    }
    item.classList.add("active");

  });
})

//active sitting menu
