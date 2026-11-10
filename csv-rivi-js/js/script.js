const data = ' HTML, CSS , JavaScript, React ';
console.log('Alkuperäinen:', data);

// 1. Jaa pilkkujen kohdalta taulukoksi (välilyönnit jäävät vielä mukaan)
const osat = data.split(',');
console.log(osat);

// 2. Poista jokaisen alkion reunavälit
const siistit = osat.map(kieli => kieli.trim());
console.log(siistit);

// Haaste 1: suodata React pois
const ilmanReactia = siistit.filter(kieli => kieli !== 'React');
console.log(ilmanReactia);

// Haaste 2: yhdistä tekstiksi | -merkillä
console.log(ilmanReactia.join(' | '));