const kentta = document.getElementById("kentta");
const pelaaja = document.getElementById("pelaaja");

const NOPEUS = 0.4;
let x = 50;
let suunta = 0;

document.addEventListener("keydown", (tapahtuma) => {
    if (tapahtuma.key === "ArrowLeft") suunta = -1;
    if (tapahtuma.key === "ArrowRight") suunta = 1;
});

document.addEventListener("keyup", () => {
    suunta = 0;
});

kentta.addEventListener("pointerdown", (tapahtuma) => {
    const reunat = kentta.getBoundingClientRect();
    const kohta = (tapahtuma.clientX - reunat.left) / reunat.width * 100;
    suunta = kohta < x ? -1 : 1;
});

window.addEventListener("pointerup", () => {
    suunta = 0;
});

function paivita() {
    x = x + suunta * NOPEUS;

    if (x < 4.3) x = 4.3;
    if (x > 95.7) x = 95.7;

    pelaaja.style.left = x + "%";
    requestAnimationFrame(paivita);
}

paivita();