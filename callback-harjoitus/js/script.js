function tervehdi(nimi) {
    console.log(`Hei ${nimi}!`);
}

tervehdi('Aino');

console.log(tervehdi);
console.log(typeof tervehdi);

function suorita(toiminto) {
    toiminto('Mika');
}

suorita(tervehdi);

const nimet = ['Sara', 'Oskari', 'Leevi'];

function jokaiselle(taulukko, toiminto) {
  for (let i = 0; i < taulukko.length; i++) {
    toiminto(taulukko[i]);
  }
}

jokaiselle(nimet, tervehdi);