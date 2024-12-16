// Dynamic year and last modified
document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");
    yearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
});

// Temple data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
          // Additional new temples
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, October, 30",
        area: 59000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/2-Rome-Temple-2190090.jpg"

    },
];

// DOM elements
const container = document.getElementById("templesContainer");
const menuButtons = document.querySelectorAll("nav a");

// Render temples
const renderTemples = (filteredTemples) => {
    container.innerHTML = "";
    filteredTemples.forEach(temple => {
        const card = `
            <figure>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p>Location: ${temple.location}</p>
                    <p>Dedicated: ${temple.dedicated}</p>
                    <p>Area: ${temple.area} sq ft</p>
                </figcaption>
            </figure>`;
        container.insertAdjacentHTML("beforeend", card);
    });
};

// Filter logic
const filterTemples = (criteria) => {
    switch(criteria) {
        case "old": return temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
        case "new": return temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
        case "large": return temples.filter(t => t.area > 90000);
        case "small": return temples.filter(t => t.area < 10000);
        default: return temples;
    }
};

// Menu click events
menuButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = e.target.id;
        const filteredTemples = filterTemples(filter);
        renderTemples(filteredTemples);
    });
});

// Initial render
renderTemples(temples);
