const opiskelijat = [
  { id: 1, nimi: 'Aino', pisteet: 82, aktiivinen: true },
  { id: 2, nimi: 'Mika', pisteet: 64, aktiivinen: false },
  { id: 3, nimi: 'Sara', pisteet: 78, aktiivinen: true }
];

const aktiiviset = opiskelijat.filter(o => o.aktiivinen);
console.log('Aktiiviset:', aktiiviset);

const tekstit = aktiiviset.map(o => `${o.nimi} – ${o.pisteet} p`);
console.log('Tekstit:', tekstit);

// Vaihe 3: summa ja keskiarvo
const summa = aktiiviset.reduce((s, o) => s + o.pisteet, 0);
console.log('Aktiivisten pisteet yhteensä:', summa);

if (aktiiviset.length > 0) {
  console.log('Aktiivisten keskiarvo:', summa / aktiiviset.length);
} else {
  console.log('Ei aktiivisia opiskelijoita');
}

// Tahallinen virhe jotta nähdään else

if (aktiiviset.length = 0) {
  console.log('Aktiivisten keskiarvo:', summa / aktiiviset.length);
} else {
  console.log('Ei aktiivisia opiskelijoita');
}

// Haaste: haku id:llä
const haku2 = opiskelijat.find(o => o.id === 2);
if (haku2 === undefined) {
  console.log('Opiskelijaa id 2 ei löydy');
} else {
  console.log('Löytyi id 2:', haku2.nimi);
}

const haku99 = opiskelijat.find(o => o.id === 99);
if (haku99 === undefined) {
  console.log('Opiskelijaa id 99 ei löydy');
} else {
  console.log('Löytyi id 99:', haku99.nimi);
}

// Käänteinen versio: ensin löytyi, sitten ei löytynyt
if (haku2 !== undefined) {
  console.log('Löytyi id 2:', haku2.nimi);
} else {
  console.log('Opiskelijaa id 2 ei löydy');
}

// Lyhyempi versio: truthy/falsy
if (haku99) {
  console.log('Löytyi id 99:', haku99.nimi);
} else {
  console.log('Opiskelijaa id 99 ei löydy');
}