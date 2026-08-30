"script.js"

// Automatisch het huidige jaar in de footer zetten

document.getElementById("year").textContent =
    new Date().getFullYear();


// Mobiel menu

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

});


// Mobiel menu sluiten nadat een link is aangeklikt

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});
