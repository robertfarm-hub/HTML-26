const nimi = '   Aino Virtanen   ';
console.log('Alkuperäinen:', nimi);

// 1. Poista reunavälit
const siisti = nimi.trim();
console.log(siisti);

// 2. Pienet kirjaimet
const pienet = siisti.toLowerCase();
console.log(pienet);

// 3. Pituus
console.log(pienet.length);

// 4. Ensimmäinen ja viimeinen merkki
console.log(pienet[0]);
console.log(pienet[pienet.length - 1]);

// Haaste: käyttäjätunnus
const tunnus = pienet.replaceAll(' ', '.');
console.log(tunnus);