// 1. TILA: laskurin arvo. let, koska arvo muuttuu.
// Muuttuja on listenerien ulkopuolella, joten se säilyy klikkausten välillä.
let count = 0;

// Haetaan elementit kerran
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const naytto = document.querySelector('#count');

// Funktio, joka päivittää näkymän tilan mukaan
function paivita() {
  // Näkyvä teksti johdetaan muuttujasta
  naytto.textContent = count;
  // Haaste: minus pois käytöstä, kun count on 0.
  // count === 0 antaa true tai false, ja se arvo menee suoraan disabled-propertyyn.
  minus.disabled = count === 0;
}

// 2. Click-listener plus-napille
plus.addEventListener('click', () => {
  count++;      // 3. muutetaan tilaa
  paivita();    // 4. päivitetään näkymä
});

// 2. Click-listener minus-napille
minus.addEventListener('click', () => {
  // Haaste: vähennetään vain, jos arvo on yli nollan.
  if (count > 0) {
    count--;
  }
  paivita();
});

// Ajetaan kerran heti alussa, jotta minus on pois käytöstä jo arvossa 0
paivita();