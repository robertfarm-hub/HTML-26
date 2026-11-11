// Objekti, jossa on tuotteen tiedot. Tämä on data, josta kortti rakennetaan.
const tuote = {
  nimi: 'Näppäimistö',
  hinta: 79,
  saatavilla: true
};

// Haetaan tyhjä section, johon kortti lopuksi lisätään. Luokan eteen tulee piste.
const tuotealue = document.querySelector('.products');

// LUO: neljä uutta elementtiä. Ne ovat vasta muistissa eivätkä näy sivulla.
const kortti = document.createElement('article');
const otsikko = document.createElement('h2');
const hinta = document.createElement('p');
const nappi = document.createElement('button');

// TÄYTÄ: tekstit otetaan objektista pistenotaatiolla.
otsikko.textContent = tuote.nimi;
hinta.textContent = `${tuote.hinta} €`;
nappi.textContent = 'Osta';

// Kootaan kortti: h2, p ja button lisätään articlen lapsiksi tässä järjestyksessä.
kortti.append(otsikko);
kortti.append(hinta);
kortti.append(nappi);

// Haaste: jos tuote ei ole saatavilla, kortti saa luokan sold-out.
if (tuote.saatavilla === false) {
  kortti.classList.add('sold-out');
}

// LIITÄ: valmis kortti lisätään sivulle. Vasta nyt se näkyy.
tuotealue.append(kortti);