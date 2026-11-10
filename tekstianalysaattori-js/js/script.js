const syote = '   JavaScript on hauska kieli ja se toimii selaimessa   ';
const hakusana = 'selaimessa';
console.log('Alkuperäinen:', syote);

// 1. Trimmaa syöte
const teksti = syote.trim();
console.log(teksti);

// 2. Pituus (trimmauksen jälkeen, jotta reunavälit eivät tule laskuun mukaan)
console.log(teksti.length);

// 3. Sanat: split(' ') jakaa välilyöntien kohdalta taulukoksi
// Huom: kaksi välilyöntiä peräkkäin tekisi tyhjän alkion (siksi haasteessa siivous)
const sanat = teksti.split(' ');
console.log(sanat);
console.log(sanat.length);

// 4. Sisältääkö hakusanan (true/false, kirjainkoko vaikuttaa)
console.log(teksti.includes(hakusana));

// 5. Isot ja pienet kirjaimet
console.log(teksti.toUpperCase());
console.log(teksti.toLowerCase());

// 6. Ensimmäiset 20 merkkiä (indeksit 0–19)
console.log(teksti.slice(0, 20));

// ===== HAASTE 1: kirjainkoon huomioimaton haku =====

const sotkuinen = '  JavaScript   on  hauska ja JAVASCRIPT   toimii selaimessa  ';
console.log('Sotkuinen:', sotkuinen);
// Template literal:
console.log(`Sotkuinen: "${sotkuinen}"`);

// A. Ilman funktiota
console.log(sotkuinen.includes('SELAIMESSA'));
console.log(sotkuinen.toLowerCase().includes('selaimessa'));

// B. funktiona
function paavo(merkkijono, haku) {
  return merkkijono.toLowerCase().includes(haku.toLowerCase());
}

console.log(paavo(sotkuinen, 'SELAIMESSA'));
console.log(paavo(sotkuinen, 'python'));