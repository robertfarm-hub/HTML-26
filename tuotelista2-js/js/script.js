// ===== DATA JA ALKUTILA =====
const tuotteet = [
  { nimi: 'Hiiri', hinta: 29 },
  { nimi: 'Näppäimistö', hinta: 79 },
  { nimi: 'Näyttö', hinta: 199 },
  { nimi: 'Kuulokkeet', hinta: 59 }
];

const grid = document.querySelector('#tuotteet');
const haku = document.querySelector('#haku');
const form = document.querySelector('#lisaa');
const status = document.querySelector('#status');

// Funktio tekee yhdestä tuoteobjektista kortin ja palauttaa sen
function luoKortti(tieto) {
  const kortti = document.createElement('article');
  const otsikko = document.createElement('h2');
  const hinta = document.createElement('p');
  const nappi = document.createElement('button');

  otsikko.textContent = tieto.nimi;
  hinta.textContent = `${tieto.hinta} €`;
  nappi.textContent = 'Suosikki';
  // Merkitään nappi, jotta delegointi tunnistaa sen
  nappi.setAttribute('data-action', 'favorite');

  kortti.append(otsikko);
  kortti.append(hinta);
  kortti.append(nappi);
  return kortti;
}

// Alkuperäiset tuotteet sivulle
for (const tuote of tuotteet) {
  grid.append(luoKortti(tuote));
}

// ===== 1. SUODATUS =====
haku.addEventListener('input', (event) => {
  // Pienet kirjaimet, jotta "hii" löytää myös "Hiiri"
  const hakusana = event.target.value.toLowerCase();
  // Kortit haetaan joka kerta uudelleen, jotta myös lomakkeella lisätyt ovat mukana
  const kortit = grid.querySelectorAll('article');

  for (const kortti of kortit) {
    const nimi = kortti.querySelector('h2').textContent.toLowerCase();
    if (nimi.includes(hakusana)) {
      kortti.hidden = false;
    } else {
      kortti.hidden = true;
    }
  }
});

// ===== 2. SUOSIKIT (event delegation) =====
// Yksi listener gridissä kaikkien korttien sijaan
grid.addEventListener('click', (event) => {
  const nappi = event.target.closest('[data-action="favorite"]');
  // Jos klikkaus ei osunut suosikkinappiin, lopetetaan
  if (!nappi) return;
  const kortti = nappi.closest('article');
  kortti.classList.toggle('favorite');
});

// ===== 3. LOMAKE =====
form.addEventListener('submit', (event) => {
  // Estetään sivun uudelleenlataus
  event.preventDefault();
  // FormData kerää kentät name-attribuuttien perusteella
  const data = new FormData(event.currentTarget);
  const uusi = {
    nimi: data.get('nimi'),
    hinta: Number(data.get('hinta'))
  };
  grid.append(luoKortti(uusi));
  form.reset();
  // Haaste: statusviesti
  status.textContent = `Tuote ${uusi.nimi} lisätty.`;
});

// ===== HAASTE: Escape tyhjentää lomakkeen =====
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    form.reset();
    status.textContent = 'Lomake tyhjennetty.';
  }
});