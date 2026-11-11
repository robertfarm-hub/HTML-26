// Taulukko, jossa on kolme merkkijonoa. Tämä on data, josta lista rakennetaan.
const kielet = ['HTML', 'CSS', 'JavaScript'];

// Haetaan tyhjä ul-elementti id:n avulla (#). Tähän uudet li-elementit lisätään.
const lista = document.querySelector('#languages');

// for...of käy taulukon läpi alkio kerrallaan.
// Ensimmäisellä kierroksella kieli = 'HTML', toisella 'CSS', kolmannella 'JavaScript'.
for (const kieli of kielet) {
  // LUO: tehdään uusi li-elementti. Se on vasta muistissa eikä näy sivulla.
  const li = document.createElement('li');

  // TÄYTÄ: asetetaan li:n tekstiksi tämän kierroksen kieli.
  li.textContent = kieli;

  // Haaste: lisätään li:lle luokka language-item.
  li.classList.add('language-item');

  // LIITÄ: lisätään li ul-elementin lapseksi. Vasta nyt se näkyy sivulla.
  lista.append(li);
}