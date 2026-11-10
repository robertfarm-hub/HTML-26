const asetukset = { id: 1, teema: 'dark', kieli: 'fi' };

// Vaihe 1: destructuring
const { teema, kieli } = asetukset;
console.log('1. Teema:', teema, '| Kieli:', kieli);

// Vaihe 2: oletusarvo
{
  const { fonttikoko = 16 } = asetukset;
  console.log('2a. Ei fonttikokoa:', fonttikoko);
}
{
  const { fonttikoko = 16 } = { ...asetukset, fonttikoko: 20 };
  console.log('2b. Fonttikoko 20:', fonttikoko);
}
{
  const { fonttikoko = 16 } = { ...asetukset, fonttikoko: null };
  console.log('2c. Fonttikoko null:', fonttikoko);
}

// Vaihe 3: rest
const { id, ...muut } = asetukset;
console.log('3. Id:', id, '| Muut:', muut);

// Haaste: destructuring parametrissa
function naytaAsetukset({ teema, kieli, fonttikoko = 16 }) {
  console.log(`Haaste. Teema: ${teema}, kieli: ${kieli}, fonttikoko: ${fonttikoko}`);
}

naytaAsetukset(asetukset);
naytaAsetukset({ ...asetukset, fonttikoko: 20 });