document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelector(
    "#home .aside-content .header-bars-mobile"
  ) as HTMLButtonElement;
  const heaedr_menu = document.querySelector(
    "#home .aside-content .header-menu-mobile"
  ) as HTMLDivElement;

  bars.addEventListener("click", () => {
    heaedr_menu.classList.toggle("active")
  });
});
