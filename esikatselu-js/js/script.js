// Haetaan elementit kerran
const input = document.querySelector('#name');
const preview = document.querySelector('#preview');
const laskuri = document.querySelector('#laskuri');

// input-tapahtuma laukeaa jokaisella näppäilyllä
input.addEventListener('input', (event) => {
  // event.target on kenttä, johon kirjoitettiin. value on sen nykyinen teksti.
  const teksti = event.target.value;

  // Jos kenttä on tyhjä, näytetään vieras. Muuten näytetään kirjoitettu teksti.
  if (teksti === '') {
    preview.textContent = 'vieras';
  } else {
    // Haaste: slice(0, 30) ottaa tekstistä enintään 30 ensimmäistä merkkiä
    preview.textContent = teksti.slice(0, 30);
  }

  // Haaste: length kertoo, montako merkkiä tekstissä on
  laskuri.textContent = teksti.length;
});