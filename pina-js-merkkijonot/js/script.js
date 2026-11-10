// Pituus
const teksti = 'JavaScript';
console.log(teksti.length);

// Isoiksi kirjaimiksi

const teksti2 = 'hei';
console.log(teksti2.toUpperCase());

// Pieniksi kirjaimiksi

const teksti3 = 'HEI';
console.log(teksti3.toLowerCase());

// Sisältääkö

const sana = 'JavaScript';
console.log(sana.includes('Script'));

// Trim

const teksti4 = '  Aino  ';
console.log(teksti4.trim());

// Ensimmäinen kirjain

const sana2 = 'Ohjelmointi';
console.log(sana2.charAt(0));

// Viimeinen merkki

const sana3 = 'JavaScript!';
console.log(sana3.charAt(sana3.length - 1));

// Siisti käyttäjätunnus
const kayttajatunnus = '  kAYttaja123  ';
console.log(kayttajatunnus.trim().toLowerCase());