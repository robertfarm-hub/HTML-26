const pisteet = [60, 80, 95, 70, 85, 90];

const summa = pisteet.reduce((s, p) => s + p, 0);
console.log('Summa:', summa);

const huipputulos = pisteet.some(p => p >= 95);
console.log('Onko joku saanut vähintään 95?', huipputulos);

const kaikkiValidit = pisteet.every(p => p >= 0 && p <= 100);
console.log('Ovatko kaikki välillä 0–100?', kaikkiValidit);

// Haaste
if (pisteet.length > 0) {
  console.log('Keskiarvo:', summa / pisteet.length);
} else {
  console.log('Ei pisteitä');
}

const vahintaan70 = pisteet.filter(p => p >= 70).length;
console.log('Vähintään 70 pisteen tuloksia:', vahintaan70);