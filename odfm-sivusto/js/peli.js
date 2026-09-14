const kentta = document.getElementById("kentta");
const pelaaja = document.getElementById("pelaaja");

const NOPEUS = 0.4;
const RUUTUVALI = 180;

let x = 50;
let suunta = 0;
let katse = 1;
let pelialkanut = false;
let ruutu = 0;
let viimeVaihto = 0;

function vaihdaKuva(nimi) {
    pelaaja.style.backgroundImage = 'url("../images/' + nimi + '.png")';
}

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

function paivita(aika) {
    if (suunta !== 0) {
        if (!pelialkanut) {
            pelialkanut = true;
            vaihdaKuva("dante-lyhty-a");
        }

        katse = suunta;

        if (aika - viimeVaihto > RUUTUVALI) {
            viimeVaihto = aika;
            ruutu = 1 - ruutu;
            vaihdaKuva(ruutu === 0 ? "dante-lyhty-a" : "dante-lyhty-b");
        }
    } else if (pelialkanut && ruutu !== 0) {
        ruutu = 0;
        vaihdaKuva("dante-lyhty-a");
    }

    x = x + suunta * NOPEUS;

    if (x < 4.7) x = 4.7;
    if (x > 95.3) x = 95.3;

    pelaaja.style.left = x + "%";
    pelaaja.style.transform = "translateX(-50%) scaleX(" + katse + ")";

    requestAnimationFrame(paivita);
}

requestAnimationFrame(paivita);