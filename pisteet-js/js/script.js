const pisteet = [60, 80, 95, 70, 85, 90];

console.log("Pisteet:", pisteet);
console.log("Määrä:", pisteet.length);

let summa = 0;

for (let i = 0; i < pisteet.length; i++) {
  summa = summa + pisteet[i];
}

console.log("Summa:", summa);

if (pisteet.length > 0) {
  const keskiarvo = summa / pisteet.length;
  console.log("Keskiarvo:", keskiarvo);
} else {
  console.log("Ei pisteitä");
}

const ensimmainenYli90 = pisteet.find((piste) => piste > 90);
console.log("Ensimmäinen yli 90:", ensimmainenYli90);