const tiedosto = 'raportti.PDF';
console.log('Alkuperäinen:', tiedosto);

// 1. Normalisoi kirjainkoko
const pienet = tiedosto.toLowerCase();
console.log(pienet);

// 2. Tarkista, päättyykö .pdf-päätteeseen
console.log(pienet.endsWith('.pdf'));

// Haaste: nimi ilman päätettä (.pdf on 4 merkkiä)
const ilmanPaatetta = tiedosto.slice(0, tiedosto.length - 4);
console.log(ilmanPaatetta);
