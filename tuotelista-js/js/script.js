const tuotteet = [
    { nimi: 'Hiiri', hinta: 25, saldo: 4 },
    { nimi: 'Näyttö', hinta: 240, saldo: 0 },
    { nimi: 'Kaapeli', hinta: 12, saldo: 7 }
];

const saatavilla = tuotteet.filter(t => t.saldo > 0);
console.log('Saatavilla:', saatavilla);

const nimet = saatavilla.map(t => t.nimi);
console.log('Nimet:', nimet);

const korotetut = saatavilla.map(t => t.hinta * 1.255);
console.log('Korotetut hinnat:', korotetut);

console.log('Alkuperäiset hinnat:', tuotteet.map(t => t.hinta));