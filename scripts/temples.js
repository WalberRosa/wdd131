// Dynamic year and last modified
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");

    yearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
});

// Toggle menu for mobile
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});
