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


// =====================================================
// DOORLOPENDE LIJN: teken de lijn mee met het scrollen
// =====================================================

const continuousLine = document.querySelector(".continuous-line path");

if (continuousLine) {

    const lineLength = continuousLine.getTotalLength();

    continuousLine.style.strokeDasharray = lineLength;
    continuousLine.style.strokeDashoffset = lineLength;

    const drawLine = () => {

        const scrollTop = window.scrollY;
        const documentHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = documentHeight > 0
            ? Math.min(1, Math.max(0, scrollTop / documentHeight))
            : 0;

        continuousLine.style.strokeDashoffset =
            lineLength * (1 - progress);
    };

    window.addEventListener("scroll", drawLine, { passive: true });
    window.addEventListener("resize", drawLine);

    drawLine();
}
