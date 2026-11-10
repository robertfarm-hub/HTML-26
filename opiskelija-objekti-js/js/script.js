const opiskelija = {
    nimi: 'Aino',
    ika: 20,
    koulutusala: 'Ohjelmistokehitys',
    aktiivinen: true,
    yhteystiedot: {
        sahkoposti: 'aino@esimerkki.fi',
        puhelin: '040 123 4567'
    },
    esittele() {
        console.log(`${this.nimi}, ${this.ika} v, ${this.koulutusala}, pisteet ${this.pisteet}`);
    }
};

console.log('Luotu:', opiskelija);

opiskelija.ika = 21;
opiskelija.pisteet = 82;
console.log('Päivitetty:', opiskelija);

opiskelija.esittele();

// Haaste: turvallinen luku
console.log('Sähköposti:', opiskelija.yhteystiedot?.sahkoposti);
console.log('Kaupunki:', opiskelija.osoite?.kaupunki);