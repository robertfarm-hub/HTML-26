const tuotteet = [
  { id: 1, nimi: 'Hiiri', hinta: 25, saldo: 4 },
  { id: 2, nimi: 'Näppäimistö', hinta: 49.5, saldo: 5 },
  { id: 3, nimi: 'Näyttö', hinta: 240, saldo: 0 },
  { id: 4, nimi: 'Kaapeli', hinta: 12, saldo: 7 }
];

console.log('Tuotteet:', tuotteet);

// Vaihe 2: haku
const haku2 = tuotteet.find(t => t.id === 2);
if (haku2 === undefined) {
  console.log('Tuotetta id 2 ei löydy');
} else {
  console.log('Löytyi id 2:', haku2.nimi);
}

const haku99 = tuotteet.find(t => t.id === 99);
if (haku99 === undefined) {
  console.log('Tuotetta id 99 ei löydy');
} else {
  console.log('Löytyi id 99:', haku99.nimi);
}

// Vaihe 3: päivitys
const paivitetyt = tuotteet.map(t =>
  t.id === 2 ? { ...t, hinta: 19.90 } : t
);

console.log('Alkuperäinen id 2 hinta:', tuotteet[1].hinta);
console.log('Päivitetty id 2 hinta:', paivitetyt[1].hinta);

// Haaste
const nimitekstit = paivitetyt
  .filter(t => t.saldo > 0)
  .map(t => `${t.nimi} – ${t.hinta.toFixed(2)} €`);

console.log('Saatavilla:', nimitekstit);