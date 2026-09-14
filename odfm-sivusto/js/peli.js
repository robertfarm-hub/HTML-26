const kentta = document.getElementById("kentta");
const pelaaja = document.getElementById("pelaaja");
const luukku = document.getElementById("luukku");

const NOPEUS = 0.4;
const PUTOAMISNOPEUS = 2.5;
const RUUTUVALI = 180;
const LUUKKU_LEVEYS = 12;
const LATTIA = 9.4;

const KENTAT = [
    { kuva: "kentta-0.png", luukku: 88 },
    { kuva: "kentta-0.png", luukku: 12 },
    { kuva: "kentta-0.png", luukku: 88 },
    { kuva: "kentta-0.png", luukku: null }
];

let kerros = 0;
let x = 50;
let y = 0;
let suunta = 0;
let katse = 1;
let putoaa = false;
let vaihdettu = false;
let pelialkanut = false;
let ruutu = 0;
let viimeVaihto = 0;

function vaihdaKuva(nimi) {
    pelaaja.style.backgroundImage = 'url("../images/' + nimi + '.png")';
}

function lataaKerros(numero) {
    const tiedot = KENTAT[numero];
    kentta.style.backgroundImage = 'url("../images/' + tiedot.kuva + '")';

    if (tiedot.luukku === null) {
        luukku.style.display = "none";
    } else {
        luukku.style.display = "block";
        luukku.style.left = tiedot.luukku + "%";
    }
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
    if (putoaa) {
        y = y - PUTOAMISNOPEUS;

        if (!vaihdettu && y < -120) {
            vaihdettu = true;
            kerros = kerros + 1;
            lataaKerros(kerros);
            y = 120;
        }

        if (vaihdettu && y <= 0) {
            y = 0;
            putoaa = false;
            vaihdettu = false;
            vaihdaKuva("dante-lyhty-a");
        }
    } else {
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

        const kohde = KENTAT[kerros].luukku;

        if (pelialkanut && kohde !== null && Math.abs(x - kohde) < LUUKKU_LEVEYS / 2) {
            putoaa = true;
            suunta = 0;
            vaihdaKuva("dante-lyhty-putoaa");
        }
    }

    pelaaja.style.left = x + "%";
    pelaaja.style.bottom = (LATTIA + y) + "%";
    pelaaja.style.transform = "translateX(-50%) scaleX(" + katse + ")";

    requestAnimationFrame(paivita);
}

lataaKerros(0);
requestAnimationFrame(paivita);