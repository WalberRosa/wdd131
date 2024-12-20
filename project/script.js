// Dynamic Year and Last Modified in Footer
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("currentYear");
    const lastModifiedElement = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${lastModified}`;
    }
});

// Active Navigation Link Highlight with Event Delegation
const navContainer = document.querySelector("nav ul");
if (navContainer) {
    navContainer.addEventListener("click", event => {
        if (event.target.tagName === "A") {
            const navLinks = navContainer.querySelectorAll("a");
            navLinks.forEach(nav => nav.classList.remove("active"));
            event.target.classList.add("active");
        }
    });
}

// Recipes Page - Filter Recipes by Category (Event Delegation)
const filterContainer = document.querySelector(".filters");
if (filterContainer) {
    filterContainer.addEventListener("click", event => {
        if (event.target.classList.contains("filter-button")) {
            const category = event.target.dataset.category;
            const recipeCards = document.querySelectorAll(".recipe-card");

            recipeCards.forEach(card => {
                card.style.display =
                    category === "all" || card.dataset.category === category
                        ? "block"
                        : "none";
            });

            // Highlight active filter button
            const filterButtons = filterContainer.querySelectorAll(".filter-button");
            filterButtons.forEach(btn => btn.classList.remove("active"));
            event.target.classList.add("active");
        }
    });
}

// Recipes Page - Open Recipe Dynamically
const recipeButtons = document.querySelectorAll(".view-recipe");
recipeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const recipePage = button.dataset.recipe;
        if (recipePage) {
            window.location.href = recipePage;
        }
    });
});

// Contact Page - Enhanced Form Validation with Inline Feedback
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", event => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const errorMessage = document.getElementById("formError");
        if (!name || !email || !message) {
            if (errorMessage) errorMessage.textContent = "All fields are required.";
            event.preventDefault(); // Prevent form submission
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            if (errorMessage) errorMessage.textContent = "Please enter a valid email address.";
            event.preventDefault(); // Prevent form submission
        } else {
            alert("Thank you for your message!");
        }
    });
}

// About Page - Toggle FAQ Sections with ARIA
const faqToggles = document.querySelectorAll(".faq-toggle");
faqToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling;

        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !isExpanded);

        content.style.maxHeight = isExpanded ? null : `${content.scrollHeight}px`;
        toggle.classList.toggle("open");
    });
});

// Newsletter Subscription - Enhanced Confirmation
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
    newsletterForm.addEventListener("submit", event => {
        const name = document.getElementById("newsletterName").value.trim();
        const email = document.getElementById("newsletterEmail").value.trim();

        if (!name || !email) {
            alert("Both name and email are required to subscribe.");
            event.preventDefault();
        } else {
            alert(`Thank you for subscribing, ${name}!`);
        }
    });
}
