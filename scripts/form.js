document.addEventListener("DOMContentLoaded", () => {
    // Array de produtos
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    // Seleciona o elemento <select>
    const productSelect = document.getElementById("productName");

    // Adiciona as opções dinamicamente
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Define o valor como o ID do produto
        option.textContent = product.name; // Define o texto como o nome do produto
        productSelect.appendChild(option);
    });

    // Atualiza o ano atual e a última modificação no footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
