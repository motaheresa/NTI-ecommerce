"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelector("#home .aside-content .header-bars-mobile");
    const heaedr_menu = document.querySelector("#home .aside-content .header-menu-mobile");
    bars.addEventListener("click", () => {
        heaedr_menu.classList.toggle("active");
    });
});
