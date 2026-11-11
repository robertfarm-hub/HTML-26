// DATA: taulukko, jossa on viisi kurssiobjektia.
// id on lisätty haastetta varten, muut ominaisuudet tulevat diasta.
const kurssit = [
  { id: 1, nimi: 'HTML-perusteet', taso: 'Keski', aktiivinen: false },
  { id: 2, nimi: 'CSS-asettelu', taso: 'Keski', aktiivinen: false },
  { id: 3, nimi: 'JavaScript-perusteet', taso: 'Perus', aktiivinen: true },
  { id: 4, nimi: 'DOM-käsittely', taso: 'Perus', aktiivinen: true },
  { id: 5, nimi: 'Unity 2D', taso: 'Perus', aktiivinen: true }
];

// Haetaan tyhjä grid-elementti kerran ennen silmukkaa (dia 335).
const grid = document.querySelector('.grid');

// Käydään kurssit läpi. Joka kierroksella kurssi on yksi objekti taulukosta.
for (const kurssi of kurssit) {
  // LUO: tyhjät kortit ja niiden sisäelementit DOMiin. Ne ovat vasta muistissa eivätkä näy sivulla.
  const kortti = document.createElement('article');
  const otsikko = document.createElement('h2');
  const taso = document.createElement('p');

  // TÄYTÄ: tekstit objektista
  otsikko.textContent = kurssi.nimi;
  taso.textContent = `Taso: ${kurssi.taso}`;

  // TILA: aktiivinen kurssi saa luokan active, muut luokan inactive
  if (kurssi.aktiivinen === true) {
    kortti.classList.add('active');
  } else {
    kortti.classList.add('inactive');
  }

  // Haaste, osa 1: kirjoitetaan korttiin attribuutti data-course-id
  kortti.setAttribute('data-course-id', kurssi.id);

  // Kootaan kortti: h2 ja p articlen lapsiksi
  kortti.append(otsikko);
  kortti.append(taso);

  // LIITÄ: kortti gridiin
  grid.append(kortti);

  // Haaste, osa 2: luetaan sama arvo datasetin kautta ja tulostetaan
  console.log(kortti.dataset.courseId);
}