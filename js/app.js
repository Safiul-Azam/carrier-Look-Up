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
document.querySelectorAll('.menu-style').forEach(menu => {
  menu.addEventListener('click',()=>{
    document.querySelectorAll('.menu-style').forEach(restMenu => {
      restMenu.classList.remove('active')
    })
    menu.classList.add('active')
  })
  console.log(menu)
})

//active setting menu
document.querySelectorAll(".single-tab").forEach(item => {
  item.addEventListener('click', event => {
    document.querySelectorAll(".single-tab").forEach(i => {i.classList.remove('active')})
    item.classList.add('active')
  })
})
// setting switch btn toggle
const toggleBtn = document.querySelectorAll(".toggle-btn");
toggleBtn.forEach((toggle) =>
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  })
);

// single credit active cart

const singleCredit = document.querySelectorAll(".single-credit");
singleCredit.forEach((single) => single.addEventListener("click", () => {
  single.classList.toggle('active')
}));
document.addEventListener("DOMContentLoaded", () => {
  const humBerMenu = document.querySelector(".bar-menu-icon");
  const sideMenuBar = document.querySelector(".side-menubar");
  const profileSection = document.querySelector('.profile-section')

  humBerMenu.addEventListener("mousedown", () => {
    sideMenuBar.classList.toggle("active");
    profileSection.classList.toggle('deactivate')
  });
});
