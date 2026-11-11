// ===== Tehtävä 1: kolme numeroa järjestykseen =====
const t1Luku1 = document.querySelector('#t1-luku1');
const t1Luku2 = document.querySelector('#t1-luku2');
const t1Luku3 = document.querySelector('#t1-luku3');
const t1Nappi = document.querySelector('#t1-nappi');
const t1Tulos = document.querySelector('#t1-tulos');

t1Nappi.addEventListener('click', () => {
  // Luetaan kentät, muutetaan luvuiksi ja laitetaan taulukkoon
  const luvut = [Number(t1Luku1.value), Number(t1Luku2.value), Number(t1Luku3.value)];
  // Järjestetään pienimmästä suurimpaan (osa 6, dia 173)
  luvut.sort((a, b) => a - b);
  t1Tulos.textContent = `Järjestyksessä: ${luvut[0]}, ${luvut[1]}, ${luvut[2]}`;
});

// ===== Tehtävä 2: suurin viidestä =====
// querySelectorAll hakee kaikki viisi kenttää kerralla (dia 308)
const t2Kentat = document.querySelectorAll('.t2-luku');
const t2Nappi = document.querySelector('#t2-nappi');
const t2Tulos = document.querySelector('#t2-tulos');

t2Nappi.addEventListener('click', () => {
  // Oletetaan aluksi, että ensimmäinen luku on suurin
  let suurin = Number(t2Kentat[0].value);
  // Käydään kentät läpi. Jos löytyy isompi, se on uusi suurin.
  for (const kentta of t2Kentat) {
    const luku = Number(kentta.value);
    if (luku > suurin) {
      suurin = luku;
    }
  }
  t2Tulos.textContent = `Suurin luku: ${suurin}`;
});

// ===== Tehtävä 3: parillinen vai pariton =====
const t3Luku = document.querySelector('#t3-luku');
const t3Nappi = document.querySelector('#t3-nappi');
const t3Tulos = document.querySelector('#t3-tulos');

t3Nappi.addEventListener('click', () => {
  const luku = Number(t3Luku.value);
  // % antaa jakojäännöksen. Jos jakojäännös kahdella on 0, luku on parillinen.
  if (luku % 2 === 0) {
    t3Tulos.textContent = `${luku} on parillinen`;
  } else {
    t3Tulos.textContent = `${luku} on pariton`;
  }
});

// ===== Tehtävä 4: ajoneuvo iän mukaan =====
const t4Ika = document.querySelector('#t4-ika');
const t4Nappi = document.querySelector('#t4-nappi');
const t4Tulos = document.querySelector('#t4-tulos');

t4Nappi.addEventListener('click', () => {
  const ika = Number(t4Ika.value);
  // Ehdot tarkistetaan ylhäältä alas. Ensimmäinen tosi ehto voittaa.
  if (ika < 16) {
    t4Tulos.textContent = 'Saat ajaa polkupyörää';
  } else if (ika < 18) {
    t4Tulos.textContent = 'Saat ajaa mopoa';
  } else {
    t4Tulos.textContent = 'Saat ajaa autoa';
  }
});

// ===== Tehtävä 5: Hei maailma kolmella kielellä =====
const t5Kieli = document.querySelector('#t5-kieli');
const t5Nappi = document.querySelector('#t5-nappi');
const t5Tulos = document.querySelector('#t5-tulos');

t5Nappi.addEventListener('click', () => {
  // select-elementin value on valitun optionin value-attribuutti
  const kieli = t5Kieli.value;
  if (kieli === 'englanti') {
    t5Tulos.textContent = 'Hello world';
  } else if (kieli === 'ruotsi') {
    t5Tulos.textContent = 'Hej världen';
  } else if (kieli === 'espanja') {
    t5Tulos.textContent = 'Hola mundo';
  }
});