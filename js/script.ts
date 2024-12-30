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

  // Super Deals
  const activeSections=document.querySelectorAll("#super-deals .super-deals-slider-and-products .super-deals-products .super-deals-products-filter span")
  activeSections.forEach(section=>{
    section.addEventListener("click",()=>{
      activeSections.forEach(activeSection=>{
        if(activeSection.className.includes("active")){
          activeSection.classList.remove("active")
        }
        section.classList.add("active")
      })
    })
  })
});


